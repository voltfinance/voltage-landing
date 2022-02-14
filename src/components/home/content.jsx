import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: relative;
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
  justify-content: center;
  width: 100%;
  order: ${({ reverse }) => (reverse ? 1 : 0)};
`;

const Texts = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
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
  padding-left: 23%;
  padding-right: 23%;
  font-weight: normal;
  line-height: 39px;
  margin-top: 30px;
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 350px;
  padding: 0 1rem;
  margin: auto;
  > img {
    width: ${({ imageTitle }) => (imageTitle ? "80vw" : "")};
    margin: auto;
  }
`;

const ContentCreator = ({
  gradient,
  bg,
  center,
  reverse,
  title,
  subtitle,
  component,
  images,
  imageTitle,
}) => {
  return (
    <Main background={gradient} center={imageTitle || center}>
      {bg}
      <Texts>
        {title && <Title> {title} </Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </Texts>

      <Content reverse={reverse}>
        {images.length == 2 ? (
          <ImageWrap style={{ height: "55vh" }}>
            <img
              src={images[0]}
              style={{
                position: "absolute",
                left: "25%",
                zIndex: "100",
                height: "375px",
              }}
            />
            <img
              src={images[1]}
              style={{ position: "absolute", right: "25%", height: "375px" }}
            />
          </ImageWrap>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column-reverse",
            }}
          >
            {imageTitle && (
              <Title style={{ width: "100%" }}>{imageTitle}</Title>
            )}
            {images[0] ? (
              <ImageWrap imageTitle={imageTitle}>
                {imageTitle ? (
                  <img src={images[0]} style={{ width: "85vw" }} />
                ) : (
                  <img src={images[0]} style={{ width: "45vw" }} />
                )}
              </ImageWrap>
            ) : null}
          </div>
        )}
      </Content>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {component}
      </div>
    </Main>
  );
};

ContentCreator.defaultProps = {
  gradient: false,
  reverse: false,
  title: "",
  subtitle: "",
  images: [],
  component: <></>,
};

export default ContentCreator;
