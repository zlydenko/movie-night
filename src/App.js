import React, { Component } from "react";

import { films } from "./filmsDb";

import FilmSlide from "./FilmSlide";

class App extends Component {
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

export default App;
