import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">About us </p>
            <p className="text-blk subHeading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              incidunt quasi nam perspiciatis optio animi vero necessitatibus
              illo esse, rerum nulla, excepturi reiciendis officia numquam,
              culpa expedita? Nesciunt, eveniet tenetur! Velit perferendis
              pariatur, distinctio, repellendus nesciunt asperiores id earum
              dolorum cumque architecto eum ab corporis sed, autem possimus
              quae. Culpa quis saepe et exercitationem reiciendis eveniet
              ducimus voluptates cupiditate temporibus.
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            <img
              className="number1img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"
              alt="Creative  1"
            />
            <img
              className="number2img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"
              alt="Creative  2"
            />
            <img
              className="number3img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"
              alt="Creative  3"
            />
            <img
              className="number5img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
              alt="Creative  4"
            />
            <iframe
              allowFullScreen="allowFullScreen"
              className="number4vid"
              poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
              src="https://www.youtube.com/embed/svg%3E?"
              title="Creative Video"
            ></iframe>
            <img
              className="number7img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"
              alt="Creative Image 5"
            />
            <img
              className="number6img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"
              alt="Creative Image 6"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
