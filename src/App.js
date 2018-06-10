import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import "flexboxgrid2";

import theme from "./UI/theme";
import { films } from "./filmsDb";

import SlideWrapper from "./UI/SlideWrapper";
import Trailer from "./routes/Trailer";
import Info from "./routes/Info";

injectGlobal`
  body {
    font-family: ${theme.fonts.main};
    padding-top: 0.6em;
    width: 100%;
    min-height: 100vh;
    background: ${theme.colors.bgGradient};
    overflow: hidden;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-xs-12">
                <SlideWrapper>
                  <Trailer data={films[0]} />
                  <Info data={films[0]} />
                </SlideWrapper>
              </div>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
