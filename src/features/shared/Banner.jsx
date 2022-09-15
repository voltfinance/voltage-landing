import { motion } from "framer-motion";

const Banner = ({
  items = [],
}) => {
  return (
    <div className="banner">
      <div className="banner__container">
        {items.map(({ value, header },index) => (
          <div key={index} className="item">
            <div className="item__header">${parseFloat(value).toFixed(0)}</div>
            <div className="item__subheader">{header}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
