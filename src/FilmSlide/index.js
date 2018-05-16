import React, { Component } from "react";
import styled from "styled-components";

import SingleTrailer from "../SingleTrailer";
import Synopsis from "../Synopsis";
import Btn from "../Btn";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export default class FilmSlide extends Component {
  state = {
    onMain: true,
    infoExtended: false,
    sessionPicker: false
  };

  openFullInfo = () => {
    this.setState({ onMain: !this.state.onMain });
    this.setState({ infoExtended: !this.state.infoExtended });
  };

  openSessionPicker = () => {
    this.setState({ infoExtended: !this.state.infoExtended });
    this.setState({ sessionPicker: !this.state.sessionPicker });
  };

  render() {
    const { trailer, title, caption, tags, cast, score } = this.props;
    const { infoExtended, sessionPicker } = this.state;

    const trailerProps = {
      trailerSource: trailer,
      infoOpened: infoExtended || sessionPicker,
      clickFn: this.openFullInfo
    };

    const synopsisProps = {
      extended: infoExtended,
      sessionPicker: sessionPicker,
      clickFn: this.openFullInfo,
      info: {
        title,
        tags,
        cast,
        caption,
        score
      }
    };

    return (
      <Wrapper>
        <SingleTrailer {...trailerProps} />
        <Synopsis {...synopsisProps}>
          {infoExtended && <Btn clickFn={this.openSessionPicker} />}
        </Synopsis>
      </Wrapper>
    );
  }
}
