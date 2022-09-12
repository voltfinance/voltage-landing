import Medium from "../../assets/medium.svg";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Discord from "../../assets/discord.svg";
import File from "../../assets/file.svg";

const CardList = ({
  items = [
    {
        src: Telegram,
        name: "Telegram",
    },
    {
      src: Twitter,
      name: "Twitter",
    },
    {
      src: Medium,
      name: "Medium",
    },
    {
      src: Github,
      name: "Github",
    },
    {
      src: Discord,
      name: "Discord",
    },
    {
      src: File,
      name: "Docs",
    },
  ],
}) => {
  return (
    <div className="list">
      {items.map(({ src, name }) => (
        <div className="card">
          <img src={src} className="card__logo" />
          <div className="card__name">{name}</div>
        </div>
      ))}
    </div>
  );
};
export default CardList;
