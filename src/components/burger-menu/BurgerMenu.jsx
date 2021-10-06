import React, { Component } from "react";

import { slide as Menu } from "react-burger-menu";

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
        <a id="start-earning-now" className="menu-item" href="/earning">
          Start Earning Now!
        </a>
      </Menu>
    );
  }
}

export default BurgerMenu;
