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
        <a className="menu-item" href="/about">
          About Us
        </a>
        <a className="menu-item" href="/creators">
          Creators
        </a>
        <a className="menu-item" href="/how-it-works">
          How It Works
        </a>
        <a className="menu-item" href="learn">
          Learn More
        </a>
        <a className="menu-item" href="/login">
          Log In
        </a>
        <Button className="menu-item" earning>
          Start Earning Now!
        </Button>
      </Menu>
    );
  }
}

export default BurgerMenu;
