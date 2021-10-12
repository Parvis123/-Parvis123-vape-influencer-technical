import React from "react";
import styled from "styled-components";

import Button from "../button/Button";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  li {
    padding: 15px 25px;
    font-family: "Inter", sans-serif;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .dropdown {
    float: left;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  /* Add a navy background color to navbar links on hover */
  .navbar a:hover,
  .dropdown:hover .dropbtn {
    background-color: #f1f2f2;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #082340;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    float: none;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add an orange background color to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ff6200;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
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
        {/* <a id="learn" className="menu-item" href="learn">
          Learn More&#9662;
        </a> */}
        <div class="dropdown">
          <button class="dropbtn">
            Learn More&#9662;
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/">Example 1</a>
            <a href="/">Example 2</a>
            <a href="/">Example 3</a>
          </div>
        </div>
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
