import React, { Fragment } from "react";
import styled from "styled-components";
import {
  moveDownAnimation,
  moveRightAnimation,
  moveLeftAnimation
} from "../utils/animations";

const Info = styled.div`
  padding: 0em 1em;
  transition: all 1s;
  color: ${props => props.theme.colors.infoText};
`;

const Title = styled.h3`
  margin-top: 0em;
  font-size: 1.5em;
  letter-spacing: 0.05em;
`;

const Tags = styled.p`
  font-family: ${props => props.theme.fonts.additional};
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
  background-color: ${props =>
    props.data <= 39
      ? props.theme.colors.metascores.bad
      : props.data >= 60
        ? props.theme.colors.metascores.good
        : props.theme.colors.metascores.average};
  color: ${props =>
    props.data >= 39 && props.data < 60 ? `rgb(0,0,0)` : `rgb(255,255,255)`};
  transform: translate(0, -10em);
  ${moveDownAnimation(`0.5s`)};

  & span {
    font-size: 1.4em;
    font-family: ${props => props.theme.fonts.metascores};
    letter-spacing: -0.09em;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Synopsis = ({ info, short, extended }) => {
  const { title, tags, cast, score, caption } = info;
  const tagsText = tags.join(" / ");
  const castText = cast.join(` / `);

  return (
    <Info>
      <Header>
        <Title>{title}</Title>

        {extended && (
          <Score data={score}>
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
  );
};

export default Synopsis;
