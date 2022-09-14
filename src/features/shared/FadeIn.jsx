import { motion, useScroll } from "framer-motion";

const FadeInAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default FadeInAnimation;
