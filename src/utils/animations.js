import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
  0% {
    transform: translate(0,10em);
  }

  100% {
    transform: translate(0,0);
  }
`;

const moveDown = keyframes`
  0% {
    transform: translate(0,-10em);
  }

  100% {
    transform: translate(0,0);
  }
`;

export const moveUpAnimation = duration =>
  `animation: ${duration} ${moveUp} linear 1 forwards;`;

export const moveDownAnimation = duration =>
  `animation: ${duration} ${moveDown} linear 1 forwards;`;
