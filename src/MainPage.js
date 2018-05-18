import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { films } from "./filmsDb";

import SlideWrapper from "./UI/SlideWrapper";
import Card from "./UI/Card";
import SingleTrailer from "./SingleTrailer";
import Synopsis from "./Synopsis";

const info = {
  id: films[0].id,
  title: films[0].title,
  caption: films[0].caption,
  trailer: films[0].trailer,
  tags: films[0].tags,
  cast: films[0].cast,
  score: films[0].metacriticScore
};

const MainPage = props => {
  return (
    <div style={{ width: "90%", margin: "1em auto 0 auto" }}>
      <Link to={`/film/${info.id}`}>
        <SlideWrapper>
          <SingleTrailer trailerSource={info.trailer} />
          <Card>
            <Synopsis info={info} />
          </Card>
        </SlideWrapper>
      </Link>
    </div>
  );
};

export default MainPage;
