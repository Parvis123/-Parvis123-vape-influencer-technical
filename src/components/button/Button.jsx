import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 15px;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.info &&
    css`
      color: #ff6200;
      border: #ff6200 solid 2px;
    `}

  ${(props) =>
    props.earning &&
    css`
      background: #ff6200;
      color: white;
      border: none;
      -webkit-box-shadow: 0px 11px 4px -5px rgba(0, 0, 0, 0.07);
      box-shadow: 0px 11px 4px -5px rgba(0, 0, 0, 0.07);
      height: 40px;
    `};
`;

// box shadow tool used  https://html-css-js.com/css/generator/box-shadow/

export default Button;
