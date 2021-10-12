import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import DesktopNavbar from "../desktop-navbar/DesktopNavbar";
import Logo from "../logo/Logo";
import DesktopBackgroundImage from "../desktop-background-image/DesktopBackgroundImage";

const DesktopHeader = () => {
  const Headerwrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: transparent;
    height: auto;
    z-index: 2;
  `;

  const LogoContainer = styled.div`
    height: 100%;
    padding: 20px;
    z-index: 2;
  `;

  return (
    <Headerwrapper>
      <DesktopBackgroundImage />
      <LogoContainer>
        <Link className="logo-container" to="/">
          <Logo className="logo"></Logo>
        </Link>
      </LogoContainer>
      <DesktopNavbar />
    </Headerwrapper>
  );
};

export default DesktopHeader;
