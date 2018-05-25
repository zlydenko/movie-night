import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { films } from "./filmsDb";

import SlideWrapper from "./UI/SlideWrapper";
import Card from "./UI/Card";
import SingleTrailer from "./SingleTrailer";
import Synopsis from "./Synopsis";
import Btn from "./Btn";
import SeatsPicker from "./SeatsPicker";

const info = {
  id: films[0].id,
  title: films[0].title,
  caption: films[0].caption,
  trailer: films[0].trailer,
  tags: films[0].tags,
  cast: films[0].cast,
  score: films[0].metacriticScore
};

const A = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SeatsPage = props => {
  const { match } = props;

  return (
    <div style={{ width: "90%", margin: "1em auto 0 auto" }}>
      <SlideWrapper>
        <A to={`/`}>
          <SingleTrailer playing inPerspective trailerSource={info.trailer} />
        </A>
        <Card extended inPerspective>
          <SeatsPicker match={match} />
        </Card>
      </SlideWrapper>
    </div>
  );
};

export default SeatsPage;
