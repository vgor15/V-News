import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import Footer from "./components/Footer";

//! CREATING CLASS BASED COMPONENT

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <News pageSize={6} country="US" category="Science" />
        </div>
        <Footer />
      </>
    );
  }
}
