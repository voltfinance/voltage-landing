const Banner = ({
  items = [
    {
      header: "$50,341",
      subheader: "Daily Volume (usd)",
    },
    {
      header: "$50,341",
      subheader: "Daily Volume (usd)",
    },
    {
      header: "$50,341",
      subheader: "Daily Volume (usd)",
    },
    {
      header: "$50,341",
      subheader: "Daily Volume (usd)",
    },
  ],
}) => {
  return (
    <div className="banner">
      {items.map(({ header, subheader }) => (
        <div className="item">
          <div className="item__header">{header}</div>
          <div className="item__subheader">{subheader}</div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
