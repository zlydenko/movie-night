import React, { Component, Fragment } from "react";
import { Wrapper, Btn } from "./styled";

import SingleTrailer from "../SingleTrailer";
import Synopsis from "../Synopsis";

export default class FilmSlide extends Component {
  state = {
    filmInfoOpened: false,
    trailerPlaying: false
  };

  openFullInfo = () => {
    this.setState({ filmInfoOpened: !this.state.filmInfoOpened });
    this.setState({ trailerPlaying: !this.state.trailerPlaying });
  };

  render() {
    const { trailer, title, caption, tags, cast, score } = this.props;
    const { filmInfoOpened, trailerPlaying } = this.state;
    return (
      <Fragment>
        <Wrapper>
          <SingleTrailer
            trailerSource={trailer}
            playing={trailerPlaying}
            infoOpened={filmInfoOpened}
            clickFn={this.openFullInfo}
          />
          <Synopsis
            opened={filmInfoOpened}
            clickFn={this.openFullInfo}
            info={{
              title,
              tags,
              cast,
              caption,
              score
            }}
          >
            <Btn filmInfoOpened={filmInfoOpened}>{"buy tickets"}</Btn>
          </Synopsis>
        </Wrapper>
      </Fragment>
    );
  }
}
