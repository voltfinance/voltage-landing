import React from "react";
import star from "../../assets/images/star.svg"
import planet from "../../assets/images/planet.svg"

export const Supercharge = () => {
  return (
  <>
    <img src={star} style={{position: 'absolute', top: '15%', left:'20%'}}/>
    <img src={star} style={{position: 'absolute', top: '40%', left:'9%'}}/>
    <img src={star} style={{position: 'absolute', top: '20%', right:'15%'}}/>
    <img src={star} style={{position: 'absolute', top: '42%', right:'5%'}}/>
    <img src={star} style={{position: 'absolute', top: '65%', right:'13%'}}/>
  </>)
}

export const PassiveIncome = () => {
  return(
    <>
      <img src={star} style={{position: 'absolute', top: '45%', left:'23%'}}/>
      <img src={planet} style={{position: 'absolute', top: '68%', left:'20%'}}/>
      <img src={star} style={{position: 'absolute', top: '90%', left:'27%'}}/>
      <img src={star} style={{position: 'absolute', top: '27%', right:'25%'}}/>
      <img src={star} style={{position: 'absolute', top: '50%', right:'15%'}}/>
      <img src={star} style={{position: 'absolute', top: '70%', right:'18%'}}/>
    </>
  )
}
