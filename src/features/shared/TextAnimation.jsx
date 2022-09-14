import { motion, useScroll } from "framer-motion";

const TextAnimation = ({ text='replace me' }) => {
   return (<div>{
   
    text.split("").map((char, index) => (
        <motion.span
        initial={{
         x: "0",
         opacity:0,
       }}
        animate={{
         x: 50,
         opacity:1,
         transition: { duration: 1,delay:index/30 }
       }}
      >
        {char}
      </motion.span>
     ))}</div>)

};
export default TextAnimation;
