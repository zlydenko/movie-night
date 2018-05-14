import React, { Component, Fragment } from "react";
import styled from "styled-components";

import FilmSlide from "../FilmSlide";

import { films } from "../filmsDb";

class SessionInfo extends Component {
  render() {
    return (
      <div
        style={{
          width: "50%",
          margin: "1em auto"
        }}
      >
        <FilmSlide
          trailer={films[0].trailer}
          title={films[0].title}
          caption={films[0].caption}
          tags={films[0].tags}
          cast={films[0].cast}
          id={films[0].id}
          score={films[0].metacriticScore}
        />
      </div>
    );
  }
}

export default SessionInfo;
