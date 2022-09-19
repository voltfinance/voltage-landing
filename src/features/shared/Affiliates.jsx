import { motion, useScroll } from "framer-motion";
const Affiliates = ({ items = [] }) => {
  return (
    <div className="affiliates">
      {items.map((img,index) => (
          
        <motion.img 
        initial={{
            x: 50/(index+1),
            opacity:0,
           }}
           viewport={{ once: true }}
           whileInView={{
            x: 0,
            opacity:1,
            transition: { duration: 1 }
           }}
        src={img} className="affiliates__image" />
      ))}
    </div>

    
  );
};
export default Affiliates;
