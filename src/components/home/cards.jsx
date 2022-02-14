import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import VoltSaleCard from "./volt_sale_card";
import { useWeb3Context } from "../../context/web3";

import logo from "../../assets/images/voltage_logo.svg";
import star from "../../assets/images/star.svg";
import starGreen from "../../assets/images/star_green.svg";
import more from "../../assets/images/more.svg";

const Gradient = styled.div`
  display: flex;
  justify-content: center:
  color: white;
  width: 50vw;
  padding: 4px;
  margin: auto;
  background: black;
  border-radius: 10px;
  color: linear-gradient(110deg, #3ad889 -43%, #f3fc1fc9 100%);
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 1.75px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(110deg, #3ad889 -43%, #f3fc1fc9 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #0b0c13 inset;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    color: white;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;
  }
  > h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #f3fc1f;
    margin-top: 32px;
  }
  > a {
    color: white;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-top: 35px;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const Timer = styled.div`
  font-family: Newake;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 139px;
  background: -webkit-linear-gradient(
    268.7deg,
    #f3fc1f -15.14%,
    #f3fc1f 43.63%,
    #00ff80 110.24%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Cards = () => {
  const { account, toggleWeb3Modal } = useWeb3Context();
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:24");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 24);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <Gradient>
      {timer == "00:00:00" ? (
        <>
          {account ? (
            <div className="eco-round">
              <div className="eco-round__wrapper">
                <VoltSaleCard />
              </div>
            </div>
          ) : (
            <Column
              style={{ padding: "40px", width: "100%", position: "relative" }}
            >
              <Flex>
                <Column>
                  <img src={logo} width={"180px"} />
                </Column>
                <Column style={{ paddingTop: "32px" }}>
                  <h1>Here you can claim your tokens as they unlock.</h1>
                  <h1>Thank you for being a part of our ecosystem!</h1>
                  <h2>500 Volt tokens available to unvest</h2>
                  <h2></h2>
                </Column>
              </Flex>
              <Column>
                <button
                  className="button button--primary"
                  onClick={toggleWeb3Modal}
                >
                  Connect wallet
                </button>
                <a href="https://docs.fuse.io">Learn about Volt</a>
              </Column>
            </Column>
          )}
        </>
      ) : (
        <Column
          style={{ margin: "auto", width: "625px", position: "relative" }}
        >
          <img
            src={star}
            style={{
              width: "30px",
              position: "absolute",
              top: "10%",
              right: "20%",
            }}
          />
          <img
            src={star}
            style={{
              width: "30px",
              position: "absolute",
              top: "50%",
              left: "2%",
            }}
          />
          <img
            src={star}
            style={{
              width: "30px",
              position: "absolute",
              top: "60%",
              right: "50%",
            }}
          />
          <img
            src={starGreen}
            style={{
              width: "30px",
              position: "absolute",
              top: "70%",
              right: "10%",
            }}
          />
          <img
            src={starGreen}
            style={{
              width: "30px",
              position: "absolute",
              top: "85%",
              left: "15%",
            }}
          />
          <img
            src={starGreen}
            style={{
              width: "30px",
              position: "absolute",
              top: "5%",
              left: "15%",
            }}
          />
          <Timer>{timer}</Timer>

          <button
            style={{
              margin: "auto",
              width: "315px",
              marginBottom: "35px",
              fontWeight: "500",
            }}
            className="button button--primary"
            onClick={toggleWeb3Modal}
          >
            <img
              src={more}
              style={{ paddingBottom: "3px", paddingRight: "2px" }}
            />{" "}
            Read More about the round
          </button>
        </Column>
      )}
    </Gradient>
  );
};

export default Cards;
