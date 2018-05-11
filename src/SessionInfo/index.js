import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Wrapper = styled.div`
  margin: 0em auto;
  position: absolute;
  top: 1em;
  z-index: ${props => (props.current ? `1000` : `2`)};
  background-color: rgb(255, 255, 255);
  border-radius: 1em;
  padding-bottom: 1em;
  width: 400px;
`;

const Video = styled.video`
  border-radius: 1em;
  width: 100%;
  transform: scale(1.03);
`;

const FilmInfo = styled.div`
  padding: 0em 1em;
`;

class SessionInfo extends Component {
  state = {
    current: 1
  };

  changeSlide = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    const sliderSettings = {
      dots: false,
      slidesToShow: 1,
      vertical: true,
      arrows: false,
      infinite: true,
      onSwipe: this.changeSlide
    };

    return (
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          width: "50%",
          margin: "0 auto",
          backgroundColor: "powderblue"
        }}
      >
        <Slider {...sliderSettings}>
          <Fragment>
            <Wrapper current={current % 2 !== 0}>
              <Video autoPlay={false} loop={true}>
                <source
                  src={
                    "https://zippy.gfycat.com/WaryScaryIndianringneckparakeet.webm"
                  }
                  type={"video/webm"}
                />
              </Video>
              <FilmInfo>
                <h3>Blade Runner 2048</h3>
                <p>nice movie tho</p>
              </FilmInfo>
            </Wrapper>
          </Fragment>
          {/* second */}
          <Fragment>
            <Wrapper current={current % 2 === 0}>
              <Video autoPlay={false} loop={true}>
                <source
                  src={
                    "https://zippy.gfycat.com/WaryScaryIndianringneckparakeet.webm"
                  }
                  type={"video/webm"}
                />
              </Video>
              <FilmInfo>
                <h3>Blade Runner 2049</h3>
                <p>not a nice movie tho</p>
              </FilmInfo>
            </Wrapper>
          </Fragment>
        </Slider>
      </div>
    );
  }
}

export default SessionInfo;
