import React from "react";
import styled from "styled-components";
import plus from "../../assets/images/plus.png";
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
`

const Faq = styled.details`
  width: 60%;
  margin: auto;
  margin-bottom: 14px;
  background: #0b0c13;
  &:open summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
  }
  > span {
    margin: 12px;
    min-height: 30px;
    padding-left: 33px;
    color: white;
    font-size: 16px;
  }
`

const Summary = styled.summary`
  list-style: none;
  position: relative;
  background: #0b0c13;
  padding: 21px 34px;
  > img {
    cursor: pointer;
    position: absolute;
    top: 40%;
    right: 40px;
  }
`

const Headline = styled(Title)`
  text-align: left;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
`

const Description = styled(Title)`
  color: #3ad889;
  margin-top: 14px;
  text-align: left;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
`


const FaqComponent = () => {
  let datas = [
    {
      title: `Do I still need $FUSE after I acquire $VOLT?`,
      summary: `Yes! $FUSE is the native token of the Fuse blockchain.....`,
      details: "Lorem Ipsum",
    },
    {
      title: `Are there any fees associated with this platform?`,
      summary: `Every transaction on Volt Finance will be subjected to a .3% fee.....`,
      details: "Lorem Ipsum",
    },
    {
      title: `What is the purpose of holding VOLT?`,
      summary: `You can stake your VOLT in a single stake pool to earn xVOLT. Since this is.....`,
      details: "Lorem Ipsum",
    },
    {
      title: `Can I still use Volt Finance without owning any $VOLT?`,
      summary: `Of course! You do not need the $VOLT token to use Volt Finance.`,
      details: "Lorem Ipsum",
    },
    {
      title: `How long is the FUSE/VOLT token swap available?    `,
      summary: `24 Hours`,
      details: "Lorem Ipsum",
    },
  ];


  return (
    <Background>
      <Title> Frequently Asked questions</Title>
      <img src={rocket} style={{position: 'absolute', top:'0%', left:'15%'}}/>
      {datas.length}
      {datas.map((item, index) => {
        return (
          <Faq key={index}>
            <Summary>
              <img src={plus} />
              <Headline>{item.title}</Headline>
              <Description>{item.summary}</Description>
            </Summary>
            <span>{item.details}</span>
          </Faq>
        );
      })}
    </Background>
  );
};

export default FaqComponent;
