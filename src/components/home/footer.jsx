import React, { useState, useRef } from "react";
import styled from "styled-components";

import NewsletterForm from "./newsletter_form";
import useOutsideClick from "@/hooks/useOutsideClick.jsx";

import logo from "../../assets/images/voltage_icon.svg";
import column from "../../assets/images/column.png";
import github from "@/assets/images/github.png";
import telegram from "@/assets/images/telegram.png";
import twitter from "@/assets/images/twitter.png";
import discord from "@/assets/images/discord.png";

const Main = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) -62.8%,
    rgba(0, 0, 0, 0.35) 13.77%,
    rgba(58, 216, 137, 0.35) 70.07%,
    rgba(243, 252, 31, 0.35) 134.56%
  );
`;
const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 75px;
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 162px;
  > img {
    height: 162px;
    position: absolute;
    left: -9px;
    top: 0;
  }
`;
const Link = styled.a`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 41px;
  color: white;
`;
const Button = styled(Link)`
  line-height: 19px;
  background: linear-gradient(
    273.62deg,
    rgba(243, 252, 31, 0.5) 9.22%,
    rgba(58, 216, 137, 0.5) 100%
  );
  border: 1.5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 40px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 23px;
`;

const Footer = () => {
  const [isOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  useOutsideClick(hamburgerRef, () => {
    console.log(`hamburgerRef ${isOpen}`);
    if (isOpen) {
      setMenuOpen(false);
    }
  });

  return (
    <Main>
      <Content>
        <div style={{ width: "100%", marginBottom: "50px" }}>
          <img src={logo} width='275px'/>
        </div>
        <Wrap>
          <Column style={{ marginRight: "120px" }}>
            <img src={column} />
            <Link href={"https://fuse.io"}>Getting Started</Link>
            <Link href={"https://staking.fuse.io/"}>Fuse Staking</Link>
            <Link href={"https://staking.fuse.io/"}>Fuse Studio</Link>
            <Link href={"https://fuse.cash/"}>Fuse Cash</Link>
          </Column>
          <Column>
            <img src={column} />
            <Button href={""}>Open App →</Button>
            <Link href={"https://fuse.io"}></Link>
            <Link href={"https://staking.fuse.io/"}>Voltage Docs</Link>
            <Link href={"https://staking.fuse.io/"}>Work with us</Link>
          </Column>
        </Wrap>
        <Wrap>
          <Column>
            <div ref={hamburgerRef} className="homepage">
              {" "}
              <NewsletterForm setMenuOpen={setMenuOpen} isOpen={isOpen} />
            </div>
            <Social>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://t.me/voltage_finance"
              >
                <img
                  src={telegram}
                  style={{ width: "40px", marginRight: "10px" }}
                />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://github.com/voltfinance/"
              >
                <img
                  src={github}
                  style={{ width: "40px", marginRight: "10px" }}
                />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://twitter.com/voltfinance"
              >
                <img
                  src={twitter}
                  style={{ width: "40px", marginRight: "10px" }}
                />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://discord.gg/voltagefinance"
              >
                <img src={discord} style={{ width: "40px" }} />
              </a>
            </Social>
          </Column>
        </Wrap>
      </Content>
    </Main>
  );
};

export default Footer;
