import React from "react";
import desktop from "../../assets/Header_Home_Desktop.jpg";

import styled from "styled-components";

const DesktopBackgroundImage = () => {
  const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    backgroundimage: url(${desktop});

    @media only screen and (max-width: 745px) {
      display: none;
    }

    img {
      max-width: 100%;
    }
  `;
  return (
    <ImageWrapper>
      <img src={desktop} alt="vaper for desktop" />
    </ImageWrapper>
  );
};

export default DesktopBackgroundImage;
