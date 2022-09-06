import Button from "../shared/Button";
import Header from "../shared/Header";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__header"></div>
      <div className="landing__content">
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

        <div className="landing__content__image"></div>
      </div>
      <div className="landing__banner"></div>
    </div>
  );
}

export default Landing;
