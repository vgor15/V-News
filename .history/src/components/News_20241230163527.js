import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
        "status": "ok",
        "totalResults": 10,
        "articles": [
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": "Reuters Staff",
            "title": "RBI to Shift Forex Strategy in 2025",
            "description": "The Reserve Bank of India is expected to relax its control over the rupee in 2025, anticipating a weaker rupee amidst global economic changes.",
            "url": "https://www.reuters.com/article/india-rbi-forex-strategy-idUSL4N1DZ73R",
            "urlToImage": null,
            "publishedAt": "2024-12-30T10:00:00Z",
            "content": "The Indian rupee's trade-weighted real effective exchange rate is overvalued, leading the Reserve Bank of India to reconsider its forex market interventions, which may result in a weaker and more volatile currency in 2025."
          },
          {
            "source": {
              "id": "moneycontrol",
              "name": "MoneyControl"
            },
            "author": "MoneyControl Staff",
            "title": "Indian Rupee Gains Slightly Against US Dollar",
            "description": "The Indian rupee gained marginally against the U.S. dollar, trading at 85.4750 on December 30, 2024.",
            "url": "https://www.moneycontrol.com/news/india/rupee-slips-into-negative-zone-us-dollar-trend-december-30-2024-111305.html",
            "urlToImage": null,
            "publishedAt": "2024-12-30T09:00:00Z",
            "content": "Despite significant outflows of foreign portfolio investment, the Indian rupee showed improvement against the U.S. dollar, thanks to a rise in regional currencies and year-end adjustments in the forex market."
          },
          {
            "source": {
              "id": "timesofindia",
              "name": "Times of India"
            },
            "author": "TOI Staff",
            "title": "Farmers in Punjab Initiate State-Wide Bandh",
            "description": "Farmers in Punjab begin a state-wide bandh demanding a legal guarantee of minimum support prices for crops.",
            "url": "https://timesofindia.indiatimes.com/india/punjab-farmers-shutdown-december-30-2024",
            "urlToImage": null,
            "publishedAt": "2024-12-30T08:00:00Z",
            "content": "Punjab farmers have launched a state-wide shutdown from December 30-31, blocking major roads including the Patiala-Chandigarh National Highway. They demand a legal guarantee for minimum support prices for their crops."
          },
          {
            "source": {
              "id": "ndtv",
              "name": "NDTV"
            },
            "author": "NDTV Staff",
            "title": "Punjab Teachers Detained During Protest",
            "description": "Teachers protesting in Delhi outside Arvind Kejriwal’s residence have been detained by the police.",
            "url": "https://www.ndtv.com/india-news/teachers-protest-arvind-kejriwal-detained-2024-dec-30",
            "urlToImage": null,
            "publishedAt": "2024-12-30T07:30:00Z",
            "content": "Teachers from Punjab, who were protesting outside Delhi CM Arvind Kejriwal's residence, have been detained. The reasons for their protest remain unclear as they demand improved working conditions."
          },
          {
            "source": {
              "id": "hindustantimes",
              "name": "Hindustan Times"
            },
            "author": "HT Staff",
            "title": "Winter Stroke Alert Issued by Health Experts",
            "description": "Health experts warn that cold weather increases the risk of strokes and advise preventive measures.",
            "url": "https://www.hindustantimes.com/india-news/winter-stroke-alert-2024-12-30",
            "urlToImage": null,
            "publishedAt": "2024-12-30T06:00:00Z",
            "content": "Health experts have raised an alert about an increased risk of strokes during the winter season. They recommend staying warm, maintaining blood pressure, and staying active to reduce the risks."
          },
          {
            "source": {
              "id": "indianexpress",
              "name": "Indian Express"
            },
            "author": "IE Staff",
            "title": "'Kaka Ji' Punjabi Film Streaming on Chaupal OTT",
            "description": "'Kaka Ji', a popular Punjabi film, is set to stream on the Chaupal OTT platform from December 30, 2024.",
            "url": "https://indianexpress.com/article/entertainment/bollywood/kaka-ji-streaming-on-chaupal-ott-2024-12-30",
            "urlToImage": null,
            "publishedAt": "2024-12-30T05:30:00Z",
            "content": "'Kaka Ji', the Punjabi romantic drama, is now available for streaming on the Chaupal OTT platform. Originally released in cinemas in 2019, the film has received a positive reception among audiences."
          },
          {
            "source": {
              "id": "economicstimes",
              "name": "Economic Times"
            },
            "author": "ET Staff",
            "title": "India's Trade Deficit Narrows in December",
            "description": "India's trade deficit narrowed in December 2024, signaling recovery in exports and a decrease in import dependency.",
            "url": "https://economictimes.indiatimes.com/india-trade-deficit-december-2024",
            "urlToImage": null,
            "publishedAt": "2024-12-30T05:00:00Z",
            "content": "India's trade deficit narrowed in December 2024, as exports showed positive growth while imports dropped slightly, reflecting the government's ongoing efforts to boost domestic production."
          },
          {
            "source": {
              "id": "deccanherald",
              "name": "Deccan Herald"
            },
            "author": "Deccan Herald Staff",
            "title": "India's Annual Winter Festival Celebrated in Delhi",
            "description": "Delhi celebrates its annual winter festival with cultural performances, local crafts, and food stalls.",
            "url": "https://www.deccanherald.com/india/delhi-annual-winter-festival-2024",
            "urlToImage": null,
            "publishedAt": "2024-12-30T04:30:00Z",
            "content": "Delhi's annual winter festival attracted thousands of visitors this weekend. The event showcased traditional music, dance performances, and a variety of local cuisine and handicrafts."
          },
          {
            "source": {
              "id": "timesofindia",
              "name": "Times of India"
            },
            "author": "TOI Staff",
            "title": "India's Top Headlines of the Day – December 30, 2024",
            "description": "A summary of the top news stories in India on December 30, 2024, covering politics, economy, and social issues.",
            "url": "https://timesofindia.indiatimes.com/india/top-headlines-december-30-2024",
            "urlToImage": null,
            "publishedAt": "2024-12-30T04:00:00Z",
            "content": "The Times of India summarizes the top stories for December 30, 2024, covering political updates, economic changes, and national security issues in India."
          }
        ]
      }
      }
}
  render() {
    return (
      <div className="container my-5 ">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="RBI to Shift Forex Strategy in 2025"
              description="The Reserve Bank of India is expected to relax its control over the rupee in 2025, anticipating a weaker rupee amidst global economic changes."
              imgUrl="https://tse3.mm.bing.net/th?id=OIP.hHYWxzPQx4UCqF_rTVwLSQHaFW&pid=Api"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Indian Rupee Gains Slightly Against US Dollar "
              description="The Indian rupee gained marginally against the U.S. dollar, trading at 85.4750 on December 30, 2024"
              imgUrl="https://tse4.mm.bing.net/th?id=OIP.hXvH7TlMzwXDmf5TyxHhOwHaGM&pid=Api"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Farmers in Punjab Initiate State-Wide Bandh"
              description="Farmers in Punjab begin a state-wide bandh demanding a legal guarantee of minimum support prices for crops"
              imgUrl="https://tse2.mm.bing.net/th?id=OIP.VNqNPYYbUpW1wZeTd1cWlAHaEK&pid=Api"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
