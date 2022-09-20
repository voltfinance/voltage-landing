import { motion } from "framer-motion";

const Banner = ({
  dailVolume = 0,
  tokenHolders = 0,
  totalLocked = 0,
  tokenStakeHolders = 0,
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
        <div className="item">
          <div className="item__header">
            ${parseFloat(dailVolume).toFixed(0)}
          </div>
          <div className="item__subheader">Daily Volume</div>
        </div>
        <div className="item">
          <div className="item__header">
            {parseFloat(tokenHolders).toFixed(0)}
          </div>
          <div className="item__subheader">Token holders</div>
        </div>
        <div className="item">
          <div className="item__header">
            ${parseFloat(totalLocked).toFixed(0)}
          </div>
          <div className="item__subheader">Total Value Locked</div>
        </div>
        <div className="item">
          <div className="item__header">
            ${parseFloat(tokenStakeHolders).toFixed(0)}
          </div>
          <div className="item__subheader">Volt staker's earning (24h)</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
