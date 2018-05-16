import React, { Fragment } from "react";
import styled from "styled-components";
import {
  moveDownAnimation,
  moveRightAnimation,
  moveLeftAnimation
} from "../utils/animations";

const scoreColor = n => {
  return n <= 39 ? `#f00` : n >= 60 ? `#6c3` : `#fc3`;
};

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
  margin-top: 0em;
  font-size: 1.5em;
  letter-spacing: 0.05em;
`;

const Tags = styled.p`
  font-family: "Inconsolata", monospace;
  font-weight: 700;
  font-size: 0.9em;
  margin-top: 0em;
  transform: translate(20em, 0);
  ${moveRightAnimation(`0.3s`)};
`;

const Cast = Tags.extend`
  transform: translate(-20em, 0);
  ${moveLeftAnimation(`0.3s`)};
`;

const Score = styled.div`
  flex-basis: 10%;
  height: 1.5em;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0.5em;
  background-color: ${props => props.bg};
  color: ${props => (props.bg === "#fc3" ? `rgb(0,0,0)` : `rgb(255,255,255)`)};
  transform: translate(0, -10em);
  ${moveDownAnimation(`0.5s`)};

  & span {
    font-size: 1.4em;
    font-family: "Inconsolata", monospace;
    letter-spacing: -0.09em;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Synopsis = ({ children, extended, clickFn, info, sessionPicker }) => {
  const { title, tags, cast, score, caption } = info;
  const tagsText = tags.join(" / ");
  const castText = cast.join(` / `);

  return (
    <Wrapper opened={extended}>
      {sessionPicker && <h1>hello world</h1>}

      {!sessionPicker && (
        <Info opened={extended} onClick={clickFn}>
          <Header>
            <Title>{title}</Title>

            {extended && (
              <Score bg={scoreColor(score)}>
                <span>{score}</span>
              </Score>
            )}
          </Header>

          {extended && (
            <Fragment>
              <Tags>{tagsText}</Tags>
              <Cast>{castText}</Cast>
            </Fragment>
          )}

          <p>{caption}</p>
        </Info>
      )}

      {children}
    </Wrapper>
  );
};

export default Synopsis;
