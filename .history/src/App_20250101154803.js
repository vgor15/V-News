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
        <div style={{ backgroundColor: "whitesmoke" }}>
          <Navbar />
          <News pageSize={6} country="US" category="Sports" />
          <Footer />
        </div>
      </>
    );
  }
}
