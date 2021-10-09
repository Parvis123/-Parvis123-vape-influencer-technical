import React, { Component } from "react";

import { slide as Menu } from "react-burger-menu";
import Button from "../button/Button";

import "./burger-menu.scss";

class BurgerMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right>
        <a id="about" className="menu-item" href="/about">
          About Us
        </a>
        <a id="creators" className="menu-item" href="/creators">
          Creators
        </a>
        <a id="how-it-works" className="menu-item" href="/how-it-works">
          How It Works
        </a>
        <a id="learn-more" className="menu-item" href="learn">
          Learn More
        </a>
        <a id="login" className="menu-item" href="/login">
          Log In
        </a>
        <Button id="burger-earning-button" className="menu-item" earning>
          Start Earning Now!
        </Button>
      </Menu>
    );
  }
}

export default BurgerMenu;
