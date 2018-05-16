import React, { Component } from "react";
import { Wrapper, Btn } from "./styled";

import SingleTrailer from "../SingleTrailer";
import Synopsis from "../Synopsis";

export default class FilmSlide extends Component {
  state = {
    infoExtended: false
  };

  openFullInfo = () => {
    this.setState({ infoExtended: !this.state.infoExtended });
  };

  render() {
    const { trailer, title, caption, tags, cast, score } = this.props;
    const { infoExtended } = this.state;
    return (
      <Wrapper>
        <SingleTrailer
          trailerSource={trailer}
          infoOpened={infoExtended}
          clickFn={this.openFullInfo}
        />
        <Synopsis
          opened={infoExtended}
          clickFn={this.openFullInfo}
          info={{
            title,
            tags,
            cast,
            caption,
            score
          }}
        >
          <Btn filmInfoOpened={infoExtended}>{"buy tickets"}</Btn>
        </Synopsis>
      </Wrapper>
    );
  }
}
