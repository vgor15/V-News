import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "John Doe",
      title: "Breaking News: Major Event Unfolds",
      description:
        "A major event is unfolding in the city center. Details are emerging.",
      url: "https://www.cnn.com/2024/12/30/breaking-news-major-event/index.html",
      urlToImage: "https://www.cnn.com/images/breaking-news-major-event.jpg",
      publishedAt: "2024-12-30T14:00:00Z",
      content:
        "Details are still emerging about the major event that is unfolding in the city center. Authorities are on the scene, and more information will be provided as it becomes available.",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "Jane Smith",
      title: "Economic Update: Market Trends",
      description:
        "An analysis of the latest market trends and economic indicators.",
      url: "https://www.bbc.com/news/business-12345678",
      urlToImage:
        "https://www.bbc.com/images/economic-update-market-trends.jpg",
      publishedAt: "2024-12-30T13:00:00Z",
      content:
        "The latest market trends indicate a shift in consumer behavior, with significant implications for the economy. Experts are analyzing the data to predict future movements.",
    },
    {
      source: {
        id: "the-new-york-times",
        name: "The New York Times",
      },
      author: "Alice Johnson",
      title: "Health Advisory: Flu Season Approaches",
      description:
        "Health officials are warning about the upcoming flu season and preventive measures.",
      url: "https://www.nytimes.com/2024/12/30/health/flu-season-advisory.html",
      urlToImage:
        "https://www.nytimes.com/images/health-flu-season-advisory.jpg",
      publishedAt: "2024-12-30T12:00:00Z",
      content:
        "With the flu season approaching, health officials are urging the public to get vaccinated and take preventive measures to reduce the spread of the virus.",
    },
    {
      source: {
        id: "the-guardian",
        name: "The Guardian",
      },
      author: "Bob Lee",
      title: "Sports Update: Championship Results",
      description: "The latest results from the national sports championships.",
      url: "https://www.theguardian.com/sport/2024/dec/30/championship-results",
      urlToImage:
        "https://www.theguardian.com/images/sports-championship-results.jpg",
      publishedAt: "2024-12-30T11:00:00Z",
      content:
        "The national sports championships concluded with thrilling matches. Highlights include record-breaking performances and unexpected upsets.",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Sara Ahmed",
      title: "International Relations: Summit Outcomes",
      description:
        "Key takeaways from the recent international summit on global issues.",
      url: "https://www.aljazeera.com/news/2024/12/30/international-relations-summit-outcomes",
      urlToImage:
        "https://www.aljazeera.com/images/international-relations-summit-outcomes.jpg",
      publishedAt: "2024-12-30T10:00:00Z",
      content:
        "The international summit addressed pressing global issues, with leaders agreeing on several key initiatives aimed at fostering cooperation and peace.",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="container my-5 ">
        <h2>Top Headlines</h2>

        <div className="row">
          <div className="col-md-4">
            {this.state.articles.map((article) => {
              return (
                <div className="col-md-4"></div>
                <NewsItem
                  key={article.url}
                  title={article.title}
                  description={article.description}
                  imgUrl={article.urlToImage}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
