import React, { Component } from "react";

export class NewsItem extends Component {
    constructor(){
        super();
        console.log()
    }
  render() {
    let { title, description,imgUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsDetail" className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
