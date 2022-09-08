import Banner from "./shared/Banner";
import Button from "./shared/Button";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import Phone from "../assets/phone.svg";
import Apple from "../assets/apple.svg";
import Google from "../assets/google.svg";
import Medium from "../assets/medium.svg";
import Backers from "../assets/backers.png";
import Partners from "../assets/partners.png";
import VoltPhone from "../assets/volt-phone.png";

import Footer from "./shared/Footer";
import Download from "./shared/download";
import Faq from "./shared/Faq";

const CARD_LIST = [
  {
    src: Medium,
    name: "Medium",
  },
  {
    src: Medium,
    name: "Medium",
  },
  {
    src: Medium,
    name: "Medium",
  },
  {
    src: Medium,
    name: "Medium",
  },
  {
    src: Medium,
    name: "Medium",
  },
  {
    src: Medium,
    name: "Medium",
  },
];

function VoltApp() {
  return (
    <>
      <div className="h-screen w-screen mx-auto max-w-7xl flex flex-col">
        <Navbar />
        <div className="flex flex-row justify-between">
          <div className=" flex flex-col w-1/2 pt-36 gap-2">
            <div className="header">
              DeFi For the Masses
              <div className="header--subheader">
                Start your DEFI journey with our easy to use app. Secure,
                Gasless and frictionless crypto is here!
              </div>
            </div>
            <div className="header--bold pt-3">Download the Volt App Today</div>
            <div className="flex gap-4 pt-3">
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
          <img style={{ width: "600px" }} src={VoltPhone} />
        </div>
      </div>

      <div className="header--title p-36 w-3/4 mx-auto text-center">
        Use your crypto money everyday to buy, swap and save. All without fees.
        You know... like cash.
      </div>

      <div className="section section--row section--full">
        <img className="section__image" src={Phone} />
        <div className="section__content">
          <div className="header">
            A non-custodial wallet that will free you from fees
            <div className="header--subheader">
              The Voltage app lets you create a contract account but no need to
              be a blockchain expert . Your fees are covered by Voltage DAO
              because users on mobile dont have to pay fees! Go explore the most
              frictionless experience in DeFi
            </div>
          </div>
        </div>
      </div>

      <div className="section section--row section--full">
        <div className="section__content">
          <div className="header">
            Stable yield
            <div className="header--subheader">
              Voltage DAO is building the building blocks for providing users
              with the best strategies for low-risk and stable yield and the
              Voltage app removes friction for users wishisng to access it
            </div>
          </div>
        </div>
        <img className="section__image" src={Phone} />
      </div>

      <div className="section section--row section--full">
        <img className="section__image" src={Phone} />

        <div className="section__content">
          <div className="header">
            Buy & Sell crypto in your local currency.
            <div className="header--subheader">
              Buying crypto is super easy with the Volt App! We aggregate the
              top global fiat ramps that will allow you to convert crypto to
              your local currency
            </div>
          </div>
        </div>
      </div>

      <div className="section section--row section--full">
        <div className="section__content">
          <div className="header">
            A new type of smart wallet
            <div className="header--subheader">
              A non custodial wallet leveraging the Fuse mobile stack and gives
              mobile users access to advanced features like rate limits, social
              recovery, swaps, NFT support, DID integration and much more - pay
              attention to our upcoming updates!{" "}
            </div>
          </div>
        </div>
        <img className="section__image" src={Phone} />
      </div>

      <div className="section section--row section--full">
        <img className="section__image" src={Phone} />

        <div className="section__content">
          <div className="header">
            Send and recieve funds from your phone contacts
            <div className="header--subheader">
              A non custodial wallet leveraging the Fuse mobile stack and gives
              mobile users access to advanced features like rate limits, social
              recovery, swaps, NFT support, DID integration and much more - pay
              attention to our upcoming updates!
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section">
     <div className="header--bold"> Powered by Fuse Network</div>
      <div>
      The Volt wallet is based on the open source stack of the Fuse network. Using the Fuse Charge it is possible to build consumer facing and scalable non-custodial wallets that have unrivaled user experience and tap into the fuse ecosystem and community of service providers and partners.

      </div>
      </div> */}

      <div className=" mx-auto max-w-7xl flex  flex-col pb-52">
        <div className="header--title mx-auto pt-52 pb-10">
          Frequently Asked Questions
        </div>
        <Faq />
      </div>

      <div style={{ border: "1px solid white" }}></div>
      <div className="mx-auto max-w-7xl">
        <Footer />
      </div>
    </>
  );
}

export default VoltApp;
