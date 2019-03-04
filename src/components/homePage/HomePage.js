import React, { Component } from "react";
import PlayerInfo from "../playerInfo/PlayerInfo";
import PublishPost from "../publishPost/PublishPost";
import PlayerDPWall from "../playerInfo/PlayerDPWall";
import Teams from "../teams/Teams";
import Schedule from "./upComingGames/Schedule";
import ProfilePage from "../../profile/ProfilePage";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="playerCenterInfo">
          <Teams />
          <PlayerDPWall />
          <Schedule />
          <div className="playerInfoAndPost row">
            <PlayerInfo className="col-4" />
            <PublishPost className="col-8" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
