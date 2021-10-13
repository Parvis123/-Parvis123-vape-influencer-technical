import React, { useRef, useState } from "react";
import styled from "styled-components";

import ReactCardCarousel from "react-card-carousel";
import CardContents from "./CardContents";
import CarouselControls from "./CarouselControls";
import { mockData } from "./mockData";

const ContainerStyle = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: middle;
  flex-direction: column;
  overflow: hidden;
`;

const CardStyle = styled.div`
  height: 400px;
  width: 400px;
  padding-top: 30px;
  text-align: center;
  background: #07223f;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 10px;
  box-sizing: border-box;
  webkit-box-shadow: 0px 11px 8px -5px #a7a7a7;
  box-shadow: 0px 11px 8px -5px #a7a7a7;
`;

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
    <ContainerStyle>
      <ReactCardCarousel ref={refContainer} afterChange={() => indexUpdated()}>
        {mockData.map((card) => {
          return (
            <CardStyle>
              <CardContents {...card} />
            </CardStyle>
          );
        })}
      </ReactCardCarousel>
      <CarouselControls items={mockData} currentIndex={currentIndex} />
    </ContainerStyle>
  );
};
export default VapeCarousel;
