import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} className="footer__logo" />

      <div className="footer__container">
        <div className="links">
          <div className="links__item">Getting Started</div>
          <div className="links__item">Fuse Staking</div>
          <div className="links__item">Fuse Studio</div>
          <div className="links__item">Fuse Cash</div>
          <div className="links__item">Voltage Docs</div>
          <div className="links__item">Work with us</div>
          <div className="links__item">Add VOLT token</div>
        </div>
        <div className="signup">
          <input placeholder="Enter Email" className="signup__input" />
          <button className="signup__button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
