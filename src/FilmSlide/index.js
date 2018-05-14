import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  z-index: ${props => (props.active ? `1000` : `20`)};
`;

const Video = styled.video`
  transition: all 0.4s;
  position: absolute;
  z-index: 100;
  border-radius: 1em;
  width: 100%;
  height: 10em;
  object-fit: cover;
  ${props => (props.filmInfoOpened ? null : `transform: scale(1.03)`)};
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  transition: all 0.55s;
  z-index: 10;
  width: 100%;
  position: absolute;
  top: ${props => (props.filmInfoOpened ? `11em` : `0`)};
  background-color: rgb(255, 255, 255);
  padding-top: ${props => (props.filmInfoOpened ? `1em` : `11em`)};
  padding-bottom: ${props => (props.filmInfoOpened ? `1em` : `0em`)};
  border-radius: ${props => (props.filmInfoOpened ? `none` : `1em`)};
  user-select: none;
  cursor: pointer;
  overflow: hidden;
`;

const Info = styled.div`
  padding: 0em 1em;
  transition: all 1s;
  // ${props =>
    props.filmInfoOpened ? `transform: translate(0, 10em)` : null};
`;

const Tags = styled.p`
  font-weight: 700;
  font-size: 0.9em;
  margin-top: 0em;
  margin-bottom: ${props => (props.filmInfoOpened ? `1em` : `0em`)}; 
  height: ${props => (props.filmInfoOpened ? `auto` : `0em`)};
  transition: all 1.1s;
  opacity: ${props => (props.filmInfoOpened ? `1` : `0`)};
  // display: ${props => (props.filmInfoOpened ? `block` : `none`)};
`;

const Cast = Tags.extend`
  font-weight: 400;
  font-size: 1em;
`;

const Btn = styled.button`
  transition: transform 0.9s;
  display: block;
  width: 40%;
  padding: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  font-family: "Inconsolata", monospace;
  background-color: orange;
  color: rgb(0, 0, 0);
  border: 0.1em solid transparent;
  border-radius: 0.5em;
  cursor: pointer;
  margin: 0em auto;
  opacity: 0.9;
  height: ${props => (props.filmInfoOpened ? `auto` : `0em`)};
  ${props => (props.filmInfoOpened ? null : `transform: translate(0,10em);`)};

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 1;
  }
`;

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
    const { trailer, title, caption, id, current, tags, cast } = this.props;
    const { filmInfoOpened, trailerPlaying } = this.state;
    return (
      <Fragment>
        <Wrapper active={id === current}>
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
              <h3>{title}</h3>
              <Tags filmInfoOpened={filmInfoOpened}>{tags.join(" / ")}</Tags>
              <Cast filmInfoOpened={filmInfoOpened}>{cast.join(` | `)}</Cast>
              <p>{caption}</p>
            </Info>

            <Btn filmInfoOpened={filmInfoOpened}>{"buy tickets"}</Btn>
          </InfoWrapper>
        </Wrapper>
      </Fragment>
    );
  }
}
