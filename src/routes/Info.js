import React from "react";
import { Switch, Route } from "react-router-dom";

import Anchor from "../UI/Anchor";
import Card from "../UI/Card";
import Synopsis from "../Synopsis";
import Btn from "../Btn";
import SessionPicker from "../SessionPicker";
import SeatsPicker from "../SeatsPicker";
import Receipt from "../UI/Receipt";

const MainPage = ({ id, title, caption, tags, cast, metacriticScore }) => (
  <Anchor to={`/film/${id}`}>
    <Card>
      <Synopsis
        title={title}
        caption={caption}
        tags={tags}
        cast={cast}
        metacriticScore={metacriticScore}
      />
    </Card>
  </Anchor>
);

const InfoPage = ({
  location,
  title,
  caption,
  tags,
  cast,
  metacriticScore
}) => (
  <Card extended>
    <Anchor to="/">
      <Synopsis
        extended
        title={title}
        caption={caption}
        tags={tags}
        cast={cast}
        metacriticScore={metacriticScore}
      />
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

const SeatsPage = match => (
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

export default ({ data }) => {
  const { id, title, tags, cast, caption, metacriticScore } = data;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={location => (
          <MainPage
            location={location}
            id={id}
            title={title}
            caption={caption}
            tags={tags}
            cast={cast}
            metacriticScore={metacriticScore}
          />
        )}
      />
      <Route
        exact
        path="/film/:filmId/sessions"
        render={({ match }) => <SessionsPage match={match} />}
      />
      <Route
        exact
        path="/sessions/:sessionId"
        render={match => <SeatsPage match={match} />}
      />
      <Route
        exact
        path="/buy/:sessionId/:seats"
        render={({ match }) => <CheckoutPage match={match} />}
      />
      <Route
        path="/film/"
        render={({ location }) => (
          <InfoPage
            location={location}
            title={title}
            caption={caption}
            tags={tags}
            cast={cast}
            metacriticScore={metacriticScore}
          />
        )}
      />
    </Switch>
  );
};
