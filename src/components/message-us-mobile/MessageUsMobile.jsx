import React from "react";

import MessageUs from "../../assets/message_us.png";

import "./message-us-mobile.scss";

const MessageUsMobile = () => {
  return (
    <div className="messages-container">
      <div className="large-message-container">
        <h1>
          PUBLISH <span className="orange-colored">VAPE</span>
          <br />
          CONTENT AND
          <br />
          GET <span className="orange-colored">PAID</span>
        </h1>
        <img src={MessageUs} alt="orange mail icon" onClick />
      </div>
      <div className="small-message-container">
        <p>
          Want to earn money for creating killer vape social content? Vape
          Influencer is for you!
        </p>

        <p>Start earning by showcasing your creativity.</p>
        <p>Sign up today to get access to fast and simple tasks today!</p>
      </div>
    </div>
  );
};

export default MessageUsMobile;
