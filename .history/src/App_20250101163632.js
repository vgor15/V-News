import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

//! CREATING CLASS BASED COMPONENT

export default class App extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "whitesmoke" }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/src/components/Carousel.js"
              <News pageSize={6} country="US" category="General" />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </>
    );
  }
}
