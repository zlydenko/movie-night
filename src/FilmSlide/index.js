import React, { Component, Fragment } from "react";
import {
  Wrapper,
  Video,
  InfoWrapper,
  Info,
  MovieTitle,
  Tags,
  Cast,
  Score,
  Btn
} from "./styled";

export default class FilmSlide extends Component {
  state = {
    filmInfoOpened: false,
    trailerPlaying: false
  };

  componentWillUpdate() {
    if (this.state.trailerPlaying) {
      this.videoElem.load();
    }
  }

  openFullInfo = () => {
    this.setState({ filmInfoOpened: !this.state.filmInfoOpened });
    this.setState({ trailerPlaying: !this.state.trailerPlaying });
  };

  render() {
    const {
      trailer,
      title,
      caption,
      id,
      current,
      tags,
      cast,
      score
    } = this.props;
    const { filmInfoOpened, trailerPlaying } = this.state;
    return (
      <Fragment>
        <Wrapper>
          <Video
            loop={trailerPlaying}
            autoPlay={trailerPlaying}
            filmInfoOpened={filmInfoOpened}
            onClick={this.openFullInfo}
            poster={"./blade-runner-banner.jpg"}
            innerRef={x => {
              this.videoElem = x;
            }}
          >
            {trailerPlaying && <source src={trailer} type={"video/webm"} />}
          </Video>
          <InfoWrapper filmInfoOpened={filmInfoOpened}>
            <Info filmInfoOpened={filmInfoOpened} onClick={this.openFullInfo}>
              <MovieTitle>{title}</MovieTitle>
              <Tags filmInfoOpened={filmInfoOpened}>{tags.join(" / ")}</Tags>
              <Cast filmInfoOpened={filmInfoOpened}>{cast.join(` / `)}</Cast>
              <p>{caption}</p>
            </Info>
            <Score
              scoreLevel={
                score >= 39 ? (score > 60 ? `Good` : `Medium`) : `Bad`
              }
            >
              <span>{score}</span>
            </Score>

            <Btn filmInfoOpened={filmInfoOpened}>{"buy tickets"}</Btn>
          </InfoWrapper>
        </Wrapper>
      </Fragment>
    );
  }
}
