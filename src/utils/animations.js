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

const moveRight = keyframes`
  0% {
    transform: translate(-20em,0);
  }

  100% {
    transform: translate(0,0);
  }
`;
const moveLeft = keyframes`
  0% {
    transform: translate(20em,0);
  }

  100% {
    transform: translate(0,0);
  }
`;

export const moveUpAnimation = duration =>
  `animation: ${duration} ${moveUp} linear 1 forwards;`;

export const moveDownAnimation = duration =>
  `animation: ${duration} ${moveDown} linear 1 forwards;`;

export const moveRightAnimation = duration =>
  `animation: ${duration} ${moveRight} linear 1 forwards;`;

export const moveLeftAnimation = duration =>
  `animation: ${duration} ${moveLeft} linear 1 forwards;`;
