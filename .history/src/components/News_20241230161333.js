import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-5 ">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="title here " description="description here " />
          </div>
          <div className="col-md-4">
            <NewsItem title="title here " description="description here " />
          </div>
          <div className="col-md-4">
            <NewsItem title="title here " description="description here " />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
