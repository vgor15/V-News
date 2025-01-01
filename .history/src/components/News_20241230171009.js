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
      urlToImage:
        "https://chicago.suntimes.com/horoscopes/2024/12/23/horoscopes-today-monday-december-23-2024 ",
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
      url: "https://chicago.suntimes.com/horoscopes/2024/12/05/horoscopes-today-thursday-december-5-2024",
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
                  description={article.description.slice(
                    0,
                    article.description.length - 88
                  )}
                  imgUrl={article.urlToImage}
                  newsUrl={article.url}
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
