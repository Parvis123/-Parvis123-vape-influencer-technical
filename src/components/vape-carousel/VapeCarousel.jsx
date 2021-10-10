import React, { useRef, useState } from "react";
import ReactCardCarousel from "react-card-carousel";
import CardContents from "./CardContents";
import CarouselControls from "./CarouselControls";
import { mockData } from "./mockData";

import "./vape-carousel.scss";

const CONTAINER_STYLE = {
  position: "relative",
  height: "50vh",
  width: "100%",
  maxWidth: "100%",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "middle",
  flexDirection: "column",
  overflow: "hidden",
};

const CARD_STYLE = {
  // @@TODO refactor these with a media query so they get smaller on mobile
  height: "400px",
  width: "400px",
  paddingTop: "30px",
  textAlign: "center",
  background: "#07223F",
  color: "white",
  fontSize: "12px",
  textTransform: "uppercase",
  borderRadius: "10px",
  boxSizing: "border-box",
  webkitBoxShadow: "0px 11px 8px -5px #A7A7A7",
  boxShadow: "0px 11px 8px -5px #A7A7A7",
};

const VapeCarousel = () => {
  const refContainer = useRef(null);
  // @@TODO refactor to styled components

  const [currentIndex, setCurrentIndex] = useState(1);

  const indexUpdated = () => {
    if (!!refContainer && !!refContainer?.current?.getCurrentIndex) {
      setCurrentIndex(refContainer?.current?.getCurrentIndex());
    }
  };

  return (
    <div style={CONTAINER_STYLE}>
      <ReactCardCarousel ref={refContainer} afterChange={() => indexUpdated()}>
        {mockData.map((card) => {
          return (
            <div style={CARD_STYLE}>
              <CardContents {...card} />
            </div>
          );
        })}
      </ReactCardCarousel>
      <CarouselControls items={mockData} currentIndex={currentIndex} />
    </div>
  );
};
export default VapeCarousel;
