import React, { Component } from "react";
import bcciLogo from "./images/BCCI_logo.png";
import rcbLogo from "./images/RCB_logo.png";
class Teams extends Component {
  render() {
    return (
      <div className="teamsOFThePlayer">
        <h3 id="currentTeams">Current Teams</h3>
        <ul className="TeamList list-group">
          <li className="list-group-item ">
            <img src={bcciLogo} width="25px" /> India
          </li>
          <li className="list-group-item ">
            <img src={rcbLogo} width="25px" /> Royal Challengers Bangalore
          </li>
        </ul>
      </div>
    );
  }
}

export default Teams;
