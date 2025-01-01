import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-5 ">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="RBI to Shift Forex Strategy in 2025"
              description="The Reserve Bank of India is expected to relax its control over the rupee in 2025, anticipating a weaker rupee amidst global economic changes."
              imgUrl="https://tse3.mm.bing.net/th?id=OIP.hHYWxzPQx4UCqF_rTVwLSQHaFW&pid=Api"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Indian Rupee Gains Slightly Against US Dollar "
              description="The Reserve Bank of India is expected to relax its control over the rupee in 2025, anticipating a weaker rupee amidst global economic changes"
              imgUrl="https://tse4.mm.bing.net/th?id=OIP.hXvH7TlMzwXDmf5TyxHhOwHaGM&pid=Api"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="title here "
              description="description here "
              imgUrl="https://tse2.mm.bing.net/th?id=OIP.VNqNPYYbUpW1wZeTd1cWlAHaEK&pid=Api"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
