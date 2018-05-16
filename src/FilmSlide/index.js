import React, { Component } from "react";
import { Wrapper, Btn } from "./styled";

import SingleTrailer from "../SingleTrailer";
import Synopsis from "../Synopsis";

const BuyBtn = props => <Btn {...props}>{"buy tickets"}</Btn>;

export default class FilmSlide extends Component {
  state = {
    onMain: true,
    infoExtended: false,
    sessionPicker: false
  };

  openFullInfo = () => {
    this.setState({ infoExtended: !this.state.infoExtended });
  };

  openSessionPicker = () => {
    this.setState({ onMain: !this.state.onMain });
    this.setState({ sessionPicker: !this.state.sessionPicker });
  };

  render() {
    const { trailer, title, caption, tags, cast, score } = this.props;
    const { infoExtended, sessionPicker } = this.state;

    const trailerProps = {
      trailerSource: trailer,
      infoOpened: infoExtended,
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
          {infoExtended && <BuyBtn onClick={this.openSessionPicker} />}
        </Synopsis>
      </Wrapper>
    );
  }
}
