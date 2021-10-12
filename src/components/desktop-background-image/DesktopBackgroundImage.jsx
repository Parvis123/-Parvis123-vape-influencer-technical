import React from "react";
import styled from "styled-components";

import desktop from "../../assets/Header_Home_Desktop.jpg";

const DesktopBackgroundImage = () => {
  const ImageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    background-image: url(${desktop});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    display: flex;
    border: solid 1px red;
    z-index: -1;

    @media only screen and (max-width: 745px) {
      display: none;
    }
  `;
  return <ImageWrapper></ImageWrapper>;
};

export default DesktopBackgroundImage;
