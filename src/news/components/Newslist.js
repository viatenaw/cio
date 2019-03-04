import React from "react";
import News from "./News";

const Newslist = props => {
  return (
    <div>
      {props.news.map(news => (
        <News {...news} />
      ))}
    </div>
  );
};

export default Newslist;
