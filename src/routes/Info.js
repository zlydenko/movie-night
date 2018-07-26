import React from "react";
import { Switch, Route } from "react-router-dom";
import format from "date-fns/format";
import QRCode from "qrcode.react";

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

const CheckoutPage = ({ match, availableSessions }) => {
  const sessionId = match.params.sessionId;
  const formattedSeats = match.params.seats.split("&");

  const timestamp = availableSessions.filter(
    obj => obj.id === Number(sessionId)
  )[0].timestamp;

  const getSeat = n => {
    const result = n % 10;
    return result === 0 ? 10 : result;
  };

  const getRow = n => (n - getSeat(n)) / 10 + 1;

  const seats = formattedSeats.map(value => {
    return {
      seat: getSeat(Number(value)),
      row: getRow(Number(value))
    };
  });

  const displaySeats = seats.map((value, _) => {
    return (
      <span key={_}>
        seat №{value.seat} at {`${value.row}th`} row{_ === seats.length - 1
          ? " "
          : ", "}
      </span>
    );
  });

  return (
    <Receipt>
      <h1>Thank You!</h1>
      <p style={{ lineHeight: "1.5em" }}>
        You bought {displaySeats} at{" "}
        <strong>{format(timestamp, "DD/MM HH:mm")}</strong>
      </p>
      <div style={{ margin: "0 auto" }}>
        <QRCode value={formattedSeats.join(", ")} level={"L"} />
      </div>
    </Receipt>
  );
};

export default ({ data }) => {
  const {
    id,
    title,
    tags,
    cast,
    caption,
    metacriticScore,
    availableSessions
  } = data;
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
        render={({ match }) => (
          <CheckoutPage match={match} availableSessions={availableSessions} />
        )}
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
