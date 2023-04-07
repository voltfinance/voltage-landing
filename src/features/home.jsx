import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client'
import { sum, sumBy } from 'lodash'
import { useEffect } from 'react'
import AngelDoa from '../assets/angeldoa.png'
import Aria from '../assets/aria.png'
import As from '../assets/as.png'
import Asc from '../assets/asc.png'
import Ascend from '../assets/ascend-p.png'
import Beefy from '../assets/beefy-p.png'
import Blockchain from '../assets/blockchain.png'
import Collider from '../assets/collide-s.png'
import Crt from '../assets/crt.png'
import Ex from '../assets/ex.png'
import FuseDollarMobile from '../assets/fuse-dollar-mobile.png'
import FuseDollar from '../assets/fuse-dollar.png'
import GanterCaptain from '../assets/ganter-captain.png'
import Gbv from '../assets/gbv.png'
import Gda from '../assets/gda.png'
import Graph from '../assets/graph.png'
import CoinWallet from '../assets/home-coin-wallet.png'
import LandingImageMobile from '../assets/home-landing-mobile.png'
import LandingImage from '../assets/home-landing.png'
import Ibc from '../assets/ibc.png'
import InfinityPad from '../assets/infinity-p.png'
import Metavest from '../assets/metavest.png'
import Mexc from '../assets/mexc.png'
import Mg from '../assets/mg-s.png'
import Node from '../assets/node.png'
import Poolz from '../assets/poolz.png'
import Quill from '../assets/quill-p.png'
import Sheesha from '../assets/sheesha.png'
import Shima from '../assets/shima.png'
import SideDoor from '../assets/sidedoor.png'
import Spark from '../assets/spark-s.png'
import Tmt from '../assets/tmt.png'
import Trg from '../assets/trg-s.png'
import Valhalla from '../assets/valhalla.png'
import Zbs from '../assets/zbs.png'
import { useTVL } from '../hooks'
import Affiliates from './shared/Affiliates'
import Banner from './shared/Banner'
import CardList from './shared/CardList'
import Download from './shared/download'
import FadeInAnimation from './shared/FadeIn'
import Faq from './shared/Faq'
import Footer from './shared/Footer'
import Image from './shared/Image'
import Navbar from './shared/Navbar'
import Padding from './shared/Padding'
import TextAnimation from './shared/TextAnimation'

import { useState } from 'react'
import VoltPhones from '../assets/phones.png'

const GET_TOTAL_VOLUME = gql`
  {
    uniswapDayDatas(first: 7, orderBy: date, orderDirection: desc) {
      dailyVolumeUSD
    }
  }
`

const GET_VOLT_STAKER_EARNING = gql`
  query getSystemInfo($id: String) {
    servingDayDatas(where: { id: $id }) {
      id
      voltServed
      voltServedUSD
    }
  }
`

const GET_TOKEN_HOLDERS = gql`
  {
    systemInfos(first: 5) {
      id
      userCount
    }
  }
`
const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/voltfinance/voltage-exchange',
  cache: new InMemoryCache(),
})

const clientVoltHolders = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/t0mcr8se/volt-holders-subgraph',
  cache: new InMemoryCache(),
})
const clientVoltStakeHolders = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/t0mcr8se/makerv2-fuse',
  cache: new InMemoryCache(),
})

function Home() {
  const totalVolume = useQuery(GET_TOTAL_VOLUME, { client })

  const tokenHolders = useQuery(GET_TOKEN_HOLDERS, {
    client: clientVoltHolders,
  })
  let [tokenStakeHolders, setTokenStakeHolders] = useState(-1)

  let {tvl, loading: tvlLoading} = useTVL()

  const getLastSevenDaysStakerEarnings = async () => {
    const previousSevenDays = new Array(7).fill().map((_, index) => {
      let date = new Date()
      return Math.floor(date.setDate(date.getDate() - index) / 8.64e7) + ''
    })
    let results = await Promise.all(
      previousSevenDays.map(async (day) => {
        return await clientVoltStakeHolders.query({
          query: GET_VOLT_STAKER_EARNING,
          variables: {
            id: day,
          },
        })
      })
    )
    let sumOfPreviousSevenDays = sum(
      results
        .map(({ data: { servingDayDatas } }) => {
          return servingDayDatas[0]?.voltServed || 0
        })
        .map((item) => Math.floor(parseFloat(item)))
    )
    return setTokenStakeHolders(sumOfPreviousSevenDays)
  }
  useEffect(() => {
    getLastSevenDaysStakerEarnings()
  }, [])
  return (
    <>
      <div className="h-screen w-screen max-h-page relative ">
        <FadeInAnimation>
          <img
            style={{ top: '66%' }}
            className="desktop   animate-fade absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={LandingImage}
          />
        </FadeInAnimation>
        <div className="container">
          <Navbar />
          <div className="pt-20 sm:pt-3"></div>

          <div className="section">
            <div className="header section__content ">
              <TextAnimation text="Supercharge your" />
              <TextAnimation text="DeFi experience" />
              <div className="header--subheader">
                Imagine being in full control of your finances while earning the highest interest rate to date. Voltage
                is a non-custodial platform that brings cutting edge financial tools to your fingertips.
              </div>
              <div className="section__buttons">
                <button
                  onClick={() => {
                    window.open('https://app.voltage.finance/#/swap', '_blank')
                  }}
                  className="button"
                >
                  Swap Now
                </button>
                <button
                  onClick={() => {
                    window.open('https://app.voltage.finance/#/swap', '_blank')
                  }}
                  className="button--inverted"
                >
                  Get fUSD
                </button>
              </div>
            </div>
            <FadeInAnimation>
              <img className="mobile  w-300 mx-auto relative z-1" src={LandingImageMobile} />
            </FadeInAnimation>
          </div>
          <Banner
            loading={
              totalVolume.loading ||
              tokenHolders.loading ||
              tvlLoading ||
              tokenStakeHolders === -1
            }
            dailVolume={
              !totalVolume.loading &&
              sumBy(totalVolume.data.uniswapDayDatas, ({ dailyVolumeUSD }) => {
                return parseFloat(dailyVolumeUSD)
              }) /
                totalVolume.data.uniswapDayDatas.length -
                1
            }
            tokenHolders={!tokenHolders.loading && tokenHolders?.data?.systemInfos[0]?.userCount}
            totalLocked={tvl}
            tokenStakeHolders={tokenStakeHolders}
          />
        </div>
      </div>
      <Padding size="sm" />
      <div className="container">
        <div className="section">
          <div className="header section__content">
            Take your DeFi everywhere you go!
            <div className="header--subheader">
              <div className=" sm:w-full">
                The Volt App is a web 3 non-custodial wallet with everything you need to carry in your pocket.
                <br></br>
                <br></br>
                Send, Receive, Swap, Stake & much more with out paying for gas fees and with just one click.
                <br></br>
                <br></br>
                Frictionless DEFI is here:
              </div>
            </div>
            <div className="section__buttons">
              <Download type="apple" />
              <Download type="google" />
            </div>
          </div>

          <div className="section__background">
            <FadeInAnimation>
              <Image aligned="right" height={1000} width={1000} mobile={VoltPhones} desktop={VoltPhones} />
            </FadeInAnimation>
          </div>
        </div>

        <Padding size="lg" />

        <div className="section ">
          <div className="section__background">
            <FadeInAnimation>
              <Image aligned="left" width={490} mobile={FuseDollarMobile} desktop={FuseDollar} />
            </FadeInAnimation>
          </div>
          <div className="header section__content">
            <div> Discover Fuse Dollar</div>
            <div className="header--subheader">
              <div className=" sm:w-full">
                The decentralized stablecoin in Fuse. Multiple stables backing fUSD helps you hedge from the collateral
                uncertainty.
                <br></br>
                <br></br>A fully DAO governed stablecoin where the community decides the collateral, fees and weights.
                <br></br>
                <br></br>
                fUSD mitigates liquidity fragmentation concentrating everything into just one stable.
              </div>
            </div>
            <div className="section__buttons">
              <button
                onClick={() => {
                  window.open('https://app.voltage.finance/#/swap', '_blank')
                }}
                className="button"
              >
                Get fUSD{' '}
              </button>
              <button
                onClick={() => {
                  window.open(
                    'https://forum.voltage.finance/t/vip-7-proposal-to-deploy-an-upgraded-fuse-stablecoin/260/14',
                    '_blank'
                  )
                }}
                className="button--inverted"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        <Padding size="lg" />

        <div className="section">
          <div className="header section__content ">
            <div>Make your crypto work for you</div>
            <div className="header--subheader">
              <div className="w-full sm:w-full">
                Check out how Voltage farms and Volt staking can help you make your crypto work for you. Lock your Volt
                tokens for stronger voting power and other benefits!
              </div>
            </div>
            <div className="section__buttons">
              <button
                onClick={() => {
                  window.open('https://docs-voltage.gitbook.io/voltage/the-platform/yield-farming', '_blank')
                }}
                className="button--inverted"
              >
                Read More
              </button>
            </div>
          </div>

          <div className="section__background">
            <FadeInAnimation>
              <Image aligned="right" mobile={CoinWallet} desktop={CoinWallet} />
            </FadeInAnimation>
          </div>
        </div>

        {/* <div className="w-full  h-300 flex justify-center items-center">
            <img className="desktop h-1/2 w-auto  mr-auto" src={HomeLine} />
        </div> */}
        <Padding size="sm" />

        <div className="header--section header--bold header--padded">join our community</div>
        <CardList />
        <Padding size="sm" />

        <div className="header--section header--bold header--padded">Partners</div>
        <Affiliates items={[Beefy, Quill, Ascend, InfinityPad, Ibc, Graph, Poolz, Mexc]} />

        <Padding size="sm" />

        <div className="header--section header--bold header--padded">Backers</div>
        <Affiliates
          items={[
            Spark,
            Shima,
            Collider,
            Crt,
            Trg,
            Tmt,
            Mg,
            Node,
            Gbv,
            Blockchain,
            Asc,
            Zbs,
            Gda,
            Sheesha,
            Metavest,
            As,
            Aria,
            AngelDoa,
            Ex,
            Valhalla,
            SideDoor,
            GanterCaptain,
          ]}
        />

        <Padding size="sm" />

        <div className="header--section header--bold header--padded">Frequently Asked Questions</div>
        <Faq />
      </div>
      <Padding size="xl" />

      <div className="h-500 w-screen">
        <div style={{ border: '1px solid #8C8C8C' }}></div>
        <div className="container p-20">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
