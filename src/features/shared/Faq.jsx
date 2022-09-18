import { useState } from "react";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import { motion } from "framer-motion";

const Faq = ({
  items = [
    {
      q: "What is the Volt App?",
      a: `Focusing on reducing friction and non-experienced users, the Volt App provides a seamless experience on mobile devices. Non-custodial and without fees, the Volt App is the best way to interact with DeFi for beginners. <br></br>Read more about the app <a className="faq__link" href="/app">link</a>.
      `,
    },
    {
      q: "What is the VOLT token for?",
      a: "The VOLT token is the governance token of Voltage Finance. The token will give you ownership over the Dex, from rewards allocation to revenue share. Also by holding the VOLT token you will be able to participate in snapshot votes and much more.",
    },
    {
      q: "What about VOLT tokenomics?",
      a: `Read more about VOLT tokenomics in our  <a className="faq__link" href="https://docs-voltage.gitbook.io/voltage/tokenomics">docs.</a>`,
    },
    {
      q: "What is the purpose of holding VOLT?",
      a: "You can stake your VOLT in a single stake pool. By staking Volt, you receive a yield and the ability to govern the Voltage platform at large. Voltage is a relatively newer platform, therefore many features will need to be implemented in the near future.",
    },
    {
      q: "How secure Voltage Finance is?",
      a: `
      We have audited most of our contracts with Quillhash.
      <br></br>
      Check out our docs <a className="faq__link" href="https://docs-voltage.gitbook.io/voltage/welcome/introduction">link</a>.

      `,
    },
  ],
}) => {
  let [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {items.map(({ q, a }, index) => (
        <motion.div
        initial={{ opacity: 1 }}
        animate={openIndex==index||openIndex===-1? {opacity:1}:{opacity:0.3}}
          onClick={() => {
            if (openIndex === index) {
              setOpenIndex(-1);
              return;
            }
            setOpenIndex(index);
          }}
          className="faq__container"
        >
          <div className="faq__item">
            <div  dangerouslySetInnerHTML={{ __html:q }}></div>

            <div className="faq__icon">
              <img src={openIndex !== index ? Plus : Minus} />
            </div>
          </div>
          {openIndex === index && <motion.div    className="faq__item--open">
          <div className="faq__answer"  dangerouslySetInnerHTML={{ __html:a }}></div>
            </motion.div>}
        </motion.div>
      ))}
    </div>
  );
};

export default Faq;
