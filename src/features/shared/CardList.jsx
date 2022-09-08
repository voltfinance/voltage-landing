import Medium from "../../assets/medium.svg";

const CardList = ({
  items = [
    {
      src: Medium,
      name: "Medium",
    },
    {
      src: Medium,
      name: "Medium",
    },
    {
      src: Medium,
      name: "Medium",
    },
    {
      src: Medium,
      name: "Medium",
    },
    {
      src: Medium,
      name: "Medium",
    },
    {
      src: Medium,
      name: "Medium",
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
