import React from "react";
import styled from "styled-components";

import Button from "../button/Button";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 15px 25px;
    font-family: "Inter", sans-serif;
  }
  a {
    text-decoration: none;
    color: orange;
  }
  @media (max-width: 745px) {
    display: none;
  }
`;

const NavbarContents = () => {
  return (
    <Ul>
      <li>
        <a className="menu-item" href="/about">
          About Us
        </a>
      </li>
      <li>
        <a className="menu-item" href="/creators">
          Creators
        </a>
      </li>
      <li>
        <a className="menu-item" href="/how-it-works">
          How It Works
        </a>
      </li>
      <li>
        <a id="learn" className="menu-item" href="learn">
          Learn More&#9662;
        </a>
      </li>
      <li>
        <a className="menu-item" href="/login">
          Log In
        </a>
      </li>
      <li>
        <Button earning navbar>
          Start Earning Now!
        </Button>
      </li>
    </Ul>
  );
};

export default NavbarContents;
