import React from "react";
import playerDP from "../playerInfo/images/virat-kohli-png-image-5.png";
import playerCover from "../playerInfo/images/v_k.gif";
import PlayerAbility from "./PlayerAbility";

const PlayerDPWall = () => {
  return (
    <div id="playerDP_Wall_Home" className="row">
      <img
        src={playerDP}
        id="PlayerDPHome"
        width="auto"
        height="250"
        alt="Player DP"
        className="col-5"
      />
      <PlayerAbility className="col-7" />
    </div>
  );
};

export default PlayerDPWall;
