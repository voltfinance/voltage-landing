import { motion } from "framer-motion";

const Banner = ({
  items = [],
}) => {
  return (
    <motion.div initial={{opacity:0}} style={{opacity:0}} animate={{opacity:1, transition:{
      delay:0.9,
      duration:1.5
    }}} className="banner">
      <div className="banner__container">
        {items.map(({ value, header },index) => (
          <div key={index} className="item">
            <div className="item__header">${parseFloat(value).toFixed(0)}</div>
            <div className="item__subheader">{header}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Banner;
