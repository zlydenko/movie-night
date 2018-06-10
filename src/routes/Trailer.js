import React from "react";
import { Switch, Route } from "react-router-dom";

import Anchor from "../UI/Anchor";
import SingleTrailer from "../SingleTrailer";

const Poster = ({ id, poster }) => (
  <Anchor to={`/film/${id}`}>
    <SingleTrailer poster={poster} />
  </Anchor>
);

const PlayingTrailer = ({ trailer }) => {
  return (
    <Anchor to={"/"}>
      <SingleTrailer playing trailerSource={trailer} />
    </Anchor>
  );
};

const SeatsTrailer = ({ trailer }) => (
  <SingleTrailer inPerspective playing trailerSource={trailer} />
);

export default ({ data }) => {
  const { id, trailer, poster } = data;
  return (
    <Switch>
      <Route exact path="/">
        <Poster id={id} poster={poster} />
      </Route>
      <Route exact path="/sessions/:sessionId">
        <SeatsTrailer trailer={trailer} />
      </Route>
      <Route path="/film/">
        <PlayingTrailer trailer={trailer} />
      </Route>
    </Switch>
  );
};
