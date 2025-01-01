import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

//! CREATING CLASS BASED COMPONENT

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.w3schools.com/w3images/bg.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        <News />
      </div>
    );
  }
}
