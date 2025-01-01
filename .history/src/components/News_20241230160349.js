import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <span>
        <NewsItem title="." description="..." />
        <NewsItem title="." description="..." />
      </span>
    );
  }
}

export default News;
