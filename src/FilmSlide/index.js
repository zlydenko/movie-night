import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: ${props => (props.active ? `1000` : `20`)};
`;

const Video = styled.video`
  position: absolute;
  z-index: 100;
  border-radius: 1em;
  width: 100%;
  height: 10em;
  object-fit: cover;
  transform: scale(1.03);
`;

const InfoWrapper = styled.div`
  z-index: 10;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: rgb(255, 255, 255);
  padding-top: 11em;
  border-radius: 1em;
  user-select: none;
  cursor: pointer;
`;

const Info = styled.div`
  padding: 0em 1em;
`;

export default class FilmSlide extends Component {
  render() {
    const { trailer, title, caption, active } = this.props;
    return (
      <Fragment>
        <Wrapper active={active}>
          {active ? (
            <Video loop={true} autoPlay={true}>
              <source src={trailer} type={"video/webm"} />
            </Video>
          ) : (
            <Video loop={true}>
              <source src={trailer} type={"video/webm"} />
            </Video>
          )}
          <InfoWrapper>
            <Info>
              <h3>{title}</h3>
              <p>{caption}</p>
            </Info>
          </InfoWrapper>
        </Wrapper>
      </Fragment>
    );
  }
}
