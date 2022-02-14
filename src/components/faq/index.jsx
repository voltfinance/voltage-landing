import React from "react";
import styled from "styled-components";
import Item from "./item";
import rocket from "../../assets/images/rocket-swing.svg";

const Background = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 40px;
`;

const Title = styled.div`
  width: 100%;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
`;

const FaqComponent = () => {
  let datas = [
    {
      title: `Do I still need $FUSE after I acquire $VOLT?`,
      summary: `Yes! $FUSE is the native token of the Fuse blockchain. You will still need Fuse in order to pay for gas on your transactions.`,
    },
    {
      title: `Are there any fees associated with this platform?`,
      summary: `Every transaction on Volt Finance will be subjected to a .3% fee. There are two smaller fees that combine to make up the total fee. The first is a .25% fee that is given to liquidity providers in the form of VOLT tokens and a 0.05% fee that is sent to the xVOLT pool. This fee is used to buy back VOLT tokens periodically. So when you exchange your xVOLT for VOLT, you'll get more VOLT than what you started with.`,
    },
    {
      title: `What is the purpose of holding VOLT?`,
      summary: `You can stake your VOLT in a single stake pool to earn xVOLT. Since this is a single-stake pool all impermanent loss potential is removed. xVOLT has built into its contract to buy back VOLT periodically increasing the ratio of VOLT to xVOLT over time.`,
    },
    {
      title: `Can I still use Volt Finance without owning any $VOLT?`,
      summary: ` Of course! You do not need the $VOLT token to use Volt Finance.`,
    },
    {
      title: `How long is the FUSE/VOLT token swap available?    `,
      summary: `24 Hours`,
    },
  ];

  return (
    <Background>
      <Title> Frequently Asked questions</Title>
      <img
        src={rocket}
        style={{ position: "absolute", top: "-10%", left: "15%" }}
      />
      {datas.map((data, index) => {
        return <Item item={data} key={index} />;
      })}
    </Background>
  );
};

export default FaqComponent;
