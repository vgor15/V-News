import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <NewsItem title="." description="..." />
        <NewsItem title="." description="..." />
        <NewsItem title="." description="..." />
        <NewsItem title="." description="..." />
      </div>
    );
  }
}

export default News;
