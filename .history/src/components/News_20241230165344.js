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
      title: "Technology Giants Announce New AI Innovations",
      description:
        "Major tech companies are unveiling new artificial intelligence products that promise to revolutionize industries.",
      url: "https://www.cnn.com/2024/12/30/tech/ai-innovations/index.html",
      urlToImage: "https://cdn.cnn.com/images/tech/ai-innovations.jpg",
      publishedAt: "2024-12-30T14:00:00Z",
      content:
        "Tech giants are leading the charge with new AI tools that will change the way businesses operate across multiple industries. These innovations are expected to have a huge impact on sectors like healthcare, education, and manufacturing.",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "Jane Smith",
      title: "World Markets See Sharp Decline Amid Economic Fears",
      description:
        "Global stock markets experience a significant drop as concerns about the economy continue to rise.",
      url: "https://www.bbc.com/news/business-12345678",
      urlToImage: "https://www.bbc.com/images/world-markets-decline.jpg",
      publishedAt: "2024-12-30T13:00:00Z",
      content:
        "Financial markets around the world are grappling with fear and uncertainty as new data points to a slowdown in global economic growth. Investors are wary of the potential long-term effects.",
    },
    {
      source: {
        id: "the-new-york-times",
        name: "The New York Times",
      },
      author: "Alice Johnson",
      title: "New York City Introduces Green Transportation Initiative",
      description:
        "The city of New York rolls out new measures to encourage environmentally friendly transportation options.",
      url: "https://www.nytimes.com/2024/12/30/nyc-green-transportation-initiative.html",
      urlToImage: "https://www.nytimes.com/images/nyc-green-transportation.jpg",
      publishedAt: "2024-12-30T12:00:00Z",
      content:
        "New York City's Green Transportation Initiative is aimed at reducing emissions and promoting eco-friendly transportation. The plan includes expanded bike lanes, electric vehicle charging stations, and incentives for using public transportation.",
    },
    {
      source: {
        id: "the-guardian",
        name: "The Guardian",
      },
      author: "Bob Lee",
      title: "Climate Change: Global Leaders Commit to New Environmental Goals",
      description:
        "World leaders come together to pledge new commitments to combat climate change and reduce global emissions.",
      url: "https://www.theguardian.com/environment/2024/dec/30/climate-change-global-commitments",
      urlToImage:
        "https://www.theguardian.com/images/climate-change-global-leaders.jpg",
      publishedAt: "2024-12-30T11:00:00Z",
      content:
        "After lengthy negotiations, leaders from around the globe have agreed on new targets to curb emissions and reduce the effects of climate change. The deal includes measures to promote clean energy and reduce dependence on fossil fuels.",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Michael Brown",
      title: "Breakthrough in Cancer Research: New Drug Shows Promise",
      description:
        "A new cancer drug has shown remarkable promise in early trials, offering hope for future treatments.",
      url: "https://www.reuters.com/health/cancer-drug-breakthrough-2024-12-30",
      urlToImage:
        "https://www.reuters.com/images/cancer-research-breakthrough.jpg",
      publishedAt: "2024-12-30T10:00:00Z",
      content:
        "In a major breakthrough, a new drug designed to target cancer cells has shown promising results in clinical trials. Experts are hopeful this could lead to better treatment options for patients in the future.",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Sara Ahmed",
      title: "Peace Talks Begin in Middle East Conflict",
      description:
        "New peace talks aim to resolve the long-standing conflict in the Middle East, with international diplomats playing a key role.",
      url: "https://www.aljazeera.com/news/2024/12/30/middle-east-peace-talks-begin",
      urlToImage:
        "https://www.aljazeera.com/images/middle-east-peace-talks.jpg",
      publishedAt: "2024-12-30T09:00:00Z",
      content:
        "Diplomats have gathered to facilitate peace talks aimed at resolving the ongoing conflict in the Middle East. Both sides have expressed cautious optimism about the potential for a peaceful resolution.",
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
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    key={article.url}
                    title={article.title}
                    description={article.description}
                    imgUrl={article.urlToImage}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default News;
