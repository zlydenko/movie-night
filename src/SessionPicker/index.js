import React, { Fragment } from "react";
import { films } from "../filmsDb";

import Anchor from "../UI/Anchor";
import Session, { Title } from "./Session";

const SessionPicker = props => {
  return (
    <Fragment>
      <Title month={"June"} />
      {films[0].availableSessions.map((obj, _) => {
        return (
          <Anchor to={`/sessions/${obj.id}`} key={_}>
            <Session time={obj.timestamp} />
          </Anchor>
        );
      })}
    </Fragment>
  );
};

export default SessionPicker;
