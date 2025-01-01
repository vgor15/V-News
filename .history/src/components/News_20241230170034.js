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
    {
      source: {
        id: null,
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
        "Anthony ZurcherBBC North America correspondent The presidencies of Jimmy Carter and Joe Biden are separated by more than 40 years, but the foreign policy challenges the late president faced should b… [+1516 chars]",
    },
    {
      source: {
        id: "the-jerusalem-post",
        name: "The Jerusalem Post",
      },
      author: "By HANNAH BROWN",
      title:
        "Israeli actress Gal Gadot reveals she nearly died from blood clot during pregnancy - The Jerusalem Post",
      description:
        "Gadot said that after suffering debilitating headaches for weeks, she underwent an MRI and was rushed to the hospital for emergency surgery.",
      url: "https://www.jpost.com/israel-news/culture/article-835346",
      urlToImage: "...",
      publishedAt: "2024-12-30T07:47:22Z",
      content:
        "Gal Gadot was diagnosed “with a massive blood clot in [her] brain” during the eighth month of her pregnancy last February and nearly died, she wrote in an Instagram post on Sunday.\r\nGadot said that a… [+2092 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "MARK KENNEDY AP entertainment writer",
      title:
        "Linda Lavin, Tony-winning Broadway actress who starred in the sitcom ‘Alice,’ dies at 87 - ABC News",
      description:
        "Linda Lavin, a Tony Award-winning stage actress who became a working class icon as a waitress on the TV sitcom “Alice,” has died at age 87",
      url: "https://abcnews.go.com/Entertainment/wireStory/linda-lavin-tony-winning-broadway-actress-starred-sitcom-117192234",
      urlToImage:
        "https://i.abcnewsfe.com/a/d3443b23-0825-4d83-8f8a-271b68b62a16/wirestory_d2fd2a9ffc3f4c078ea4d86da877d538_16x9.jpg?w=1600",
      publishedAt: "2024-12-30T07:43:31Z",
      content:
        "NEW YORK -- Linda Lavin, a Tony Award-winning stage actress who became a working class icon as a paper-hat wearing waitress on the TV sitcom Alice, has died. She was 87.\r\nLavin died in Los Angeles on… [+4413 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters",
      title:
        "Shares muted in Asia, high yields test lofty valuations - Reuters",
      description: null,
      url: "data:image/png;base64,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",
      urlToImage: null,
      publishedAt: "2024-12-30T07:31:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Suntimes.com",
      },
      author: "Georgia Nicols",
      title: "Horoscope for Monday, December 30, 2024 - Chicago Sun-Times",
      description: null,
      url: "https://chicago.suntimes.com/horoscopes/2024/12/30/horoscopes-today-monday-december-30-2024",
      urlToImage:
        "https://cst.brightspotcdn.com/dims4/default/2145dbd/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fac%2Ffd%2F790f04b15195427014757adc0272%2Fgeorgia-nicols.jpg",
      publishedAt: "2024-12-30T06:03:43Z",
      content:
        "Moon alert There are no restrictions to shopping or important decisions. The new moon peaks in Capricorn at 4:27 p.m. Chicago time. Aries (March 21-April 19) This is the second new moon this year … [+3601 chars]",
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
