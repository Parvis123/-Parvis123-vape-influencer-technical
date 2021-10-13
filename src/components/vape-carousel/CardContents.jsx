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
  `;

  const OrangeColored = styled.span`
    color: #ff5e00;
  `;

  const CardMessage = styled.h3`
    font-family: "ClanPro", sans-serif;
    font-weight: normal;
    text-transform: initial;
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
  `;

  const CircleHeader = styled.h1`
    font-family: "Bebas Neue";
    font-weight: normal;
    letter-spacing: 0.5px;
    font-size: 29px;
    margin-bottom: 0px;
    margin-top: 10px;
    display: inline-block;
  `;

  const CircleMessage = styled.h3`
    font-family: "ClanPro", sans-serif;
    font-weight: normal;
    text-transform: initial;
    margin-top: 2.5px;
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
  `;

  const WhiteRightCircleWrapper = styled.h1`
    line-height: 75px;
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
  `;

  const OrangeRightCircleH1 = styled.h1`
    line-height: 75px;
  `;

  const RightCirclesMessageContainer = styled.div`
    max-width: 100px;
  `;

  const RightCirclesParagraphText = styled.p`
    margin: 20px;
    font-family: "ClanPro", sans-serif;
    font-weight: normal;
    text-transform: initial;
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
                  <OrangeColored className="orange-colored">!</OrangeColored>
                </>
              );
            }
            return (
              <>
                {text}
                <span className="orange-colored">. </span>
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
          <div>
            <RightCirclesParagraphText>
              {" "}
              {!!firstAside && firstAside}
            </RightCirclesParagraphText>
          </div>

          <div>
            <RightCirclesParagraphText>
              {" "}
              {!!secondAside && secondAside}
            </RightCirclesParagraphText>
          </div>
        </RightCirclesMessageContainer>
      </CirclesContainer>
    </>
  );
};

export default CardContents;
