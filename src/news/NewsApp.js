import React, { Component } from "react";
import NewsDisplay from "./components/NewsDisplay";
import Newslist from "./components/Newslist";

class NewsApp extends Component {
  state = {
    news: []
  };
  addNewNews = newsInfo => {
    this.setState(prevState => ({
      news: prevState.news.concat(newsInfo)
    }));
  };

  render() {
    return (
      <div>
        <NewsDisplay onSubmit={this.addNewNews} />
        <Newslist news={this.state.news} />
      </div>
    );
  }
}

export default NewsApp;
