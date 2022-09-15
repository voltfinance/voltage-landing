import Banner from "./shared/Banner";
import Button from "./shared/Button";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import Phone from "../assets/phone-spaceship.png";
import VoltPhone from "../assets/app-landing.png";
import AppleLogo from "../assets/apple-black.svg";
import { motion, useScroll } from "framer-motion";

import FuseLogo from "../assets/fuse-logo.png";
import FuseDollar from "../assets/fuse-dollar.png";
import FuseDollarMobile from "../assets/fuse-dollar-mobile.png";
import HomeLine from "../assets/home-line.png";
import GoogleLogo from "../assets/google-black.svg";
import Beefy from "../assets/beefy-p.png";
import Bittrex from "../assets/bittrex-p.png";
import InfinityPad from "../assets/infinity-p.png";
import Quill from "../assets/quill-p.png";

import Collider from "../assets/collide-s.png";
import Mg from "../assets/mg-s.png";
import Spark from "../assets/spark-s.png";
import Trg from "../assets/trg-s.png";
import Capital from "../assets/capital-s.png";

import LandingImage from "../assets/home-landing.png";
import LandingImageMobile from "../assets/home-landing-mobile.png";
import Ascend from "../assets/ascend-p.png";
import CoinWallet from "../assets/home-coin-wallet.png";

import Apple from "../assets/apple.svg";
import Google from "../assets/google.svg";
import Medium from "../assets/medium.svg";
import Backers from "../assets/backers.png";
import Partners from "../assets/partners.png";

import Footer from "./shared/Footer";
import Download from "./shared/download";
import Faq from "./shared/Faq";
import CardList from "./shared/CardList";
import Padding from "./shared/Padding";
import Affiliates from "./shared/Affiliates";
import FadeInAnimation from "./shared/FadeIn";
import Image from "./shared/Image";
import TextAnimation from "./shared/TextAnimation";
import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from "react";
import {uniq} from 'lodash';
const GET_TOTAL_VOLUME = gql`
{
  uniswapDayDatas(first: 1, orderBy: date, orderDirection: desc) {
    dailyVolumeUSD
  }
}
`;

const GET_TOTAL_LOCKED = gql`
{
  uniswapFactories(first: 1) {
    totalLiquidityUSD
  }
}
`;


const ADJUST=130;

function Home() {
  let [stats,setStats] =useState([{
    value:1000,
    header:'Daily Volume (usd)'
  },{
    value:1000,
    header:'Daily Volume (usd)'
  },{
    value:1000,
    header:'Daily Volume (usd)'
  },{
    value:1000,
    header:'Daily Volume (usd)'
  }])
  const totalVolume = useQuery(GET_TOTAL_VOLUME);
  const totalLocked = useQuery(GET_TOTAL_LOCKED);

  useEffect(()=>{
    if(!totalVolume.loading){
        
      
    }
    if(!totalLocked.loading){
    }
    console.log(totalVolume,'totalVolume')

  },[totalVolume,totalLocked])

 
  console.log(stats,'stats')


  
  return (
    <>
      <div className="h-screen w-screen max-h-page relative ">

        <FadeInAnimation>
          <img
            style={{top:'450px'}}
            className="desktop animate-fade absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={LandingImage}
          />
        </FadeInAnimation>
        <div className="container">
          <FadeInAnimation>
            <img
              className="mobile absolute w-300 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={LandingImageMobile}
            />
          </FadeInAnimation>
          
          {/* <img
            className="mobile absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={LandingImageMobile}
          /> */}
          <Navbar />
          <div className="pt-20 sm:pt-3"></div>

          <div className="section">
            <div className="header section__content ">
           
              <TextAnimation
           text="Supercharge your"/>
 <TextAnimation
           text="DeFi experience"/>
              <div className="header--subheader">
                Imagine being in full control of your finances while earning the
                highest interest rate to date. Voltage is a non-custodial
                platform that brings cutting edge financial tools to your
                fingertips.
              </div>
              <div className="section__buttons">
                <button className="button">Swap Now</button>
                <button className="button--inverted">Get fUSD</button>
              </div>
            </div>
          </div>
          <Banner items={stats}/>
        </div>
      </div>
      <Padding size="sm" />
      <div className="container">
        <div className="section">
          <div className="header section__content">
            Take your DeFi everywhere you go!
            <div className="header--subheader">
              <div className="w-3/4 sm:w-full">
              The Volt App is a web 3 non-custodial wallet with everything you
              need to carry in your pocket.
              <br></br>
              <br></br>
              Send, Receive, Swap, Stake & much more with out paying for gas
              fees and with just one click.
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
              <Image aligned='right'  width={769.52} mobile={VoltPhone} desktop={VoltPhone} />
            </FadeInAnimation>
          </div>
        </div>

        <Padding size="lg" />

        <div className="section ">
          <div className="section__background">
            <FadeInAnimation>
              <Image aligned='left'   width={658}  mobile={FuseDollarMobile} desktop={FuseDollar} />
            </FadeInAnimation>
          </div>
          <div className="header section__content">
            Discover Fuse Dollar
            <div className="header--subheader">
            <div className="w-3/4 sm:w-full">
              The decentralized stablecoin in Fuse. Multiple stables backing
              fUSD helps you hedge from the collateral uncertainty.
              <br></br>
              <br></br>A fully DAO governed stablecoin where the community
              decides the collateral, fees and weights.
              <br></br>
              <br></br>
              fUSD mitigates liquidity fragmentation concentrating everything
              into just one stable.
            </div>
            </div>
            <div className="section__buttons">
              <button className="button">Get fUSD </button>
              <button className="button--inverted">Read more</button>
            </div>
          </div>
        </div>

        <Padding size="lg" />

        <div className="section">
        <div className="header section__content ">
            <div className="w-3/4 sm:w-full">Make your crypto work for you</div>
            <div className="header--subheader">
            <div className="w-3/4 sm:w-full">
            Check out how Voltage farms and Volt staking can help you make
              your crypto work for you. Lock your Volt tokens for stronger
              voting power and other benefits!
            </div>
           
            </div>
            <div className="section__buttons">
              <button className="button--inverted">Read More</button>
            </div>
          </div>
         
          
          <div className="section__background">
            <FadeInAnimation>
              <Image aligned='right'   width={756.28}  mobile={CoinWallet} desktop={CoinWallet} />
            </FadeInAnimation>
          </div>
        </div>

        {/* <div className="w-full  h-300 flex justify-center items-center">
            <img className="desktop h-1/2 w-auto  mr-auto" src={HomeLine} />
        </div> */}
        <Padding size="sm" />

        <div className="header--section header--bold header--padded">
          join our community
        </div>
        <CardList />
        <Padding size="sm" />

        <div className="header--section header--bold header--padded">
          Partners
        </div>
        <Affiliates items={[Beefy, Bittrex, InfinityPad, Quill, Ascend]} />

        <Padding size="sm" />

        <div className="header--section header--bold header--padded">
          Sponsers
        </div>
        <Affiliates items={[Spark, Collider, Trg, Mg, Capital]} />

        <Padding size="sm" />

        <div className="header--section header--bold header--padded">
          Frequently Asked Questions
        </div>
        <Faq />
      </div>
      <Padding size="xl" />

      <div className="h-screen w-screen">
        <div style={{ border: "1px solid #8C8C8C" }}></div>
        <div className="container p-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
