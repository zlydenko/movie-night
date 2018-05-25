import React from "react";
import styled from "styled-components";

import { seats } from "../filmsDb";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1.3em);
  grid-template-rows: repeat(10, 1.3em);
  grid-row-gap: 0.8em;
  grid-column-gap: 0.3em;
  width: 100%;
  justify-content: center;
`;

const Cell = styled.div`
  background-color: ${props =>
    props.notAvailable ? `darkgrey` : props.selected ? `yellow` : `teal`};
  cursor: ${props => (props.notAvailable ? `default` : `pointer`)};
  border-radius: 0.2em;
`;

const SeatsGrid = ({ reservedSeats, clickFn }) => {
  const seatsAvailable = new Array(100).fill(null);
  const reservingSeats = reservedSeats.map(value => {
    const row = value[0];
    const col = value[1];
    const multiplier = row * 10 - 11;
    const seatIndex = col + multiplier;
    seatsAvailable[seatIndex] = true;
  });
  return (
    <Grid>
      {seatsAvailable.map((value, _) => {
        if (value === null) {
          return <Cell onClick={clickFn} key={_} />;
        } else {
          return <Cell notAvailable key={_} />;
        }
      })}
    </Grid>
  );
};

class SeatsPicker extends React.Component {
  state = {
    chosenSeats: []
  };

  selectSeats(_) {
    const index = Number(_._targetInst.return.key) + 1;
    console.log(index);
    // this.setState({ chosenSeats: [...this.state.chosenSeats, index] });
  }

  render() {
    const { match } = this.props;
    const id = match.params.sessionId;
    const seatsArr = seats[id];
    return (
      <div>
        <h1>{id}</h1>
        <SeatsGrid reservedSeats={seatsArr} clickFn={this.selectSeats} />
      </div>
    );
  }
}

export default SeatsPicker;
