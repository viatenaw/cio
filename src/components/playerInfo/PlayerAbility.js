import React, { Component } from "react";

class PlayerAbility extends Component {
  state = {
    fieldingPoints: "80",
    battingPoints: "95",
    bowlingPoints: "16"
  };
  render() {
    return (
      <div className="playerAbility">
        <div className="abilityPoints">
          <form id="feildingAbilityPoints">
            <div className="form-group">
              <label>Feilding</label>
              <input
                type="range"
                className="form-control-range"
                id="formControlRange"
                value={this.state.fieldingPoints}
              />
              <span className="abilityPointsValue">
                {this.state.fieldingPoints}
              </span>
            </div>
          </form>
        </div>
        <div className="abilityPoints">
          <form id="battingAbilityPoints">
            <div className="form-group">
              <label>Batting</label>
              <input
                type="range"
                className="form-control-range"
                id="formControlRange"
                value={this.state.battingPoints}
              />
              <span className="abilityPointsValue">
                {this.state.battingPoints}
              </span>
            </div>
          </form>
        </div>
        <div className="abilityPoints">
          <form id="bowlingAbilityPoints">
            <div className="form-group">
              <label>Bowling</label>
              <input
                type="range"
                className="form-control-range"
                id="formControlRange"
                value={this.state.bowlingPoints}
              />
              <span className="abilityPointsValue">
                {this.state.bowlingPoints}
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PlayerAbility;
