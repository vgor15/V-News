import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
 /

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=275020197cd4422097f7ca786748eb7f&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlePreClk = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=275020197cd4422097f7ca786748eb7f&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClk = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=275020197cd4422097f7ca786748eb7f&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4 mb-4" key={article.url}>
                <div className="card">
                  <img
                    src={article.urlToImage || "news.png"}
                    className="card-img-top"
                    alt={article.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {!article.title
                        ? "Title is not available"
                        : article.title}
                    </h5>
                    <p className="card-text">
                      {!article.description
                        ? "Description is not available"
                        : article.description}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-danger"
            onClick={this.handlePreClk}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= 2}
            className="btn btn-danger"
            onClick={this.handleNextClk}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
