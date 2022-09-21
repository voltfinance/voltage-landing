import Discord from "../../assets/discord.svg";
import File from "../../assets/file.svg";
import Github from "../../assets/github.svg";
import Medium from "../../assets/medium.svg";
import Telegram from "../../assets/telegram.svg";
import Twitter from "../../assets/twitter.svg";

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

const Social = () => {
  return (
    <div className="socials">
      {SOCIALS.map(({ src, to }) => (
        <img
          src={src}
          onClick={() => {
            window.open(to, "_blank");
          }}
          className="socials__logo"
        />
      ))}
    </div>
  );
};
export default Social;
