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
        "https://cybersecuritynews.com/hackers-hijacked-16-chrome-extensions/",
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
      description:
        "Market analysis and updates on the economic situation across Asia.",
      url: "https://www.reuters.com/markets/asia/global-markets-wrapup-1-2024-12-30/",
      urlToImage: "https://www.reuters.com/assets/2024/12/30/asia-markets.jpg",
      publishedAt: "2024-12-30T07:31:00Z",
      content:
        "Asian shares were muted on Monday as high yields test the lofty valuations of stocks amid worries about rising inflation and interest rates.",
    },
    {
      source: {
        id: "suntimes",
        name: "Suntimes.com",
      },
      author: "Georgia Nicols",
      title: "Horoscope for Monday, December 30, 2024 - Chicago Sun-Times",
      description: "Astrological predictions for today.",
      url: "https://chicago.suntimes.com/horoscopes/2024/12/30/horoscopes-today-monday-december-30-2024",
      urlToImage:
        "https://cst.brightspotcdn.com/dims4/default/2145dbd/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fac%2Ffd%2F790f04b15195427014757adc0272%2Fgeorgia-nicols.jpg",
      publishedAt: "2024-12-30T06:03:43Z",
      content:
        "Moon alert There are no restrictions to shopping or important decisions. The new moon peaks in Capricorn at 4:27 p.m. Chicago time. Aries (March 21-April 19) This is the second new moon this year … [+3601 chars]",
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Russell Contreras",
      title:
        "Fatal beating of Black inmate in New York draws probes, outrage - Axios",
      description:
        "Body cam footage shows correction officers attacking Robert Brooks.",
      url: "https://www.axios.com/2024/12/30/robert-brooks-death-new-york-prison-death",
      urlToImage:
        "https://images.axios.com/aL1kHiRIBkndf9crqveaQqvowpE=/0x0:4358x2451/1366x768/2024/12/30/1735535770701.png",
      publishedAt: "2024-12-30T05:45:49Z",
      content:
        "The fatal beating of a Black man by white corrections officers at an upstate New York prison that was caught on body cam video has sparked anger, investigations and planned protests.",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters.com",
      },
      author: "Reuters.com",
      title:
        "South Korea investigators request arrest warrant for Yoon over martial law - Reuters.com",
      description:
        "Investigations related to a former president's actions during martial law.",
      url: "https://www.reuters.com/world/asia-pacific/skorea-joint-investigation-unit-requests-arrest-warrant-yoon-over-martial-law-2024-12-30/",
      urlToImage:
        "https://www.reuters.com/assets/2024/12/30/skorea-arrest-warrant.jpg",
      publishedAt: "2024-12-30T05:29:00Z",
      content:
        "South Korean investigators have requested an arrest warrant for former president Yoon over alleged actions taken during the period of martial law.",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "The Wall Street Journal",
      title:
        "Syria Looks to Pick Up the Pieces of Its Shattered Economy - The Wall Street Journal",
      description: "Economic recovery efforts in Syria following years of war.",
      url: "https://www.wsj.com/world/middle-east/syria-looks-to-pick-up-the-pieces-of-its-shattered-economy-40a5cab9",
      urlToImage: "https://www.wsj.com/assets/2024/12/30/syria-economy.jpg",
      publishedAt: "2024-12-30T05:15:00Z",
      content:
        "Syria is working to rebuild its shattered economy after years of war.",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "Joe Tansey",
      title:
        "NFL Playoff Bracket Picture 2024-25: AFC, NFC Standings After Week 17 SNF - Bleacher Report",
      description:
        "NFL playoff picture as the regular season heads to its conclusion.",
      url: "https://bleacherreport.com/articles/10148905-nfl-playoff-bracket-picture-2024-25-afc-nfc-standings-after-week-17-snf",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1735534447/pju6ji2yhxmbzptnoesj.jpg",
      publishedAt: "2024-12-30T04:52:30Z",
      content:
        "Dylan Buell/Getty Images\r\nDivision Leaders\r\n1. Kansas City (15-1)\r\n2. Buffalo (13-3)\r\n3. Baltimore (11-5)\r\n4. Houston (9-7)\r\nWild-Card Race\r\n5. Pittsburgh (10-6)\r\n6. Los Angeles Chargers (10-6)\r\n7. D… [+1073 chars]",
    },
    {
      source: {
        id: "nbcsports",
        name: "NBCSports.com",
      },
      author: "Charean Williams",
      title:
        "Sunday Night Football: Jayden Daniels carries Commanders into postseason with 30-24 OT win - NBC Sports",
      description:
        "Jayden Daniels threw for 227 yards and three touchdowns, including the game-winner to Zach Ertz, and ran for 127 yards.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/sunday-night-football-jayden-daniels-carries-commanders-into-postseason-with-30-24-ot-win",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/d5cbea1/2147483647/strip/true/crop/3097x1742+0+161/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fee%2F05%2F422f34b6428983b0b55503e4631c%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D25082167",
      publishedAt: "2024-12-30T04:48:45Z",
      content:
        "Jayden Daniels did it again, leading another comeback to get the Commanders into the postseason for the first time since 2020.",
    },
    {
      source: {
        id: "heat",
        name: "Heat.com",
      },
      author: "NBA Official",
      title:
        "Pool Report on Ejections in Fourth Quarter of Tonight’s Miami at Houston Game - NBA Official",
      description:
        "Pool report interview with Marc Davis regarding ejections in the Miami vs Houston game.",
      url: "https://official.nba.com/pool-report-on-ejections-in-fourth-quarter-of-tonights-miami-at-houston-game/",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/d5cbea1/2147483647/strip/true/crop/3097x1742+0+161/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fee%2F05%2F422f34b6428983b0b55503e4631c%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D25082167",
      publishedAt: "2024-12-30T03:49:05Z",
      content:
        "The Pool Report interview was conducted by Kelly Iko (The Athletic) with Crew Chief Marc Davis following tonight’s Miami at Houston game.",
    },
    {
      source: {
        id: "cybersecuritynews",
        name: "Cybersecuritynews.com",
      },
      author: "Guru Baran",
      title:
        "Hackers Hijacked 16 Chrome Extensions to Inject Malicious Code - CybersecurityNews",
      description:
        "A sophisticated cyberattack compromising Chrome extensions, leading to potential data theft.",
      url: "https://cybersecuritynews.com/hackers-hijacked-16-chrome-extensions/",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtRF_RyAYZXlf_TFV8jIHMuaak-hoElZC1VHK5_Dg8dIm6xok-lKMOw2hyeBlP4LwT24Ms8qvX9mchuUOPHoGF6KjusxUtIZ78EJC9bPFEWRc2V0TTXi11SSI9QCRzyCL6OR10dhuLAypXWZ1kNiHWUsts-suvXLd7MAOgq6LvDs9dpNt3B4fDy6a1V3-K/s16000/16%20Chrome%20Extensions%20Hacked!.webp",
      publishedAt: "2024-12-30T03:06:46Z",
      content:
        "In a sophisticated cyberattack campaign that began in mid-December, hackers have compromised at least 16 Chrome browser extensions, exposing over 600,000 users to potential data theft.",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=275020197cd4422097f7ca786748eb7f";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
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
                  imgUrl={!article.urlToImage ? "data:image/jpeg;base64,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"}
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
