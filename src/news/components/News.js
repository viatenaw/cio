import React from "react";

const News = props => {
  // const { props.articles } = props.articles;
  for (let i = 0; i < props.articles.length; i++) {
    var articleArray = props.articles[i];
  }
  return (
    <div key={articleArray.publishedAt}>
      <img src={articleArray.urlToImage} width="50%" />
      <h3>{articleArray.title}</h3>
      <p>{articleArray.description}</p>
      <p>{articleArray.content}</p>
    </div>
  );
};

export default News;
