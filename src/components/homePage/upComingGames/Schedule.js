import React, { Component } from "react";

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h3 id="schedulh3">Your Schedule</h3>

        <ul className="scheduleList list-group">
          <div className="eventTime"> March 2019</div>
          <li className="scheduleItem list-group-item ">
            Australia Bi-Lateral Series
          </li>
          <div className="eventTime"> April 2019</div>
          <li className="scheduleItem list-group-item ">IPL</li>
          <div className="eventTime"> May 2019</div>
          <li className="scheduleItem list-group-item ">
            ICC Cricket World Cup-2019
          </li>
        </ul>
      </div>
    );
  }
}

export default Schedule;
