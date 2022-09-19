import Logo from "../../assets/logo.svg";
import Medium from "../../assets/medium.svg";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Discord from "../../assets/discord.svg";
import File from "../../assets/file.svg";
import VoltTokenSymbol from "../../assets/volt.svg";
import Social from "./Social";


const LINKS = [
  {
    name: "Getting Started",
    to: "",
  },
  {
    to: "https://staking.fuse.io/",
    name: "Fuse Staking",
  },
  {
    to: "https://studio.fuse.io/",
    name: "Fuse Studio",
  },
  {
    to: "https://fuse.cash/",
    name: "Fuse Cash",
  },
  {
    to: "https://docs-voltage.gitbook.io/voltage/welcome/introduction",
    name: "Voltage Docs",
  },
  {
    to: "https://form.typeform.com/to/RLauPver",
    name: "Work with us",
  },
  {
    onClick: async()=>{
      const tokenAddress = '0x34Ef2Cc892a88415e9f02b91BfA9c91fC0bE6bD4';
      const tokenSymbol = 'VOLT';
      const tokenDecimals = 18;
      const tokenImage = 'https://fuse-brand-assets.s3.eu-central-1.amazonaws.com/fuse.png';
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });
      
        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    },
    name: "Add VOLT token",
    icon: VoltTokenSymbol,
  },
  
];

const Footer = () => {
 
  return (
    <div className="footer">
      <img src={Logo} className="footer__logo" />

      <div className="footer__container">
        <div className="links">
          {LINKS.map(({ name, to,onClick, icon }) => (
            <div
              onClick={async() => {
                if(onClick){
                  return onClick();
                }
            
                window.open(to, "_blank");
              }}
              className={`links__item ${icon && "flex"}`}
            >
              {icon ? (
                <div className="links__icon">
                  <img src={VoltTokenSymbol} />
                  Add VOLT token
                </div>
              ) : (
                name
              )}
            </div>
          ))}
        </div>
        <div className="footer__contact">
          <div className="signup">
            <input placeholder="Enter Email" className="signup__input" />
            <button className="signup__button">Sign up</button>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Footer;
