import Medium from "../../assets/medium.svg";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Discord from "../../assets/discord.svg";
import File from "../../assets/file.svg";

const SOCIALS = [
  {
    src: Telegram,
    name: "Telegram",
    to: "https://t.me/voltage_finance",
  },
  {
    src: Twitter,
    name: "Twitter",
    to: "https://twitter.com/voltfinance",
  },
  {
    src: Medium,
    name: "Medium",
    to: "https://medium.com/@voltage.finance",
  },
  {
    src: Github,
    name: "Github",
    to: "https://github.com/voltfinance/",
  },
  {
    src: Discord,
    name: "Discord",
    to: "https://discord.com/invite/voltagefinance",
  },
  {
    src: File,
    name: "Docs",
    to: "https://docs-voltage.gitbook.io/voltage/welcome/introduction",
  },
];

const CardList = ({}) => {
  return (
    <div className="list">
      {SOCIALS.map(({ src, name, to }) => (
        <div
          onClick={() => {
            window.open(to, "_blank");
          }}
          className="card"
        >
          <img src={src} className="card__logo" />
          <div className="card__name">{name}</div>
        </div>
      ))}
    </div>
  );
};
export default CardList;
