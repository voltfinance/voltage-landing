import Banner from "./shared/Banner";
import Button from "./shared/Button";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import Phone from "../assets/phone-spaceship.png";
import PhoneMobile from "../assets/phone-spaceship-mobile.png";

import FuseDollar from "../assets/fuse-dollar.png";
import FuseDollarMobile from "../assets/fuse-dollar-mobile.png";

import LandingImage from "../assets/home-landing.png";
import CoinWallet from "../assets/coin-wallet.png";
import AppCoins from "../assets/app-coins.png";
import AppWallet from "../assets/app-wallet.png";
import AppPlant from "../assets/app-plant.png";
import AppExchange from "../assets/app-exchange.png";

import Apple from "../assets/apple.svg";
import Google from "../assets/google.svg";
import Medium from "../assets/medium.svg";
import Backers from "../assets/backers.png";
import Partners from "../assets/partners.png";
import VoltPhone from "../assets/volt-phone.png";
import Footer from "./shared/Footer";
import Download from "./shared/download";
import Faq from "./shared/Faq";
import CardList from "./shared/CardList";
import AppleLogo from "../assets/apple-black.svg";
import GoogleLogo from "../assets/google-black.svg";

function VoltApp() {
  return (
    <>
      <div className="h-fit min-h-screen w-screen relative ">
        <div className="max-w-7xl px-10 sm:px-5 mx-auto h-full w-full ">
          <Navbar />
          <div className="section sm:pt-10 ">
            <div className="header section__header flex flex-col">
              DeFi For the Masses
              <div className="header--subheader">
                Start your DEFI journey with our easy to use app. Secure,
                Gasless and frictionless crypto is here!
              </div>
              <div className="header--bold text-base pt-4">
                Download the Volt App Today
              </div>
              <div className="section__buttons">
                <button className="button--logo">
                  <img src={AppleLogo} />
                  <div className="mt-0.5"> Apple Store</div>
                </button>
                <button className="button--logo">
                  <img src={GoogleLogo} />
                  <div className="mt-0.5">Get fUSD</div>
                </button>
              </div>
            </div>

            <div className="section__background">
              <img
                style={{ marginTop: "-120px" }}
                className="desktop h-650  w-auto ml-auto"
                src={VoltPhone}
              />
              <img className="mobile " src={VoltPhone} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-10 sm:px-5 pt-10 mx-auto h-full w-full">
        <div className="header--title-secondary text-center mx-auto w-3/4 sm:w-full">
          Volt lets you use your crypto money everyday to buy, swap and save.
          All without fees. You know... like cash.
        </div>

        <div className="section">
          <div className="section__background">
            <img
              className="w-450 ml-auto sm:mx-auto sm:w-full"
              src={AppWallet}
            />
          </div>
          <div className="header section__header ">
            <div className="pt-40 sm:pt-0"></div>A non-custodial wallet that
            will free you from fees
            <div className="header--subheader">
              The Voltage app lets you create a contract account but no need to
              be a blockchain expert . Your fees are covered by Voltage DAO
              because users on mobile dont have to pay fees! Go explore the most
              frictionless experience in DeFi
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header section__header ">
            <div className="pt-64 sm:pt-0"></div>
            Stable yield
            <div className="header--subheader">
              Voltage DAO is building the building blocks for providing users
              with the best strategies for low-risk and stable yield and the
              Voltage app removes friction for users wishisng to access it{" "}
            </div>
          </div>
          <div className="section__background">
            <img
              className="w-450 ml-auto  sm:scale-1 sm:mx-auto sm:w-full"
              src={AppPlant}
            />
          </div>
        </div>

        <div className="section">
          <div className="section__background">
            <img
              className="w-450 ml-auto sm:scale-1 sm:mx-auto sm:w-full"
              src={AppCoins}
            />
          </div>
          <div className="header section__header ">
            <div className="pt-32 sm:pt-0"></div>
            Send and recieve funds from your phone contacts{" "}
            <div className="header--subheader">
              No need to copy/paste public keys, send funds trough your phone
              contacts! Mobile payments were never so easy- and it works
              globally!{" "}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header section__header ">
            <div className="pt-32 sm:pt-0"></div>
            Buy & Sell crypto in your local currency.
            <div className="header--subheader">
              Buying crypto is super easy with the Volt App! We aggregate the
              top global fiat ramps that will allow you to convert crypto to
              your local currency{" "}
            </div>
          </div>
          <div className="section__background">
            <img
              className="w-450 ml-auto sm:scale-1 sm:mx-auto sm:w-full"
              src={AppExchange}
            />
          </div>
        </div>

        <div className="section">
          <div className="section__background">
            <img
              className="w-450 ml-auto sm:scale-1 sm:mx-auto sm:w-full"
              src={AppExchange}
            />
          </div>
          <div className="header section__header ">
            <div className="pt-32 sm:pt-0"></div>A new type of smart wallet
            <div className="header--subheader">
              A non custodial wallet leveraging the Fuse mobile stack and gives
              mobile users access to advanced features like rate limits, social
              recovery, swaps, NFT support, DID integration and much more - pay
              attention to our upcoming updates!
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header section__header ">
            <div className="pt-32 sm:pt-0"></div>
            Powered by Fuse Network
            <div className="header--subheader">
              The Volt wallet is based on the open source stack of the Fuse
              network. Using the Fuse Charge it is possible to build consumer
              facing and scalable non-custodial wallets that have unrivaled user
              experience and tap into the fuse ecosystem and community of
              service providers and partners.{" "}
            </div>
          </div>
          <div className="section__background">
            <img
              className="w-450 ml-auto sm:scale-1 sm:mx-auto sm:w-full"
              src={AppExchange}
            />
          </div>
        </div>

        <div className="pt-40 sm:pt-0"></div>

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

export default VoltApp;
