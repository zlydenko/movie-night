import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import FilmSlide from "../FilmSlide";

import { films } from "../filmsDb";

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
              <FilmSlide
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
