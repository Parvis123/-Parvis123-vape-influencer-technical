import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo/Logo";
import BurgerMenu from "../burger-menu/BurgerMenu";
import { useWindowSize } from "../../utils/hooks/useWindowSize";

import "./header.scss";

const Header = () => {
  const size = useWindowSize();

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <BurgerMenu />
    </div>
  );
};

export default Header;
