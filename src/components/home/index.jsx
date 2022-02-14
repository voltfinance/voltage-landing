import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

import starsAnimationData from "@/assets/lotties/stars.json";
import lightingAnimationData from "@/assets/lotties/lighting.json";
import smokeAnimationData from "@/assets/lotties/smoke.json";
import voltage from "@/assets/images/voltage_icon.png";
import computer from "@/assets/images/computer.png";
import income from "@/assets/images/income.svg";
import timeline from "@/assets/images/timeline.svg";
import underline from "@/assets/images/underline.png";

import Cards from "./cards";
import Faq from "../faq";
import Content from "./content";
import Appstores from "./appstores";
import Footer from "./footer";

import { Supercharge, PassiveIncome, Ecosystem } from "./backgrounds";
import ConnectButton from "./connectButton";

const HomePage = () => {
  const starsRef = useRef(null);
  const lightingRef = useRef(null);
  const smokeRef = useRef(null);
  const { animate } = useSelector((state) => state.animation);

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
          <div className="menu-wrap">
            <a
              className="button-secondary"
              href={"https://app.voltage.finance/"}
            >
              Open App →
            </a>
            <ConnectButton />
          </div>
        </div>

        <div className="homepage">
          <img src={underline} style={{ position: "absolute", bottom: "0%" }} />
          {!isMobile && <div className="stars" ref={starsRef} />}
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
                highest interest rate to date. Voltage is a non-custodial
                platform that brings cutting edge finacial tools to your
                fingertips.
              </p>
            </>
          }
          images={[computer]}
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
                href="http://docs.voltage.finance"
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
        <Content
          title={"Volt Ecosystem Round"}
          component={<Cards />}
          bg={<Ecosystem />}
          center={true}
        />

        <Faq />

        <Footer />
      </section>
    </>
  );
};

export default HomePage;
