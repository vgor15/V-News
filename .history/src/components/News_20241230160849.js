import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3 ">
        <h2>Top Headlines</h2>
        <NewsItem title="title here " description="description here " />
        <NewsItem title="title here " description="description here " />
        <NewsItem title="title here " description="description here " />
      </div>
    );
  }
}

export default News;
