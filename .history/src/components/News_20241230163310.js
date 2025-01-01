import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor() {
        super();
        console.log("Constructor from news Comp")
    }
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
              description="The Indian rupee gained marginally against the U.S. dollar, trading at 85.4750 on December 30, 2024"
              imgUrl="https://tse4.mm.bing.net/th?id=OIP.hXvH7TlMzwXDmf5TyxHhOwHaGM&pid=Api"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Farmers in Punjab Initiate State-Wide Bandh"
              description="Farmers in Punjab begin a state-wide bandh demanding a legal guarantee of minimum support prices for crops"
              imgUrl="https://tse2.mm.bing.net/th?id=OIP.VNqNPYYbUpW1wZeTd1cWlAHaEK&pid=Api"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
