import React from "react";
import styled from "styled-components";

const CardContents = ({
  title,
  description,
  firstAside,
  secondAside,
  leftCircleTitle,
  leftCircleText,
  whiteCircleContent,
  orangeCircleContent,
}) => {
  const CardHeader = styled.h1`
    font-family: "Bebas Neue";
    letter-spacing: 1.5px;
    font-weight: normal;
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 10px;

    @media only screen and (min-width: 746px) {
      letter-spacing: 3px;
      font-size: 60px;
      margin-bottom: 20px;
    }
  `;

  const OrangeColored = styled.span`
    color: #ff5e00;
  `;

  const CardMessage = styled.h3`
    font-family: "ClanPro", sans-serif;
    font-weight: normal;
    text-transform: initial;

    @media only screen and (min-width: 746px) {
      font-size: 17.5px;
      margin: 30px;
    }
  `;

  const CirclesContainer = styled.div`
    display: flex;
  `;

  const LeftCircle = styled.div`
    float: left;
    border: solid #ff5e00 5px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 10px;
    text-align: center;

    @media only screen and (min-width: 746px) {
      border: solid #ff5e00 10px;
      width: 300px;
      height: 300px;
      margin: 20px;
      text-align: center;
    }
  `;

  const CircleHeader = styled.h1`
    font-family: "Bebas Neue";
    font-weight: normal;
    letter-spacing: 0.5px;
    font-size: 29px;
    margin-bottom: 0px;
    margin-top: 10px;
    display: inline-block;

    @media only screen and (min-width: 746px) {
      letter-spacing: 1px;
      font-size: 72.5px;
      margin-top: 20px;
    }
  `;

  const CircleMessage = styled.h3`
    font-family: "ClanPro", sans-serif;
    font-weight: normal;
    text-transform: initial;
    margin-top: 2.5px;

    @media only screen and (min-width: 746px) {
      margin-top: 5px;
    }
  `;

  const RightCirclesContainer = styled.div`
    text-align: center;
    justify-content: center;
  `;

  const WhiteRightCircle = styled.div`
    background: #ffffff;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    margin: 10px;
    font-family: "Bebas Neue";
    text-align: center;
    color: #ff5e00;

    @media only screen and (min-width: 746px) {
      width: 150px;
      height: 150px;
      margin: 20px;
    }
  `;

  const WhiteRightCircleWrapper = styled.h1`
    line-height: 75px;
    @media only screen and (min-width: 746px) {
      line-height: 150px;
      font-size: 50px;
    }
  `;

  const OrangeRightCircle = styled.div`
    background: #ff5e00;
    border-radius: 50%;
    width: 75px;
    font-family: "Bebas Neue";
    height: 75px;
    margin: 10px;
    text-align: center;
    color: #ffffff;

    @media only screen and (min-width: 746px) {
      width: 150px;
      height: 150px;
      margin: 20px;
    }
  `;

  const OrangeRightCircleH1 = styled.h1`
    line-height: 75px;
    @media only screen and (min-width: 746px) {
      line-height: 150px;
      font-size: 50px;
    }
  `;

  const RightCirclesMessageContainer = styled.div`
    max-width: 100px;

    @media only screen and (min-width: 746px) {
      max-width: 200px;
    }
  `;

  const RightCirclesParagraphText = styled.p`
    margin: 20px;
    font-family: "ClanPro", sans-serif;
    font-weight: normal;
    text-transform: initial;

    @media only screen and (min-width: 746px) {
      margin: 50px;
      font-size: 18px;
      padding-bottom: 60px;
    }
  `;

  return (
    <>
      <CardHeader>
        {!!title &&
          title.split(" ").map((text, i) => {
            // check if the item is the last to be concatinated, we dont need a "."
            if (i === title.split(" ").length - 1) {
              return (
                <>
                  {text}
                  <OrangeColored>!</OrangeColored>
                </>
              );
            }
            return (
              <>
                {text}
                <OrangeColored>. </OrangeColored>
              </>
            );
          })}
      </CardHeader>

      {/* !! makes sure that the prop is a truthy type before printing to dom  */}
      <CardMessage>{!!description && description}</CardMessage>
      <CirclesContainer>
        <LeftCircle>
          <CircleHeader>{!!leftCircleTitle && leftCircleTitle}</CircleHeader>
          <CircleMessage>{!!leftCircleText && leftCircleText}</CircleMessage>
        </LeftCircle>
        <RightCirclesContainer>
          <WhiteRightCircle>
            <WhiteRightCircleWrapper>
              {!!whiteCircleContent && whiteCircleContent}
            </WhiteRightCircleWrapper>
          </WhiteRightCircle>
          <OrangeRightCircle>
            <OrangeRightCircleH1>
              {!!orangeCircleContent && orangeCircleContent}
            </OrangeRightCircleH1>
          </OrangeRightCircle>
        </RightCirclesContainer>
        <RightCirclesMessageContainer>
          <>
            <RightCirclesParagraphText>
              {" "}
              {!!firstAside && firstAside}
            </RightCirclesParagraphText>
          </>

          <>
            <RightCirclesParagraphText>
              {" "}
              {!!secondAside && secondAside}
            </RightCirclesParagraphText>
          </>
        </RightCirclesMessageContainer>
      </CirclesContainer>
    </>
  );
};

export default CardContents;
