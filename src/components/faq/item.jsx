import React, { useState } from "react";
import styled from "styled-components";
import plus from "../../assets/images/plus.png";
import Icon from "./icon"


const Summary = styled.summary`
width: 60%;
  margin: auto;
  margin-bottom: 14px;
  list-style: none;
  position: relative;
  background: #0b0c13;
  padding: 21px 34px;
  border-radius: 12px;
  > img {
    cursor: pointer;
    position: absolute;
    top: 40%;
    right: 40px;
  }
`

const Headline = styled.h1`
  width: 100%;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  color: ${({ active }) => (active ? '#3ad889' : 'white')};

`

const Description = styled.h2`
  font-family: SF Pro Display;
  margin-top: 14px;
  text-align: left;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  color: ${({ active }) => (active ? 'white' : '#3ad889')};
`


const ItemFaq = (question, key) => {
  const [show, setShow] = useState(false)
  return (
    
            <Summary  key={key} onClick={()=>{setShow(!show)}}>
              <img src={plus} />
              <Headline active={show}>{question.item.title}</Headline>
              <Description active={show}><Icon fill={show ? 'white' : '#3ad889'} />{show ? question.item.summary : question.item.summary.substr(0, 48)}{question.item.summary.length > 48 && 
                !show && '....' }</Description>
            </Summary>
        );
  }
export default ItemFaq
