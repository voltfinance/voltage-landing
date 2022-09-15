import Logo from "../../assets/logo.svg";
import Medium from "../../assets/medium.svg";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Discord from "../../assets/discord.svg";
import File from "../../assets/file.svg";
import VoltTokenSymbol from "../../assets/volt.svg";
import Social from "./Social";

const LINKS=[{
  name:'Getting Started',
  to:''
},
{
  to:'https://staking.fuse.io/',
  name:'Fuse Staking'
},
{
  to:'https://studio.fuse.io/',
  name:'Fuse Studio'
},{
  to:'https://fuse.cash/',
  name:'Fuse Cash'
},{
  to:'https://docs-voltage.gitbook.io/voltage/welcome/introduction',
  name:'Voltage Docs'
},{
  to:'https://form.typeform.com/to/RLauPver',
  name:'Work with us'
},{
  to:'https://staking.fuse.io/',
  name:'Add VOLT token',
  icon:VoltTokenSymbol
},

]

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} className="footer__logo" />

      <div className="footer__container">
        <div className="links">
          {
            LINKS.map(({name,to,icon})=>(<div onClick={()=>{
              window.open(to, '_blank')
            }} className={`links__item ${icon&&'flex'}`}>{icon?(<> 
            <img style={{width:'12px', marginRight:'4px'}} src={VoltTokenSymbol}/>
          Add VOLT token</>):name}</div>))
          }
       
        </div>
       <div className="mt-auto">
       <div className="signup">
          <input placeholder="Enter Email" className="signup__input" />
          <button className="signup__button">Sign up</button>
        </div>
        <Social/>
       </div>

      

      </div>
    </div>
  );
};

export default Footer;
