import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt } = this.props;
    return (
      <div className="my-3">
        <div className="card mb-3">
          <img
            className="card-img-top"
            src={imgUrl || "default-news-image.jpg"} // Fallback image if no imgUrl is provided
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title || "Card title"}
            </h5>
            <p className="card-text">
              {description || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
            </p>
            <p className="card-text">
              <small className="text-muted">
                {publishedAt
                  ? `Last updated: ${new Date(publishedAt).toLocaleString()}`
                  : "Last updated: Unknown"}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
