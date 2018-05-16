import React from "react";
import styled from "styled-components";
import format from "date-fns/format";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1em 1em;

  &:hover {
    background-color: rgba(75, 0, 130, 0.3);
  }
`;

const Day = styled.span`
  font-size: 3em;
  margin-right: 0.4em;
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  letter-spacing: -0.15em;

  ${Wrapper}:hover & {
    opacity: 0.7;
  }
`;

const Weekday = styled.p`
  margin: 0em;

  ${Wrapper}:hover & {
    opacity: 0.7;
  }
`;

const Time = styled.p`
  margin: 0em;
  font-family: "Inconsolata", monospace;

  ${Wrapper}:hover & {
    opacity: 0.7;
  }
`;

const Session = ({ time }) => {
  return (
    <Wrapper>
      <Day>{format(time, "DD")}</Day>
      <div>
        <Weekday>{format(time, "dddd")}</Weekday>
        <Time>{format(time, "HH:mm")}</Time>
      </div>
    </Wrapper>
  );
};

export default Session;
