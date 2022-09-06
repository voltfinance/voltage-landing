import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} className="footer__logo" />
    
      <div className="footer__link">
        <div className="footer__link__item">Getting Started</div>
        <div className="footer__link__item">Fuse Staking</div>
        <div className="footer__link__item">Fuse Studio</div>
        <div className="footer__link__item">Fuse Cash</div>
        <div className="footer__link__item">Voltage Docs</div>
        <div className="footer__link__item">Work with us</div>
        <div className="footer__link__item">Add VOLT token to your wallet</div>
      </div>
      {/* <div className="footer__signup">
        <input className="footer__signup__input" />
        <button className="footer__signup__button">Sign up for updates</button>
      </div> */}
    </div>
  );
};

export default Footer;
