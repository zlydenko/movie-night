import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from "./MainPage";
import InfoPage from "./InfoPage";
import SessionsPage from "./SessionsPage";
import SeatsPage from "./SeatsPage";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/film/:filmId" component={InfoPage} />
      <Route exact path="/film/:filmId/sessions" component={SessionsPage} />
      <Route exact path="/sessions/:sessionId" component={SeatsPage} />
    </div>
  </Router>
);

export default Routes;
