import Banner from "./shared/Banner";
import Button from "./shared/Button";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import Phone from "../assets/phone-spaceship.png";
import FuseDollar from "../assets/fuse-dollar.png";
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
    <div className="home">
      <div className="container px-5 pt-5 h-screen">
        <Navbar />
        <div className="section">
          <div className="section__content pt-40">
            <div className="header">
              Supercharge your DeFi experience
              <div className="header--subheader">
                Imagine being in full control of your finances while earning the
                highest interest rate to date. Voltage is a non-custodial
                platform that brings cutting edge financial tools to your
                fingertips.
              </div>
            </div>
            <div className="flex gap-4 pt-3">
              <button className="button">Swap Now</button>
              <button className="button--inverted">Get fUSD</button>
            </div>
          </div>
          <img
          className="section__image section__image--left-aligned"
          src={LandingImage}
        />
        </div>
        <Banner />
      </div>

      <div className="section pt-20">
        <div className="section__content  section__content--padded">
          <div className="header">
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
          </div>
          <div className="flex gap-4 sm:gap-2 pt-3">
            <Download
              src={Apple}
              header="Avaliable on the"
              subheader="App Store"
            />
            <Download src={Google} header="GET IT ON" subheader="Google Play" />
          </div>
        </div>
        <img
          className="section__image section__image--left-aligned"
          src={Phone}
        />
      </div>

      <div className="section">
        <div className="section__image section__image--right-aligned">
          <img src={FuseDollar} />
        </div>
        <div className="section__content  section__content--padded">
          <div className="header">
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
          </div>
          <div className="flex gap-4 pt-3">
            <button className="button">Swap Now</button>
            <button className="button--inverted">Get fUSD</button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__content  section__content--padded">
          <div className="header">
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
          </div>
          <div className="flex gap-4 pt-3">
            <div className="flex gap-4 pt-3">
              <button className="button--inverted">Read More</button>
            </div>
          </div>
        </div>
        <div className="section__image section__image--reduced-size section__image--left-aligned mx-10">
          <img src={CoinWallet} />
        </div>
      </div>
      <div className="container--padded">
        <div className="header--title text-center  pb-10">
          join our community
        </div>
        <CardList />
      </div>

      <div className="container--padded  ">
        <div className="header--title text-center  pb-10">
          Frequently Asked Questions
        </div>
        <Faq />
      </div>

      <div style={{ border: "1px solid white" }}></div>
      <div className="container--padded">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
