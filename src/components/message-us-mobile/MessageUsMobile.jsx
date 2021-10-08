import React from "react";

import { MessageUs } from "../../assets/message_us.png";

import "./message-us-mobile.scss";

const Messageusmobile = () => {
  return (
    <div className="large-message-container">
      <h1>
        PUBLISH <span className="orange-colored">VAPE</span>
        <br />
        CONTENT AND
        <br />
        GET <span className="orange-colored">PAID</span>
      </h1>
      <MessageUs />
    </div>
  );
};

export default Messageusmobile;
