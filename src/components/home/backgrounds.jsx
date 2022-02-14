import React from "react";
import star from "../../assets/images/star.svg";
import planet from "../../assets/images/planet.svg";
import rocket from "../../assets/images/rocket.svg";

export const Supercharge = () => {
  return (
    <>
      <img
        src={star}
        style={{ position: "absolute", top: "5%", left: "10%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "40%", left: "2%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "12%", right: "9%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "42%", right: "5%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "65%", right: "13%" }}
      />
    </>
  );
};

export const PassiveIncome = () => {
  return (
    <>
      <img
        src={star}
        style={{ position: "absolute", top: "29%", left: "19%" }}
      />
      <img
        src={planet}
        style={{ position: "absolute", top: "65%", left: "12%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "97%", left: "19%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "24%", right: "19%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "50%", right: "12%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "80%", right: "19%" }}
      />
    </>
  );
};

export const Ecosystem = () => {
  return (
    <>
      <img
        src={star}
        style={{ position: "absolute", top: "15%", left: "18%" }}
      />
      <img
        src={planet}
        style={{ position: "absolute", top: "15%", right: "20%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", bottom: "0%", left: "5%" }}
      />
      <img
        src={star}
        style={{ position: "absolute", top: "65%", right: "5%" }}
      />
      <img
        src={rocket}
        style={{ position: "absolute", top: "50%", right: "10%" }}
      />
      <img
        src={rocket}
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "rotate(180deg)",
        }}
      />
    </>
  );
};
