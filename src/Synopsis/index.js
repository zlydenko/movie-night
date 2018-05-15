import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  transition: all 0.55s;
  z-index: 10;
  width: 100%;
  position: absolute;
  top: ${props => (props.opened ? `11em` : `0`)};
  background-color: rgb(255, 255, 255);
  padding-top: ${props => (props.opened ? `1em` : `11em`)};
  padding-bottom: ${props => (props.opened ? `1em` : `0em`)};
  border-radius: ${props => (props.opened ? `none` : `1em`)};
  user-select: none;
  cursor: pointer;
  overflow: hidden;
`;

const Info = styled.div`
  padding: 0em 1em;
  transition: all 1s;
`;

const Title = styled.h3`
  font-size: 1.5em;
  letter-spacing: 0.05em;
`;

const Tags = styled.p`
  font-family: "Inconsolata", monospace;
  font-weight: 700;
  font-size: 0.9em;
  margin-top: 0em;
  margin-bottom: ${props => (props.opened ? `1em` : `0em`)};
  height: ${props => (props.opened ? `auto` : `0em`)};
  transition: all 0.8s;
  ${props => (props.opened ? null : `transform: translate(50em,0);`)};
`;

const Cast = Tags.extend`
  ${props => (props.opened ? null : `transform: translate(-50em,0);`)};
`;

const Score = styled.div`
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

const Synopsis = ({ children, opened, clickFn, info }) => (
  <Wrapper opened={opened}>
    <Info opened={opened} onClick={clickFn}>
      <Title>{info.title}</Title>
      <Tags opened={opened}>{info.tags.join(" / ")}</Tags>
      <Cast opened={opened}>{info.cast.join(` / `)}</Cast>
      <p>{info.caption}</p>
    </Info>
    <Score
      scoreLevel={
        info.score >= 39 ? (info.score > 60 ? `Good` : `Medium`) : `Bad`
      }
    >
      <span>{info.score}</span>
    </Score>

    {children}
  </Wrapper>
);

export default Synopsis;
