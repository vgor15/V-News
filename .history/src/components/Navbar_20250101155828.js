import React, { Component } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <link className="navbar-brand" to="/">NewsApp</link> {/* Use Link for routing */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <link className="nav-link" to="/" aria-current="page">Home</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/about">About Us</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/business">Business</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/">Entertainment</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/">General</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/">Health</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/">Science</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/">Sports</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/">Technology</link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
