import AppBuyCrypto from "../assets/app-buy-crypto.png";
import AppCoins from "../assets/app-coins.png";
import AppExchange from "../assets/app-exchange.png";
import AppPlant from "../assets/app-plant.png";
import AppWallet from "../assets/coin-wallet.png";
import AppleLogo from "../assets/apple-black.svg";
import FuseLogo from "../assets/fuse-logo.png";
import GoogleLogo from "../assets/google-black.svg";
import VoltPhone from "../assets/app-landing.png";
import Faq from "./shared/Faq";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Padding from "./shared/Padding";
import Download from "./shared/download";
import FadeInAnimation from "./shared/FadeIn";
import Image from "./shared/Image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import TextAnimation from "./shared/TextAnimation";

let title = "DeFi For the Masses";

function VoltApp() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="section">
          <div className="header section__content--not-centered">
            <div className="pt-24 sm:pt-3"></div>

            <TextAnimation text="DeFi For the Masses" />

            <div className="header--subheader">
              Start your DEFI journey with our easy to use app. Secure, Gasless
              and frictionless crypto is here!
            </div>
            <div className="header--mini-bold  pt-4">
              Download the Volt App Today
            </div>
            <div className="section__buttons">
              <Download type="apple" />
              <Download type="google" />
            </div>
          </div>

          <div className="section__background">
            <FadeInAnimation>
              <div className="p-6 sm:0"></div>
              <Image
                width={400.88}
                aligned="right"
                mobile={VoltPhone}
                desktop={VoltPhone}
              />
            </FadeInAnimation>
          </div>
        </div>
      </div>

      <div className="container">
        <Padding size="xs" />
        <div className="header--section">
          Volt lets you use your crypto money everyday to buy, swap and save.
          All without fees. You know... like cash.
        </div>
        <Padding size="sm" />

        <div className="section">
          <div className="section__background">
            <FadeInAnimation>
              <Image
                aligned="left"
                width={494.44}
                mobile={AppWallet}
                desktop={AppWallet}
              />
            </FadeInAnimation>
          </div>

          <div className="header section__content ">
            <div className="pt-20 sm:pt-0"></div>
            A non-custodial wallet that will free you from fees
            <div className="header--subheader">
              The Voltage app lets you create a contract account but no need to
              be a blockchain expert . Your fees are covered by Voltage DAO
              because users on mobile dont have to pay fees! Go explore the most
              frictionless experience in DeFi
            </div>
          </div>
        </div>
        <Padding size="lg" />

        <div className="section ">
          <div className="header section__content ">
            Stable yield
            <div className="header--subheader">
              Voltage DAO is building the building blocks for providing users
              with the best strategies for low-risk and stable yield and the
              Voltage app removes friction for users wishisng to access it{" "}
            </div>
          </div>
          <div className="section__background">
            <FadeInAnimation>
              <Image
                aligned="right"
                width={404}
                mobile={AppPlant}
                desktop={AppPlant}
              />
            </FadeInAnimation>
          </div>
        </div>
        <Padding size="lg" />

        <div className="section ">
          <div className="section__background">
            <FadeInAnimation>
              <Image
                aligned="left"
                width={463.94}
                mobile={AppCoins}
                desktop={AppCoins}
              />
            </FadeInAnimation>
          </div>
          <div className="header section__content ">
          <div className="pt-28 sm:pt-0"></div>

            Send and recieve funds from your phone contacts
            <div className="header--subheader">
              No need to copy/paste public keys, send funds trough your phone
              contacts! Mobile payments were never so easy- and it works
              globally!
            </div>
          </div>
        </div>
        <Padding size="lg" />

        <div className="section ">
          <div className="header section__content ">
            Buy & Sell crypto in your local currency.
            <div className="header--subheader">
              Buying crypto is super easy with the Volt App! We aggregate the
              top global fiat ramps that will allow you to convert crypto to
              your local currency{" "}
            </div>
          </div>
          <div className="section__background">
            <FadeInAnimation>
              <Image
                aligned="right"
                width={358.03}
                mobile={AppBuyCrypto}
                desktop={AppBuyCrypto}
              />
            </FadeInAnimation>
          </div>
        </div>
        <Padding size="lg" />

        <div className="section ">
          <div className="section__background">
            <FadeInAnimation>
              <Image
                aligned="left"
                width={358.03}
                mobile={AppExchange}
                desktop={AppExchange}
              />
            </FadeInAnimation>
          </div>
          <div className="header section__content ">
            A new type of smart wallet
            <div className="header--subheader">
              A non custodial wallet leveraging the Fuse mobile stack and gives
              mobile users access to advanced features like rate limits, social
              recovery, swaps, NFT support, DID integration and much more - pay
              attention to our upcoming updates!
            </div>
          </div>
        </div>
        <Padding size="lg" />

        <div className="section ">
          <div className="header section__content">
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
            <FadeInAnimation>
              <Image
                aligned="right"
                width={358.03}
                mobile={FuseLogo}
                desktop={FuseLogo}
              />
            </FadeInAnimation>
          </div>
        </div>

        <Padding size="lg" />

        <div className="header--section header--bold header--padded">
          Frequently Asked Questions
        </div>
        <Faq />
      </div>

      <Padding size="xl" />

      <div className="h-500 w-screen">
        <div style={{ border: "1px solid #8C8C8C" }}></div>
        <div className="container  p-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default VoltApp;
