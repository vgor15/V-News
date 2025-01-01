import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//! CREATING CLASS BASED COMPONENT

export default class App extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "whitesmoke" }}>
          <Router>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<News pageSize={6} country="US" category="General" />}
              />
              <Route
                path="/busi"
                element={<News pageSize={6} country="US" category="General" />}
              />
              <Route
                path="/"
                element={<News pageSize={6} country="US" category="General" />}
              />
              <Route
                path="/"
                element={<News pageSize={6} country="US" category="General" />}
              />
              <Route
                path="/"
                element={<News pageSize={6} country="US" category="General" />}
              />
              <Route
                path="/"
                element={<News pageSize={6} country="US" category="General" />}
              />
            </Routes>
            <Footer />
          </Router>
        </div>
      </>
    );
  }
}
