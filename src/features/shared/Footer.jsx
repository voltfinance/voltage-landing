import Logo from "../../assets/logo.svg";
import Medium from "../../assets/medium.svg";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Discord from "../../assets/discord.svg";
import File from "../../assets/file.svg";
import VoltTokenSymbol from "../../assets/volt.svg";

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
          <div className="links__item flex">
            <img style={{width:'12px', marginRight:'4px'}} src={VoltTokenSymbol}/>
            Add VOLT token</div>
        </div>
       <div className="mt-auto">
       <div className="signup">
          <input placeholder="Enter Email" className="signup__input" />
          <button className="signup__button">Sign up</button>
        </div>
        <div className="socials">
         <img src={Medium} className="socials__logo" />
         <img src={Twitter} className="socials__logo" />
         <img src={Github} className="socials__logo" />
         <img src={Telegram} className="socials__logo" />
         <img src={Discord} className="socials__logo" />
         <img src={File} className="socials__logo" />

      </div>
       </div>

      

      </div>
    </div>
  );
};

export default Footer;
