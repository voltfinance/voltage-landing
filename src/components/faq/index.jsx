import React from "react";
import styled from "styled-components";
import Item from "./item";
import rocket from "../../assets/images/rocket-swing.png";

const Background = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 80px;
`

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
`

const FaqComponent = () => {
  let datas = [
    {
      title: `Do I still need $FUSE after I acquire $VOLT?`,
      summary: `Yes! $FUSE is the native token of the Fuse blockchain.....Yes! $FUSE is the native token of the Fuse blockchain.....Yes! $FUSE is the native token of the Fuse blockchain.....`
    },
    {
      title: `Are there any fees associated with this platform?`,
      summary: `Every transaction on Volt Finance will be subjected to a .3% fee.....`
    },
    {
      title: `What is the purpose of holding VOLT?`,
      summary: `You can stake your VOLT in a single stake pool to earn xVOLT. Since this is.....`
    },
    {
      title: `Can I still use Volt Finance without owning any $VOLT?`,
      summary: `Of course! You do not need the $VOLT token to use Volt Finance.`
    },
    {
      title: `How long is the FUSE/VOLT token swap available?    `,
      summary: `24 Hours`
    },
  ];


  return (
    <Background>
      <Title> Frequently Asked questions</Title>
      <img src={rocket} style={{position: 'absolute', top:'0%', left:'15%'}}/>
      {datas.map((data, index) => {
        return (
         <Item item={data} key={index}/ >
        );
      })}
    </Background>
  );
};

export default FaqComponent;
