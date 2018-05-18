import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SingleTrailer from "../SingleTrailer";
import Synopsis from "../Synopsis";
import Btn from "../Btn";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export default class FilmSlide extends Component {
  render() {
    const {
      trailer,
      title,
      caption,
      tags,
      cast,
      score,
      match,
      id,
      extended
    } = this.props;

    const trailerProps = {
      trailerSource: trailer
    };

    const synopsisProps = {
      info: {
        title,
        tags,
        cast,
        caption,
        score
      }
    };

    const link = match.url === "/" ? `/film/${id}` : `/`;

    return (
      <Wrapper>
        <Link to={link}>
          <SingleTrailer {...trailerProps} />
          <Synopsis {...synopsisProps} />
        </Link>
      </Wrapper>
    );
  }
}
