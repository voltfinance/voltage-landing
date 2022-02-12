import React from "react";
import star from "../../assets/images/star.svg"

export const Supercharge = () => {
  return (
  <div>
    <img src={star} style={{position: 'absolute', top: '15%', left:'20%'}}/>
    <img src={star} style={{position: 'absolute', top: '40%', left:'9%'}}/>
    <img src={star} style={{position: 'absolute', top: '20%', right:'15%'}}/>
    <img src={star} style={{position: 'absolute', top: '42%', right:'5%'}}/>
    <img src={star} style={{position: 'absolute', top: '65%', right:'13%'}}/>
  </div>)
}

