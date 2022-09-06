import Banner from "../shared/Banner";
import Button from "../shared/Button";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import Phone from "../../assets/phone.svg";
import Footer from "../shared/Footer";

function Home() {
  return (
    <>
      <div className="h-screen w-screen mx-auto max-w-7xl h-screen w-screen   bg-black flex flex-col">
        <Navbar />

        <div className=" flex flex-col w-1/2 pt-36 gap-2">
          <Header
            content="Supercharge your DeFi experience"
            subheader="Imagine being in full control of your finances while earning the
              highest interest rate to date. Voltage is a non-custodial platform
              that brings cutting edge financial tools to your fingertips."
          />
          <div className="flex gap-4 pt-3">
            <Button content="Swap Now" />
            <Button inverted content="Get fUSD" />
          </div>
        </div>

        <Banner />
      </div>

      <div className="h-screen w-screen mx-auto max-w-7xl flex justify-between  flex-row">
        <div className="flex  flex-col w-1/2 pt-60 gap-2">
          <Header
            content="Take your DeFi everywhere you go!"
            subheader="The Volt App is a web 3 non-custodial wallet with everything you need to carry in your pocket.

          Send, Receive, Swap, Stake & much more with out paying for gas fees and with just one click.
          
          Frictionless DEFI is here:
          "
          />
          <div className="flex gap-4 pt-3">
            <Button content="Swap Now" />
            <Button inverted content="Get fUSD" />
          </div>
        </div>
        <img className="w-1/5 mr-10" src={Phone} />
      </div>
      <div style={{ border: "1px solid white" }}></div>
      <div className="mx-auto max-w-7xl">
        <Footer />
      </div>
    </>
  );
}

export default Home;

{
  /* <div className="home">
      <div className="home__landing">
        <div className="home__landing__header"></div>
        <div className="home__landing__content">
          <div className="flex flex-col w-1/2 gap-2 justify-center p-20">
            <Header
              content="Supercharge your DeFi experience"
              subheader="Imagine being in full control of your finances while earning the
              highest interest rate to date. Voltage is a non-custodial platform
              that brings cutting edge financial tools to your fingertips."
            />
            <div className="flex gap-2">
              <Button content="Swap Now" />
              <Button inverted content="Swap Now" />
            </div>
          </div>

          <div className="home__landing__content__image"></div>
        </div>
        <div className="home__landing__banner"></div>
      </div>

      <div className="home__section">
        <div className="home__section__content"></div>
        <div className="home__section__image"></div>
      </div>
      <div className="home__section">
        <div className="home__section__image"></div>

        <div className="home__section__content"></div>
      </div>
      <div className="home__section">
        <div className="home__section__content"></div>
        <div className="home__section__image"></div>
      </div>
    </div> */
}
