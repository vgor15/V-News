import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
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
    // other articles go here...
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
    console.log("you clicked previous page");
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
    console.log("you clicked next page");
  };

  render() {
    // Limit the number of articles shown to 3
    const displayedArticles = this.state.articles.slice(0, 3);

    return (
      <div className="container my-5">
        <h2>Top Headlines</h2>

        <div className="row">
          {displayedArticles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  key={article.url}
                  title={article.title}
                  description={article.description}
                  imgUrl={!article.urlToImage ? "news.png" : article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-danger"
            onClick={this.handlePreClk}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= 2} // Update logic based on pagination
            type="button"
            className="btn btn-danger"
            onClick={this.handleNextClk}
          >
            next &rarr;
          </button>
        </div>

        {/* Button to navigate to the full news page */}
        <div className="mt-3 text-center">
          <Link to="/">
            <button className="btn btn-primary">See More News</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default News;
