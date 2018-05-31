import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { films } from "./filmsDb";

import SingleTrailer from "./SingleTrailer";
import Card from "./UI/Card";
import Synopsis from "./Synopsis";
import Btn from "./Btn";
import SessionPicker from "./SessionPicker";
import SeatsPicker from "./SeatsPicker";
import SlideWrapper from "./UI/SlideWrapper";
import Anchor from "./UI/Anchor";

const info = {
  id: films[0].id,
  title: films[0].title,
  caption: films[0].caption,
  trailer: films[0].trailer,
  tags: films[0].tags,
  cast: films[0].cast,
  score: films[0].metacriticScore
};

// TODO:
// * 1.trailer routes
// * 2.card routes
// * 3.combining

// ! Trailer routes

const Poster = () => (
  <Anchor to={`/film/${info.id}`}>
    <SingleTrailer trailerSource={info.trailer} />
  </Anchor>
);

const PlayingTrailer = ({ location }) => {
  const onSessionsPage = location.pathname.includes("sessions");
  return (
    // ? only came up with this hack to disable link
    <Anchor to={onSessionsPage ? location.pathname : "/"}>
      <SingleTrailer playing trailerSource={info.trailer} />
    </Anchor>
  );
};

const SeatsTrailer = () => (
  <SingleTrailer inPerspective playing trailerSource={info.trailer} />
);

const Trailer = () => (
  <Switch>
    <Route exact path="/" component={Poster} />
    <Route exact path="/sessions/:sessionId" component={SeatsTrailer} />
    <Route path="/film/" component={PlayingTrailer} />
  </Switch>
);

// ! Card routes

const MainPage = () => (
  <Anchor to={`/film/${info.id}`}>
    <Card>
      <Synopsis info={info} />
    </Card>
  </Anchor>
);

const InfoPage = ({ location }) => (
  <Card extended>
    <Anchor to="/">
      <Synopsis extended info={info} />
    </Anchor>
    <Anchor to={`${location.pathname}/sessions`}>
      <Btn />
    </Anchor>
  </Card>
);

const SessionsPage = ({ match }) => (
  <Card extended>
    <SessionPicker match={match} />
  </Card>
);

const SeatsPage = ({ match }) => (
  <Card extended inPerspective>
    <SeatsPicker match={match} />
  </Card>
);

const Info = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/film/:filmId/sessions" component={SessionsPage} />
    <Route exact path="/sessions/:sessionId" component={SeatsPage} />
    <Route path="/film/" component={InfoPage} />
  </Switch>
);

// ! Main Route

const Routes = () => (
  <div style={{ width: "90%", margin: "1em auto 0 auto" }}>
    <Router>
      <SlideWrapper>
        <Trailer />
        <Info />
      </SlideWrapper>
    </Router>
  </div>
);

export default Routes;
