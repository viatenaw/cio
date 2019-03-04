import React, { Component } from "react";
import axios from "axios";

class NewsDisplay extends Component {
  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=f12919f799db496584541d84e8a22b20`
      )
      .then(resp => {
        this.props.onSubmit(resp.data);
      });
  };
  render() {
    return (
      <div>
        <h1>Feed</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewsDisplay;
