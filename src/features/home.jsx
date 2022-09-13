import Banner from "./shared/Banner";
import Button from "./shared/Button";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import Phone from "../assets/phone-spaceship.png";
import PhoneMobile from "../assets/phone-spaceship-mobile.png";
import AppleLogo from "../assets/apple-black.svg";

import FuseLogo from "../assets/fuse-logo.png";
import FuseDollar from "../assets/fuse-dollar.png";
import FuseDollarMobile from "../assets/fuse-dollar-mobile.png";
import HomeLine from "../assets/home-line.png";
import GoogleLogo from "../assets/google-black.svg";

import LandingImage from "../assets/home-landing.png";
import LandingImageMobile from "../assets/home-landing-mobile.png";

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
import Padding from "./shared/Padding";

function Home() {
  return (
    <>
      <div className="h-screen w-screen max-h-page relative ">
      
        <img className="desktop absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={LandingImage} />

        <div className="container">
          <img
            className="mobile absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={LandingImageMobile}
          />
          <Navbar />
          <Padding size="xs" />

          <div className="section">
            <div className="header section__content ">
              Supercharge your DeFi experience
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
          <Banner />
        </div>
      </div>
      <Padding size="sm" />
      <div className="container">
        <div className="section">
          <div className="header section__content">
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
              <Download type="apple" />
              <Download type="google" />
            </div>
          </div>

          <div className="section__background">
            <img className="mobile" src={PhoneMobile} />
            <img className="desktop w-full ml-auto scale-125" src={Phone} />
          </div>
        </div>

        <Padding size="lg" />

        <div className="section ">
          <div className="section__background">
            <img className="mobile" src={FuseDollarMobile} />
            <img className="desktop mr-auto scale-125" src={FuseDollar} />
          </div>
          <div className="header section__content">
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

        <Padding size="lg" />

        <div className="section">
          <div className="header section__content ">
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
              className="ml-auto scale-125 sm:scale-1 sm:mx-auto sm:w-full"
              src={CoinWallet}
            />
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
