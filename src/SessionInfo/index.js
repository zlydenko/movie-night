import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Wrapper = styled.div`
  margin: 0em auto;
  position: absolute;
  top: 0;
  z-index: ${props => (props.active ? `1000` : `25`)};
  background-color: rgb(255, 255, 255);
  border-radius: 1em;
  padding-bottom: 1em;
  width: 400px;
`;

const Video = styled.video`
  border-radius: 1em;
  width: 100%;
  height: 10em;
  object-fit: cover;
  transform: scale(1.03);
`;

const FilmInfo = styled.div`
  padding: 0em 1em;
`;

const films = [
  {
    id: 551,
    title: "Blade Runner 2048",
    caption: "nice movie tho",
    trailer: `https://zippy.gfycat.com/WaryScaryIndianringneckparakeet.webm`
  },
  {
    id: 333,
    title: "Aloha",
    caption: "Oh ma",
    trailer: `https://zippy.gfycat.com/WarlikeFlusteredIsabellineshrike.webm`
  },
  {
    id: 888,
    title: "John Wick",
    caption: `Bloodthirsty bastard`,
    trailer: `https://zippy.gfycat.com/FatherlyFailingDeinonychus.webm`
  }
];

const Slide = ({ trailer, title, caption, active }) => (
  <Wrapper active={active}>
    <Video autoPlay={active ? "true" : null} loop={true}>
      <source src={trailer} type={"video/webm"} />
    </Video>
    <FilmInfo>
      <h3>{title}</h3>
      <p>{caption}</p>
    </FilmInfo>
  </Wrapper>
);

class SessionInfo extends Component {
  state = {
    current: 0,
    ids: []
  };

  componentDidMount() {
    const ids = films.map(filmObj => filmObj.id);
    this.setState({ ids, current: ids[0] });
  }

  changeSlide = direction => {
    const { current, ids } = this.state;
    const curIndex = ids.indexOf(current);
    const len = ids.length;
    const nextIndex = curIndex + 1;
    const prevIndex = curIndex - 1;

    const next =
      direction === "left"
        ? nextIndex > len - 1
          ? ids[0]
          : ids[nextIndex]
        : prevIndex < 0
          ? ids[len - 1]
          : ids[prevIndex];

    this.setState({ current: next });
  };

  render() {
    const { current } = this.state;
    const sliderSettings = {
      dots: false,
      slidesToShow: 1,
      vertical: true,
      arrows: false,
      infinite: true,
      onSwipe: this.changeSlide
    };

    return (
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          width: "50%",
          margin: "0 auto",
          padding: "1em 1em",
          backgroundColor: "powderblue"
        }}
      >
        <Slider {...sliderSettings}>
          {films.map((filmObj, i) => {
            const { id, trailer, title, caption } = filmObj;
            return (
              <Slide
                key={Number(i) * 3}
                trailer={trailer}
                title={title}
                caption={caption}
                active={current === id}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SessionInfo;
