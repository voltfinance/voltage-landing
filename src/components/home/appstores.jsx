import React from "react";
import styled from "styled-components";
import apple from "../../assets/images/appstore.png";
import google from "../../assets/images/googleplay.png";

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  > a {
    margin-right: 10px;
  }
`;

const AppStores = () => {
  return (
    <ImageWrap>
      <a href="https://play.google.com/store/apps/details?id=io.fuse.cash">
        {" "}
        <img src={google} />
      </a>
      <a href="https://apps.apple.com/us/app/fuse-cash/id1559937899">
        <img src={apple} />{" "}
      </a>
    </ImageWrap>
  );
};

export default AppStores;
