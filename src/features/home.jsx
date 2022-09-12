import Banner from "./shared/Banner";
import Button from "./shared/Button";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import Phone from "../assets/phone-spaceship.png";
import PhoneMobile from "../assets/phone-spaceship-mobile.png";

import FuseDollar from "../assets/fuse-dollar.png";
import FuseDollarMobile from "../assets/fuse-dollar-mobile.png";
import HomeLine from "../assets/home-line.png";

import LandingImage from "../assets/home-landing.png";
import CoinWallet from "../assets/coin-wallet.png";

import Apple from "../assets/apple.svg";
import Google from "../assets/google.svg";
import Medium from "../assets/medium.svg";
import Backers from "../assets/backers.png";
import Partners from "../assets/partners.png";

import Footer from "./shared/Footer";
import Download from "./shared/download";
import Faq from "./shared/Faq";
import CardList from "./shared/CardList";

function Home() {
  return (
    <>
      <div className="h-screen w-screen relative ">
        <div className=" h-full w-full bg-center		 left-0 z-0  mx-auto sm:mx-auto absolute bg-home-landing-desktop sm:bottom-20 sm:bg-contain sm:w-375 sm:bg-home-landing-mobile  sm:left-0 sm:right-0  sm:bg-bottom bg-no-repeat"></div>
        <div className="max-w-7xl px-10 sm:px-5 mx-auto h-full w-full ">
          <Navbar />
          <div className="section   sm:pt-10 ">
            <div className="header section__header">
            Supercharge your
DeFi experience
              <div className="header--subheader">
              Imagine being in full control of your finances while earning the highest interest
rate to date. Voltage is a non-custodial platform that brings cutting edge financial tools to your fingertips.
              </div>
              <div className="section__buttons">
                <button className="button">Swap Now</button>
                <button className="button--inverted">Get fUSD</button>
              </div>
            </div>
          </div>
        </div>
        <Banner />
      </div>

      <div className="max-w-7xl px-10 sm:px-5 mx-auto h-full w-full">
        <div className="pt-10 sm:pt-0"></div>

        <div className="section">
          <div className="header section__header">
            Take your DeFi everywhere you go!
            <div className="header--subheader">
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
            <div className="section__buttons">
              <Download
                src={Apple}
                header="Avaliable on the"
                subheader="App Store"
              />
              <Download
                src={Google}
                header="GET IT ON"
                subheader="Google Play"
              />
            </div>
          </div>

          <div className="section__background">
            <img className="mobile" src={PhoneMobile} />
            <img className="desktop w-full ml-auto scale-125" src={Phone} />
          </div>
        </div>
        <div className="pt-10 sm:pt-0"></div>

        <div className="section">
          <div className="section__background">
            <img className="mobile" src={FuseDollarMobile} />
            <img className="desktop mr-auto scale-110" src={FuseDollar} />
          </div>
          <div className="header section__header">
            Discover Fuse Dollar
            <div className="header--subheader">
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
            <div className="section__buttons">
              <button className="button">Get fUSD </button>
              <button className="button--inverted">Read more</button>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="header section__header ">
            <div className="pt-24 sm:pt-0"></div>
            Make your crypto work for you
            <div className="header--subheader">
              Check out how Voltage farms and Volt staking can help you make
              your crypto work for you. Lock your Volt tokens for stronger
              voting power and other benefits!
            </div>
            <div className="section__buttons">
              <button className="button--inverted">Read More</button>
            </div>
          </div>
          <div className="section__background">
            <img
              className="w-450 ml-auto scale-110 sm:scale-1 sm:mx-auto sm:w-full"
              src={CoinWallet}
            />
          </div>
        </div>
        <div className="w-full  h-300 flex justify-center items-center">

            <img className="desktop h-1/2 w-auto  mr-auto" src={HomeLine} />

        </div>

        <div className="header--title text-center pb-10 pt-32">
          join our community
        </div>
        <CardList />

        <div className="header--title text-center pb-10 pt-32">
          Frequently Asked Questions
        </div>
        <Faq />
      </div>
      <div className="h-screen w-screen pt-32">
        <div style={{ border: "1px solid white" }}></div>
        <div className="max-w-7xl pt-32 px-10 sm:px-5 mx-auto h-full w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;