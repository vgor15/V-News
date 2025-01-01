import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "IN",
    pageSize: 6,
  };

  static propsTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
  };

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
    {
      source: {
        id: "bbc",
        name: "BBC News",
      },
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
      loading: true,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=275020197cd4422097f7ca786748eb7f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult,
      loading: false,
    });
  }

  handlePreClk = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=275020197cd4422097f7ca786748eb7f&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClk = async () => {
    if (!this.state.page + 1 > Math.ceil(this.state.totalResult / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&apiKey=275020197cd4422097f7ca786748eb7f&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-5">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Spicy Rice", fontSize: "3rem" }}
        >
          Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article) => {
              return (
                <div className="col-md-4 mb-4" key={article.url}>
                  <div className="card bg-dark text-white">
                    <img
                      src={article.urlToImage || "news.png"}
                      className="card-img-top"
                      alt={article.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {article.title || "Title is not available"}
                      </h5>
                      <p className="card-text scroll-container">
                        {article.description || "Description is not available"}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-auto"
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.page)
            }
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
