import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt } = this.props;
    return (
      <div className="my-3">
        <div className="card mb-3">
          <img
            src={imgUrl || "default-news-image.jpg"} // Fallback image if imgUrl is missing
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title : "Title not available"}
            </h5>
            <p className="card-text">
              {description ? description : "Description not available"}
            </p>
            <p className="card-text">
              <small className="text-muted">
                {publishedAt
                  ? `Last updated: ${new Date(publishedAt).toLocaleString()}`
                  : "Update time not available"}
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
