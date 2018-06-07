import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { films } from "../filmsDb";

import Anchor from "../UI/Anchor";
import Session from "./Session";

const SessionPicker = props => {
  return (
    <Fragment>
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
