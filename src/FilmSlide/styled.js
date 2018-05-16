import styled, { keyframes } from "styled-components";
import { moveUpAnimation } from "../utils/animations";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const moveUp = keyframes`
  0% {
    transform: translate(0,10em);
  }

  100% {
    transform: translate(0,0);
  }
`;

export const Btn = styled.button`
  display: block;
  width: 40%;
  padding: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  font-family: "Inconsolata", monospace;
  background-color: orange;
  color: rgb(0, 0, 0);
  border: 0.1em solid transparent;
  border-radius: 0.5em;
  cursor: pointer;
  margin: 0em auto;
  opacity: 0.9;
  transform: translate(0, 10em);

  ${moveUpAnimation(`0.5s`)} &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 1;
  }
`;
