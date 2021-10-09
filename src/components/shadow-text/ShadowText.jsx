import React from "react";
import styled, { css } from "styled-components";

const Shadowtext = ({ backgroundText, foregroundText }) => {
  const Shade = styled.h1`
    color: #f1f2f2;
    font-family: "Bebas Neue";
    font-size: 150px;
    display: inline-block;
    text-align: center;
    letter-spacing: 1.5px;

    &:before {
      content: "${foregroundText}";
      left: 0;
      color: #082340;
      width: 100%;
      height: 100%;
      line-height: 3.8;
      font-weight: 600;
      position: absolute;
      font-size: 50px;
    }
  `;

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const InnerWrapper = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
  `;

  return (
    <Wrapper>
      <InnerWrapper>
        <Shade>{backgroundText}</Shade>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Shadowtext;
