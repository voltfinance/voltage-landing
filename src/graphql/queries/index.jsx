import { gql } from '@apollo/client'

export const tokenPriceQuery = gql`
  query tokenPriceQuery($id: String!) {
    token(id: $id) {
      id
      derivedETH
    }
  }
`
const bundleFields = gql`
  fragment bundleFields on Bundle {
    id
    ethPrice
  }
`

export const fusePriceQuery = gql`
  query ethPriceQuery($id: Int! = 1, $block: Block_height) {
    bundles(id: $id, block: $block) {
      ...bundleFields
    }
  }
  ${bundleFields}
`

export const stableswapTokenBalancesQuery = gql`
  {
    swaps {
      id
      balances
      tokens {
        id
      }
    }
  }
`

export const GET_TOTAL_LOCKED = gql`
  {
    uniswapFactories(first: 1) {
      totalLiquidityUSD
    }
  }
`

export const GET_TOTAL_VOLUME = gql`
  {
    uniswapDayDatas(first: 7, orderBy: date, orderDirection: desc) {
      dailyVolumeUSD
    }
  }
`

export const GET_VOLT_STAKER_EARNING = gql`
  query getSystemInfo($id: String) {
    servingDayDatas(where: { id: $id }) {
      id
      voltServed
      voltServedUSD
    }
  }
`

export const GET_TOKEN_HOLDERS = gql`
  {
    systemInfos(first: 5) {
      id
      userCount
    }
  }
`
