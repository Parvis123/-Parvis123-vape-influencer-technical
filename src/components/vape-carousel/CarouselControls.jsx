import React from "react";
import styled, { css } from "styled-components";

const CarouselControls = ({ items = [], currentIndex }) => {
  return (
    <ControlsContainer>
      {items.map((item, i) => (
        <ControlItem isSelected={i === currentIndex} />
      ))}
    </ControlsContainer>
  );
};

const ControlItem = styled.div`
  ${({ isSelected }) => !!isSelected && selectedVariation}
  border-radius: 50%;
  height: 5px;
  width: 5px;
  border: 1px solid #1a334e;

  @media only screen and (min-width: 746px) {
    height: 7px;
    width: 7px;
    border: 3px solid #1a334e;
  }
`;

const selectedVariation = css`
  background-color: #fe6200;
`;

const ControlsContainer = styled.div`
  width: 50px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default CarouselControls;
