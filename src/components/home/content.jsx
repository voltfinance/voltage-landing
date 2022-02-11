import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ background }) =>
    background
      ? "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 13.99%, rgba(58, 216, 137, 0.25) 70.07%, rgba(243, 252, 31, 0.25) 134.56%);"
      : "black"};
  min-height: 100vh;
  justify-content: ${({ center }) => (center ? "center" : "space-evenly")};
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  order: ${({ reverse }) => (reverse ? 1 : 0)};
`;
const Texts = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  font-family: SF Pro Display;
  font-style: normal;
  order: 1;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;
  text-align: center;
  color: white;
`;
const SubTitle = styled(Title)`
  font-size: 24px;
  order: 1;
  padding-left: 20%;
  padding-right: 20%;
  font-weight: normal;
  line-height: 24px;
  margin-top: 30px;
`;
const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 350px;
  margin: auto;
  > img {
    width: ${({ imageTitle }) => (imageTitle ? "80vw" : "")};
    margin: auto;
  }
`;

const VoltSaleCard = ({
  gradient,
  reverse,
  title,
  subtitle,
  component,
  images,
  imageTitle,
}) => {
  return (
    <Background background={gradient} center={imageTitle}>
      <Texts>
        {title && <Title> {title} </Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </Texts>

      <Content reverse={reverse}>
        {images.length == 2 ? (
          <ImageWrap style={{ height: "650px" }}>
            <img
              src={images[0]}
              style={{ position: "absolute", left: "20%", zIndex: "100" }}
            />
            <img
              src={images[1]}
              style={{ position: "absolute", right: "20%" }}
            />
          </ImageWrap>
        ) : (
          <div style={{ margin: "auto" }}>
            {imageTitle && (
              <Title style={{ marginBottom: "75px", width: "100%" }}>
                {imageTitle}
              </Title>
            )}
            <ImageWrap imageTitle={imageTitle}>
              <img src={images[0]} style={{ minWidth: "750px" }} />
            </ImageWrap>
          </div>
        )}
      </Content>

      {component}
    </Background>
  );
};

VoltSaleCard.defaultProps = {
  gradient: false,
  reverse: false,
  title: "",
  subtitle: "",
  images: [],
  component: <></>,
};

export default VoltSaleCard;