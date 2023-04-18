import { TokenAmount } from '@voltage-finance/sdk'
import BigNumberJS from 'bignumber.js'

import { BigNumber, ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { fuseswapSubgraphClient, stableswapSubgraphClient, voltageSubgraphClient } from '../graphql/client'
import { FUSE_BUSD, FUSE_FUSD, FUSE_USDC, FUSE_USDT, FUSE_UST, STABLESWAP_POOLS } from '../graphql/constants'
import { fusePriceQuery, GET_TOTAL_LOCKED, stableswapTokenBalancesQuery, tokenPriceQuery } from '../graphql/queries'

export const getBundle = async (query = fusePriceQuery, variables = { id: 1 }) => {
  const result = await fuseswapSubgraphClient.query({
    query,
    variables,
  })

  return result.data?.bundles ? result.data?.bundles[0]?.ethPrice : null
}

export const getNativePrice = async (variables) => {
  const result = await getBundle(undefined, variables)
  return result
}

export const getTokenPrice = async (query, variables) => {
  const nativePrice = await getNativePrice()
  const result = await voltageSubgraphClient.query({
    query,
    variables,
  })

  return nativePrice && result.data?.token ? result.data?.token?.derivedETH * nativePrice : 0
}

export async function getStablecoinPrices() {
  // Stablecoin prices for the stable pool
  const fusd = await getTokenPrice(tokenPriceQuery, {
    id: FUSE_FUSD.address.toLowerCase(),
  })
  const usdt = await getTokenPrice(tokenPriceQuery, {
    id: FUSE_USDT.address.toLowerCase(),
  })

  const usdc = await getTokenPrice(tokenPriceQuery, {
    id: FUSE_USDC.address.toLowerCase(),
  })
  const busd = await getTokenPrice(tokenPriceQuery, {
    id: FUSE_BUSD.address.toLowerCase(),
  })
  const ust = await getTokenPrice(tokenPriceQuery, {
    id: FUSE_UST.address.toLowerCase(),
  })

  return {
    [FUSE_FUSD.address]: fusd,
    [FUSE_USDT.address]: usdt,
    [FUSE_USDC.address]: usdc,
    [FUSE_BUSD.address]: busd,
    [FUSE_UST.address]: ust,
  }
}
export const tryFormatDecimalAmount = (amount, tokenDecimals = 18, decimals = 0) => {
  if (!amount || !tokenDecimals) return undefined

  try {
    return new BigNumberJS(amount)
      .div(10 ** tokenDecimals)
      .toNumber()
      .toFixed(decimals)
  } catch (error) {
    console.debug(`Failed to format decimal amount: "${amount}"`, error)
  }

  return undefined
}

export const getStableswapTokenBalances = async (query = stableswapTokenBalancesQuery) => {
  const result = await stableswapSubgraphClient.query({
    query: stableswapTokenBalancesQuery,
  })

  return result.data?.swaps
}

export function useStableswapTotalLiquidity(decimals = 0) {
  let [usdPrices, setUsdPrices] = useState(null)

  let [data, setData] = useState(null)
  let [stableswapTotalLiquidity, setStableSwapTotalLiquidity] = useState(-1)
  let [totalLocked, setTotalLocked] = useState(0)

  const getData = async () => {
    const usdPrices = await getStablecoinPrices()
    const { data } = await stableswapSubgraphClient.query({
      query: stableswapTokenBalancesQuery,
    })
    const {
      data: { uniswapFactories },
    } = await voltageSubgraphClient.query({ query: GET_TOTAL_LOCKED })

    setTotalLocked(parseFloat(uniswapFactories[0]?.totalLiquidityUSD))
    setUsdPrices(usdPrices)
    setData(data?.swaps)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (!data || !usdPrices) return
    const liquidity = data.reduce((mem, swap) => {
      const poolAddress = ethers.utils.getAddress(swap.id)
      return mem.add(
        swap.balances.reduce((mem, rawBalance, i) => {
          const token = STABLESWAP_POOLS[poolAddress].tokenList[i]
          return mem.add(
            new TokenAmount(token, rawBalance).multiply(((usdPrices[token.address] ?? 1) * 1e18).toString()).toFixed(0)
          )
        }, BigNumber.from('0'))
      )
    }, BigNumber.from('0'))
    const totalLockedPlusSwap = totalLocked + parseFloat(tryFormatDecimalAmount(liquidity.toString(), 18, decimals))

    setStableSwapTotalLiquidity(totalLockedPlusSwap)
  }, [data, usdPrices, decimals, totalLocked])
  return stableswapTotalLiquidity
}
