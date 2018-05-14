import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Video = styled.video`
  transition: all 0.4s;
  position: absolute;
  z-index: 100;
  border-radius: 1em;
  width: 100%;
  height: 10em;
  object-fit: cover;
  ${props => (props.filmInfoOpened ? null : `transform: scale(1.05)`)};
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  transition: all 0.55s;
  z-index: 10;
  width: 100%;
  position: absolute;
  top: ${props => (props.filmInfoOpened ? `11em` : `0`)};
  background-color: rgb(255, 255, 255);
  padding-top: ${props => (props.filmInfoOpened ? `1em` : `11em`)};
  padding-bottom: ${props => (props.filmInfoOpened ? `1em` : `0em`)};
  border-radius: ${props => (props.filmInfoOpened ? `none` : `1em`)};
  user-select: none;
  cursor: pointer;
  overflow: hidden;
`;

export const Info = styled.div`
  padding: 0em 1em;
  transition: all 1s;
`;

export const MovieTitle = styled.h3`
  font-size: 1.5em;
  letter-spacing: 0.05em;
`;

export const Tags = styled.p`
  font-family: "Inconsolata", monospace;
  font-weight: 700;
  font-size: 0.9em;
  margin-top: 0em;
  margin-bottom: ${props => (props.filmInfoOpened ? `1em` : `0em`)};
  height: ${props => (props.filmInfoOpened ? `auto` : `0em`)};
  transition: all 0.8s;
  ${props => (props.filmInfoOpened ? null : `transform: translate(50em,0);`)};
`;

export const Cast = Tags.extend`
  ${props => (props.filmInfoOpened ? null : `transform: translate(-50em,0);`)};
`;

export const Btn = styled.button`
  transition: transform 0.9s;
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
  height: ${props => (props.filmInfoOpened ? `auto` : `0em`)};
  ${props => (props.filmInfoOpened ? null : `transform: translate(0,10em);`)};

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 1;
  }
`;

export const Score = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  background-color: ${props =>
    props.scoreLevel === "Bad"
      ? `#f00`
      : props.scoreLevel === "Medium"
        ? `#fc3`
        : `#6c3`};
  color: ${props =>
    props.scoreLevel === "Medium" ? `rgb(0,0,0)` : `rgb(255,255,255)`};
  padding: 0.5em 0.7em;

  & span {
    font-size: 1.4em;
    font-family: "Inconsolata", monospace;
    letter-spacing: -0.09em;
  }
`;
