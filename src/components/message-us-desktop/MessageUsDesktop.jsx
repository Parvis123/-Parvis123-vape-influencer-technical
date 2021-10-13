import React from "react";
import styled from "styled-components";

import Button from "../button/Button";

const MessageUsDesktop = () => {
  const VapeMessage = styled.div`
    display: flex-column;
    padding-left: 10%;
    padding-top: 10%;
    width: 40%;
  `;

  const VapeMessageTitle = styled.text`
    font-family: "Bebas Neue";
    color: #082340;
    font-size: 80px;
    line-height: 0.9;
  `;

  const OrangeColored = styled.text`
    color: #ff5e00;
  `;

  const SmallMessageContainer = styled.text`
    color: #838383;
    font-family: "ClanPro", sans-serif;
  `;

  const SmallMessageContent = styled.p`
    font-size: 18px;
    padding-right: 30px;
  `;

  const ButtonContainer = styled.div``;

  return (
    <VapeMessage>
      <VapeMessageTitle>
        PUBLISH <OrangeColored>VAPE</OrangeColored>
        <br />
        CONTENT AND
        <br />
        GET <OrangeColored>PAID</OrangeColored>
      </VapeMessageTitle>

      <SmallMessageContainer>
        <SmallMessageContent>
          Want to earn money for creating killer vape social content?
          <br />
          Vape Influencer is for you!
        </SmallMessageContent>

        <SmallMessageContent>
          Start earning by showcasing your creativity. Sign up today to get
          access to fast and simple tasks today!
        </SmallMessageContent>
      </SmallMessageContainer>
      <ButtonContainer>
        <Button earningdesktop>Start Earning Now!</Button>
        <Button infodesktop>More info</Button>
      </ButtonContainer>
    </VapeMessage>
  );
};

export default MessageUsDesktop;
