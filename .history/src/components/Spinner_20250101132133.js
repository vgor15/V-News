import React, { Component } from "react";
import Loading from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div clas>
        <img src={Loading} alt="spinner image" />
      </div>
    );
  }
}
