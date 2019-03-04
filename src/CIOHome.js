import React, { Component } from "react";
import "./bootstrap.min.css";
import { Switch } from "react-router-dom";
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import ProfilePage from "./profile/ProfilePage";

import {
  faUserTag,
  faImages,
  faVideo,
  faBolt,
  faRunning,
  faPoll,
  faCrown,
  faHashtag
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import "./index.css";
import Feed from "./feed/Feed";
library.add(
  faUserTag,
  faImages,
  faVideo,
  faBolt,
  faRunning,
  faPoll,
  faCrown,
  faHashtag
);

class CIOHome extends Component {
  render() {
    return (
      <>
        <div className="container-fluid home">
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/feed" component={Feed} />
          </Switch>
        </div>
      </>
    );
  }
}

export default CIOHome;
