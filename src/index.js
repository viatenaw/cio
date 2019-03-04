import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import CIOHome from "./CIOHome";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route component={CIOHome} />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
