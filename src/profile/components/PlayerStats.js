import React, { Component } from "react";

class PlayerStats extends Component {
  render() {
    return (
      <div>
        <div className="playerStatsTable table-responsive-sm table-hover">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Mat</th>
                <th scope="col">Inn</th>
                <th scope="col">Runs</th>
                <th scope="col"> Avg</th>
                <th scope="col">Best</th>
                <th scope="col">SR</th>
                <th scope="col">100</th>
                <th scope="col">50</th>
                <th scope="col">4s</th>
                <th scope="col">6s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Test</th>
                <td>77</td>
                <td>131</td>
                <td>6613</td>
                <td>53.76</td>
                <td>243</td>
                <td>57.26</td>
                <td>25</td>
                <td>20</td>
                <td>371</td>
                <td>19</td>
              </tr>
              <tr>
                <th scope="row">ODI</th>
                <td>222</td>
                <td>214</td>
                <td>10533</td>
                <td>59.51</td>
                <td>183</td>
                <td>92.59</td>
                <td>39</td>
                <td>49</td>
                <td>984</td>
                <td>371</td>
              </tr>
              <tr>
                <th scope="row">T20I</th>
                <td>67</td>
                <td>62</td>
                <td>2200</td>
                <td>48.89</td>
                <td>90</td>
                <td>135.89</td>
                <td>0</td>
                <td>19</td>
                <td>221</td>
                <td>48</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlayerStats;
