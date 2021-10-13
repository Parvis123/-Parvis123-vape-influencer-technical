import React from "react";
import styled from "styled-components";

import MessageUs from "../../assets/message_us.png";

const Shadowtext = ({ backgroundText, foregroundText, mail }) => {
  console.log(mail);
  const Shade = styled.h1`
    color: #f1f2f2;
    font-family: "Bebas Neue";
    font-size: 105px;
    display: inline-block;
    text-align: center;
    letter-spacing: 1.5px;

    &:before {
      content: "${!!foregroundText && foregroundText}";
      left: 0;
      color: #082340;
      width: 100%;
      height: 100%;
      line-height: 3.8;
      font-weight: 600;
      position: absolute;
      font-size: 35px;

      @media only screen and (min-width: 746px) {
        font-size: 61.25px;
      }
    }

    @media only screen and (min-width: 746px) {
      font-size: 183.75px;
    }
  `;

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  `;

  const InnerWrapper = styled.div`
    text-align: center;
    width: 100%;
  `;

  const MessageUsWrapper = styled.img`
    max-width: 58px;
    max-height: 58px;
    position: relative;
    right: -100px;
    top: -30px;
  `;

  return (
    <Wrapper>
      <InnerWrapper>
        <Shade>{!!backgroundText && backgroundText}</Shade>
        {mail && <MessageUsWrapper src={MessageUs} />}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Shadowtext;
