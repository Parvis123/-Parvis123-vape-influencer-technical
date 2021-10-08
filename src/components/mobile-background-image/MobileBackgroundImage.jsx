import React from "react";
import mobile from "../../assets/Header_Home_Mobile.jpg";

import "./mobile-background-image.scss";

const MobileBackgroundImage = () => {
  return (
    <div className="image-container">
      <img src={mobile} alt="vaper" className="image" />
    </div>
  );
};

export default MobileBackgroundImage;
