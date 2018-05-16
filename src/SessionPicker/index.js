import React, { Fragment } from "react";
import { films } from "../filmsDb";

import Session from "./Session";

const SessionPicker = props => {
  return (
    <Fragment>
      {films[0].availableSessions.map((obj, _) => {
        return <Session time={obj.timestamp} key={_} />;
      })}
    </Fragment>
  );
};

export default SessionPicker;
