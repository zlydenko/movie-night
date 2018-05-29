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

const SeatsGrid = ({ reservedSeats, clickFn, chosen }) => {
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
          return (
            <Cell
              selected={chosen.includes(_ + 1)}
              onClick={() => clickFn(_)}
              key={_}
            />
          );
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
    const seatIndex = _ + 1;
    const curSeats = this.state.chosenSeats;
    const isChosen = curSeats.indexOf(seatIndex) !== -1;
    let newSeats;
    if (isChosen) {
      newSeats = [...curSeats];
      newSeats.splice(newSeats.indexOf(seatIndex), 1);
    } else {
      newSeats = [...curSeats, seatIndex];
    }
    this.setState({ chosenSeats: newSeats });
  }

  render() {
    const { match } = this.props;
    const id = match.params.sessionId;
    const seatsArr = seats[id];
    return (
      <div>
        <h1>{id}</h1>
        <SeatsGrid
          reservedSeats={seatsArr}
          clickFn={this.selectSeats.bind(this)}
          chosen={this.state.chosenSeats}
        />
        {this.state.chosenSeats.length > 0 && (
          <p>{`Seats for checkout: ${this.state.chosenSeats.join(", ")}`}</p>
        )}
      </div>
    );
  }
}

export default SeatsPicker;
