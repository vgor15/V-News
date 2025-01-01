import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3 ">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="title here " description="description here " />
          </div>
          <div className="col-md-3"></div>
          <NewsItem title="title here " description="description here " />
          <NewsItem title="title here " description="description here " />
        </div>
      </div>
    );
  }
}

export default News;
