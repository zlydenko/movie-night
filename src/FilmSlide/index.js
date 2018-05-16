import React, { Component } from "react";
import { Wrapper, Btn } from "./styled";

import SingleTrailer from "../SingleTrailer";
import Synopsis from "../Synopsis";

const BuyBtn = () => <Btn>{"buy tickets"}</Btn>;

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

    const trailerProps = {
      trailerSource: trailer,
      infoOpened: infoExtended,
      clickFn: this.openFullInfo
    };

    const synopsisProps = {
      opened: infoExtended,
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
        <Synopsis {...synopsisProps}>{infoExtended && <BuyBtn />}</Synopsis>
      </Wrapper>
    );
  }
}
