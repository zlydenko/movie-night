import React, { Component } from "react";
import styled from "styled-components";

const Video = styled.video`
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

export default class SingleTrailer extends Component {
  componentWillUpdate() {
    if (this.props.infoOpened) {
      this.videoElem.load();
    }
  }

  render() {
    const { infoOpened, clickFn, trailerSource } = this.props;

    return (
      <Video
        loop={infoOpened}
        autoPlay={infoOpened}
        filmInfoOpened={infoOpened}
        poster={"./blade-runner-banner.jpg"}
        onClick={clickFn}
        innerRef={x => {
          this.videoElem = x;
        }}
      >
        {infoOpened && <source src={trailerSource} type={"video/webm"} />}
      </Video>
    );
  }
}
