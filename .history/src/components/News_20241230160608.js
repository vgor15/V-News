import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container">
        <NewsItem title="title here " description="description here " />
      </div>
    );
  }
}

export default News;