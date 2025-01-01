import React, { Component } from "react";

export class News extends Component {
  articles = [
    {
      source: { id: "cnn", name: "CNN" },
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
    {
      source: { id: "bbc", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Jimmy Carter dies: Biden and Trump lead tributes to 'extraordinary' former president - BBC.com",
      description:
        "The one-term Democratic president and Nobel Peace Prize winner died at home in Georgia aged 100.",
      url: "https://www.bbc.com/news/live/ce98937nrqrt",
      urlToImage:
        "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png",
      publishedAt: "2024-12-30T07:52:30Z",
      content:
        "Anthony ZurcherBBC North America correspondent\r\nThe presidencies of Jimmy Carter and Joe Biden are separated by more than 40 years, but the foreign policy challenges the late president faced should b… [+1516 chars]",
    },
    // ... other articles
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
      <div className="container my-5">
        <h2 className="text-center mb-4">Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4 mb-4" key={article.url}>
                {/* Updated card structure */}
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={article.urlToImage || "news.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {!article.title ? "Title is not available" : article.title}
                    </h5>
                    <p className="card-text">
                      {!article.description
                        ? "Description is not available"
                        : article.description}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        {article.publishedAt
                          ? `Last updated: ${new Date(
                              article.publishedAt
                            ).toLocaleString()}`
                          : "Update time not available"}
                      </small>
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
