import React, { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

import starsAnimationData from "@/assets/lotties/stars.json";
import lightingAnimationData from "@/assets/lotties/lighting.json";
import smokeAnimationData from "@/assets/lotties/smoke.json";
import scroll from "@/assets/images/scroll.png";
import voltage from "@/assets/images/voltage_icon.png";
import computer from "@/assets/images/computer.png";
import smartphone from "@/assets/images/smartphone.png";
import income from "@/assets/images/income.png";
import timeline from "@/assets/images/timeline.png";
import underline from "@/assets/images/underline.png";

import VoltSaleCard from "./volt_sale_card";
import Faq from "./faq";
import Content from "./content";
import Appstores from "./appstores";
import Footer from "./footer";

import {Supercharge, PassiveIncome} from './backgrounds'

const Button = styled.a`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: white;
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

const HomePage = () => {
  const starsRef = useRef(null);
  const lightingRef = useRef(null);
  const smokeRef = useRef(null);
  const { animate } = useSelector((state) => state.animation);
  const [isOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (smokeRef.current) {
      lottie.loadAnimation({
        animationData: smokeAnimationData,
        container: smokeRef.current,
        renderer: "svg",
        autoplay: true,
        loop: true,
      });
    }
  }, []);

  useEffect(() => {
    if (lightingRef.current) {
      lottie.loadAnimation({
        animationData: lightingAnimationData,
        container: lightingRef.current,
        renderer: "svg",
        autoplay: animate,
        loop: false,
      });
    }
  }, [animate]);

  useEffect(() => {
    if (starsRef.current) {
      lottie.loadAnimation({
        animationData: starsAnimationData,
        container: starsRef.current,
        renderer: "svg",
        loop: true,
      });
    }
  }, []);

  return (
    <>
      <section className="homepage__container">
        <div className="logo">
          <img alt="voltage" src={voltage} />
          <Button href={""}>Open App →</Button>
        </div>

        <div className="homepage">
          <img src={scroll} style={{position: 'absolute', bottom: '5%', left: '2%'}} />
          <img src={underline} style={{position: 'absolute', bottom: '0%'}} />
          {!isMobile && <div className="stars" ref={starsRef} />}
          {!isMobile && (
            <>
              <div className="smoke" ref={smokeRef} />{" "}
              <div className="smoke" ref={smokeRef} />
            </>
          )}
          {animate && <div className="lighting" ref={lightingRef} />}
          <div className="homepage__main grid-y align-spaced align-middle">
            <div className="headline cell">
              <h1 className="headline__title">Frictionless DEFI is here</h1>
              <p className="headline__text">Welcome to a new era of finance</p>
            </div>
          </div>
        </div>

        <Content
          gradient={true}
          bg={<Supercharge />}
          reverse={false}
          title={"Supercharge your experience with Fuse Cash"}
          subtitle={
            <>
              <p>
                Imagine being in full control of your finances while earning the
                highest interest rate to date.
              </p>
              <p>
                Voltage is a non-custodial platform that brings cutting edge
                finacial tools to your fingertips.
              </p>
            </>
          }
          images={[smartphone, computer]}
          component={<Appstores />}
        />

        <Content
          bg={<PassiveIncome />}
          reverse={true}
          title={"Create passive income"}
          subtitle={
            <>
              <p>Let’s face it, we all want our money to stretch further. </p>
              <p>
                {" "}
                Explore your options to earn competitive yields with us below.
              </p>
            </>
          }
          images={[income]}
          component={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="http://docs.fuse.io/"
                className="button button--primary"
                style={{
                  width: "280px",
                  margin: "auto",
                  lineHeight: "58px",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                Learn more
              </a>
            </div>
          }
        />

        <Content imageTitle={"Timeline"} images={[timeline]} />

        <div className="eco-round">
          <h1>VOLT Ecosystem Round</h1>
          <div className="eco-round__wrapper">
            <VoltSaleCard />
          </div>
        </div>

        <Faq />

        <Footer />
      </section>
    </>
  );
};

export default HomePage;
