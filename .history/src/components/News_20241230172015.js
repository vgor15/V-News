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
                  title={article.title.slice(0, 45)}
                  description={article.description.slice(0, 88)}
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
