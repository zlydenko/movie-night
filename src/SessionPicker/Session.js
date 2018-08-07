import React from "react";
import styled from "styled-components";
import format from "date-fns/format";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1em 1em;
  background-color: ${props => props.theme.colors.sessionPicker.bg};

  &:hover {
    background-color: ${props => props.theme.colors.sessionPicker.hovered};
  }
`;

const Day = styled.span`
  font-size: 3em;
  margin-right: 0.4em;
  font-family: ${props => props.theme.fonts.additional};
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
  font-family: ${props => props.theme.fonts.additional};

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

const MonthTitle = styled.h3`
  text-align: left;
  padding-left: 1em;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 0em;
`;

export const Title = ({ month }) => {
  return <MonthTitle>{month}</MonthTitle>;
};

export default Session;
