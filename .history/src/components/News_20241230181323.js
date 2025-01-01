import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Mike Valerio, Yoonjung Seo, Gawon Bae, Alex Stambaugh",
      title:
        "Sobbing and prayers echo through South Korean airport as families mourn air crash victims - CNN",
      description:
        "The sounds of sobbing, prayers and anguish echoed through the departures hall of an airport in southwestern South Korea on Monday as families of the victims aboard a passenger jet that crash landed over the weekend waited for their loved ones to be identified.",
      url: "https://www.cnn.com/2024/12/30/asia/south-korea-plane-crash-victims-families-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/01-gettyimages-2191119161-jpg.JPG?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-12-30T08:11:00Z",
      content:
        "Muan County, South KoreaCNN — The sounds of sobbing, prayers and anguish echoed through the departures hall of an airport in southwestern South Korea on Monday as families of the victims killed … [+6752 chars]",
    },
    // More articles...
  ];

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
      <div
        className="container my-5"
        style={{
          backgroundImage:
            'url("https://www.w3schools.com/w3images/bg.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-center text-white">Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4 my-2" key={article.url}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={article.urlToImage || "news.png"}
                    className="card-img-top"
                    alt="article image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      {article.description.slice(0, 100)}...
                    </p>
                    <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-danger"
            onClick={this.handlePreClk}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= 2}
            type="button"
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