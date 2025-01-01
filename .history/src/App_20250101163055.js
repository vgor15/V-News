import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import Footer from "./components/Footer";
import {
  route,
  index,
  layout,
  prefix,
} from "react-router-dom";

//! CREATING CLASS BASED COMPONENT

export default class App extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "whitesmoke" }}>
          <Navbar />
          <News pageSize={6} country="US" category="General" />
          <Footer />
        </div>
      </>
    );
  }
}
