import { useState } from "react";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";

const Faq = ({
  items = [
    {
      q: "Do I still need $FUSE after I acquire $VOLT?",
      a: "A no-code platform for communities and businesses to build new economic models, leveraging powerful tools and APIs in a low entry sandbox.",
    },
    {
      q: "Do I still need $FUSE after I acquire $VOLT?",
      a: "A fast, decentralized payment network that offers Ethereum smart contract capabilities and enables anyone to have ownership in the infrastructure.",
    },
    {
      q: "Do I still need $FUSE after I acquire $VOLT?",
      a: "An open-source, mobile alternative to legacy banking that allows anyone anywhere in the world to access digital payments and decentralized finance.",
    },
    {
      q: "Do I still need $FUSE after I acquire $VOLT?",
      a: "An open-source, mobile alternative to legacy banking that allows anyone anywhere in the world to access digital payments and decentralized finance.",
    },
  ],
}) => {
  let [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="faq">
      {items.map(({ q, a }, index) => (
        <div className="faq__container">
          <div className="faq__item">
            <div>{q}</div>
            <div
              onClick={() => {
                if (openIndex === index) {
                  setOpenIndex(-1);
                  return;
                }
                setOpenIndex(index);
              }}
              className="faq__icon"
            >
              <img src={openIndex !== index ? Plus : Minus} />
            </div>
          </div>
          {openIndex === index && <div className="faq__item--open">{a}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
