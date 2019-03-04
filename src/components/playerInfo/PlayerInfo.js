import React from "react";
import { Link } from "react-router-dom";

const PlayerInfo = () => {
  return (
    <div className=" PlayerInfoList">
      <hr />
      <div className=" infoList">
        <ul className=" list-group">
          <li className=" unorderedListInfoItem list-group-item d-flex justify-content-between align-items-center">
            <Link to="/profile" className="property btn btn-info">
              {" "}
              MATCHES{" "}
            </Link>
            <span className="badge badge-primary badge-pill">
              <p className="value">208</p>
            </span>
          </li>
          <li className=" unorderedListInfoItem list-group-item d-flex justify-content-between align-items-center">
            <Link to="/profile" className="property btn btn-info">
              {" "}
              RUNS{" "}
            </Link>

            <span className="badge badge-primary badge-pill">
              <p className="value">10225</p>
            </span>
          </li>
          <li className="unorderedListInfoItem list-group-item d-flex justify-content-between align-items-center">
            <Link to="/profile" className="property btn btn-info">
              AVERAGE
            </Link>

            <span className="badge badge-primary badge-pill">
              <p className="value">59.8</p>
            </span>
          </li>

          <li className="unorderedListInfoItem list-group-item d-flex justify-content-between align-items-center">
            <Link to="/profile" className="property more btn btn-info">
              MORE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerInfo;
