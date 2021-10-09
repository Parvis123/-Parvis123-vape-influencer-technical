import React from "react";
import styled, { css } from "styled-components";

const Shadowtext = ({ backgroundText, foregroundText }) => {
  const Shade = styled.h1`
    color: #f1f2f2;
    font-family: "Bebas Neue";
    position: absolute;
    font-size: 40px;
    display: inline-block;
  `;

  const Foreground = styled.h3`
    color: #082340;
    font-family: "Bebas Neue";
    position: absolute;
    font-size: 20px;
    display: inline-block;
  `;

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const InnerWrapper = styled.div`
    text-align: center;
    position: relative;
  `;

  return (
    <Wrapper>
      <InnerWrapper>
        <Shade>{backgroundText}</Shade>
        <Foreground>{foregroundText}</Foreground>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Shadowtext;
