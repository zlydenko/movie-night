import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { seats } from "../filmsDb";

import Btn from "../Btn";
import Anchor from "../UI/Anchor";

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
    props.notAvailable
      ? props.theme.colors.seatsPicker.reserved
      : props.selected
        ? props.theme.colors.seatsPicker.selected
        : props.theme.colors.seatsPicker.free};
  cursor: ${props => (props.notAvailable ? `default` : `pointer`)};
  border-radius: 0.2em;
`;

const CheckoutBtn = styled.button`
  font-family: ${props => props.theme.fonts.buttons};
  margin: 1em auto 0em auto;
  display: inline-block;
  text-decoration: none;
  background-color: ${props => props.theme.colors.buttons.bg};
  border: 0.1em solid ${props => props.theme.colors.buttons.border};
  border-radius: 1em;
  padding: 0.5em 1em;
  color: ${props => props.theme.colors.buttons.text};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
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
    chosenSeats: [],
    redirect: false
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
    const id = this.props.match.match.match.params.sessionId;
    const seatsArr = seats[id];
    return (
      <div>
        <h1>{id}</h1>
        <SeatsGrid
          reservedSeats={seatsArr}
          clickFn={this.selectSeats.bind(this)}
          chosen={this.state.chosenSeats}
        />
        <footer style={{ textAlign: "center" }}>
          {this.state.chosenSeats.length > 0 && (
            <Anchor to={`/buy/${id}/${this.state.chosenSeats.join("&")}`}>
              <Btn text={"checkout"} />
            </Anchor>
          )}
        </footer>
      </div>
    );
  }
}

export default SeatsPicker;
