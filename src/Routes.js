import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from "./UI/theme";
import "flexboxgrid2";

import { films } from "./filmsDb";

import SingleTrailer from "./SingleTrailer";
import Card from "./UI/Card";
import Synopsis from "./Synopsis";
import Btn from "./Btn";
import SessionPicker from "./SessionPicker";
import SeatsPicker from "./SeatsPicker";
import SlideWrapper from "./UI/SlideWrapper";
import Anchor from "./UI/Anchor";
import Receipt from "./UI/Receipt";

const info = {
  id: films[0].id,
  title: films[0].title,
  caption: films[0].caption,
  trailer: films[0].trailer,
  tags: films[0].tags,
  cast: films[0].cast,
  score: films[0].metacriticScore
};

injectGlobal`
  body {
    font-family: ${theme.fonts.main};
    padding-top: 0.6em;
    width: 100%;
    min-height: 100vh;
    background: ${theme.colors.bgGradient};
    overflow: hidden;
  }
`;

const Poster = () => (
  <Anchor to={`/film/${films[0].id}`}>
    <SingleTrailer trailerSource={films[0].trailer} />
  </Anchor>
);

const PlayingTrailer = ({ location }) => {
  const onSessionsPage = location.pathname.includes("sessions");
  return (
    <Anchor to={onSessionsPage ? location.pathname : "/"}>
      <SingleTrailer playing trailerSource={films[0].trailer} />
    </Anchor>
  );
};

const SeatsTrailer = () => (
  <SingleTrailer inPerspective playing trailerSource={films[0].trailer} />
);

const Trailer = () => (
  <Switch>
    <Route exact path="/">
      <Poster />
    </Route>
    <Route exact path="/sessions/:sessionId" component={SeatsTrailer} />
    <Route path="/film/" component={PlayingTrailer} />
  </Switch>
);

const MainPage = () => (
  <Anchor to={`/film/${films[0].id}`}>
    <Card>
      <Synopsis info={films[0]} />
    </Card>
  </Anchor>
);

const InfoPage = ({ location }) => (
  <Card extended>
    <Anchor to="/">
      <Synopsis extended info={films[0]} />
    </Anchor>
    <Anchor to={`${location.pathname}/sessions`}>
      <Btn text={"buy tickets"} />
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

const CheckoutPage = ({ match }) => {
  const sessionId = match.params.sessionId;
  const formattedSeats = match.params.seats.split("&").join(", ");

  return (
    <Receipt>
      <h1>hello</h1>
      <p>
        You bought {formattedSeats} on #{sessionId} session.
      </p>
    </Receipt>
  );
};

const Info = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/film/:filmId/sessions" component={SessionsPage} />
    <Route exact path="/sessions/:sessionId&:timeId" component={SeatsPage} />
    <Route exact path="/buy/:sessionId/:seats" component={CheckoutPage} />
    <Route path="/film/" component={InfoPage} />
  </Switch>
);

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div className="container">
        <div className="col-lg-4 col-md-8 col-xs-12">
          <SlideWrapper>
            <Trailer />
            <Info />
          </SlideWrapper>
        </div>
      </div>
    </Router>
  </ThemeProvider>
);
