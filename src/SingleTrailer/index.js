import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const transformation = keyframes`
  40% {
    transform: perspective(1000px) scale(1.05) rotateX(0deg)
  }

  100% {
    transform: perspective(1000px) scale(0.95) rotateX(-45deg)
  }
`;

const Video = styled.video`
  transition: all 0.4s;
  position: absolute;
  z-index: 100;
  border-radius: 1em;
  width: 100%;
  height: 10em;
  object-fit: cover;
  ${props => (props.playing ? null : `transform: scale(1.05)`)};
  cursor: pointer;
  transform: perspective(1000px)
    ${props => (props.playing ? null : `scale(1.05)`)} rotateX(0deg);
  ${props =>
    props.inPerspective
      ? `animation: 0.8s ${transformation} ease-in 1 forwards`
      : null};
`;

export default class SingleTrailer extends Component {
  render() {
    const { playing, trailerSource, inPerspective, poster } = this.props;

    return (
      <Video
        loop={playing}
        autoPlay={playing}
        playing={playing}
        inPerspective={inPerspective}
        poster={poster}
      >
        {playing && <source src={trailerSource} type={"video/webm"} />}
      </Video>
    );
  }
}
