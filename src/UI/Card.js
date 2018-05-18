import styled, { keyframes } from "styled-components";

const shrinking = keyframes`0% {
  transform: scale(1);
}
100% {
  transform: scale(0.87);
}`;

const Card = styled.div`
  transition: all 0.55s;
  z-index: 10;
  width: 100%;
  position: absolute;
  top: ${props => (props.extended ? `11em` : `0`)};
  ${props => (props.inPerspective ? `top: 9em;` : null)};
  background-color: rgb(255, 255, 255);
  padding-top: ${props => (props.extended ? `1em` : `11em`)};
  padding-bottom: ${props => (props.extended ? `1em` : `0em`)};
  border-radius: ${props => (props.extended ? `none` : `1em`)};
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  transform: scale(1);
  ${props =>
    props.inPerspective
      ? `animation: 0.8s ${shrinking} linear 1 forwards`
      : null};
`;

export default Card;
