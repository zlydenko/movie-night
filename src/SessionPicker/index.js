import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { films } from "../filmsDb";

import Session from "./Session";

const A = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SessionPicker = props => {
  const { match } = props;
  return (
    <Fragment>
      {films[0].availableSessions.map((obj, _) => {
        return (
          <A to={`/sessions/${obj.id}`} key={_}>
            <Session time={obj.timestamp} />
          </A>
        );
      })}
    </Fragment>
  );
};

export default SessionPicker;
