import { motion } from "framer-motion";

const Item = ({ value, prefix = "$", text = "", loading }) => {
  let parsedValue = typeof value === NaN ? 0 : parseFloat(value).toFixed(0);

  return loading ? (
    <div style={{ padding: "18px" }} className="item">
      <div
        style={{
          backgroundColor: "grey",
          height: "16px",
          borderRadius: "9999px",
          width: "50%",
        }}
        className="item__header animate-pulse"
      ></div>
      <div
        className="item__subheader animate-pulse"
        style={{
          backgroundColor: "grey",
          height: "12px",
          marginTop: "8px",
          borderRadius: "9999px",
          width: "60%",
        }}
      ></div>
    </div>
  ) : (
    <div className="item">
      <div className="item__header">
        {prefix}
        {parsedValue}
      </div>
      <div className="item__subheader">{text}</div>
    </div>
  );
};

const Banner = ({
  dailVolume = 0,
  tokenHolders = 0,
  totalLocked = 0,
  tokenStakeHolders = 0,
  loading = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      style={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.9,
          duration: 1.5,
        },
      }}
      className="banner"
    >
      <div className="banner__container">
        <Item value={dailVolume} text="Daily Volume" loading={loading} />
        <Item
          value={tokenHolders}
          text="Token holders"
          prefix=""
          loading={loading}
        />
        <Item value={totalLocked} text="Total Value Locked" loading={loading} />
        <Item
          value={tokenStakeHolders}
          text={`Volt staker's earning (Week)`}
          loading={loading}
          prefix=""
        />
      </div>
    </motion.div>
  );
};

export default Banner;
