import React from "react";
import styled from "styled-components";
import { moveUpAnimation } from "../utils/animations";

const Btn = styled.button`
  display: block;
  width: 40%;
  padding: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.buttons};
  background-color: ${props => props.theme.colors.buttons.bg};
  color: ${props => props.theme.colors.buttons.text};
  border: 0.1em solid ${props => props.theme.colors.buttons.border};
  border-radius: 0.5em;
  cursor: pointer;
  margin: 0em auto;
  opacity: 0.9;
  transform: translate(0, 10em);

  ${moveUpAnimation(`0.5s`)};

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 1;
  }
`;

const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
};

export default Button;
