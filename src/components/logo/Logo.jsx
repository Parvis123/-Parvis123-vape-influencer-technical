import React from "react";

import { ReactComponent as LogoIcon } from "../../assets/Logo.svg";

import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <LogoIcon className="logo-icon" />
    </div>
  );
};

export default Logo;
