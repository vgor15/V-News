import React, { Component } from "react";
import "./About.css";

class CreativeTeam extends Component {
  render() {
    return (
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">About us </p>
            <p className="text-blk subHeading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem animi modi quibusdam nam qui quae laudantium eveniet nostrum, aspernatur quidem eos ipsam fugit quod dolore eaque voluptatem quia adipisci recusandae?
              Rerum qui, harum nihil id maxime eligendi incidunt omnis porro tempore obcaecati, tempora quaerat dolorum quasi, enim libero repudiandae reprehenderit reiciendis sit? Et odit minima blanditiis! Quidem tempora quis tenetur.
              Distinctio voluptatem ea minima consectetur, optio rem ut ab odio debitis, vitae cum placeat, nobis aut dolorum quisquam blanditiis? Reprehenderit harum sunt deleniti deserunt id doloribus doloremque excepturi sit officia.
              Quidem perferendis aliquam sed optio voluptates, autem dignissimos mollitia nisi, sint architecto maxime culpa libero voluptate harum? Molestiae explicabo ipsam, voluptatibus atque unde sint temporibus, distinctio consequuntur vero, veritatis earum.
              Excepturi illum odit harum maiores. Aspernatur autem, dolor maxime expedita necessitatibus ea asperiores facilis sequi minus quam nisi ullam enim inventore voluptates excepturi ex accusamus nemo molestias debitis ipsam nostrum?
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            <img
              className="number1img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"
              alt="Creative Image 1"
            />
            <img
              className="number2img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"
              alt="Creative Image 2"
            />
            <img
              className="number3img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"
              alt="Creative Image 3"
            />
            <img
              className="number5img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
              alt="Creative Image 4"
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

export default CreativeTeam;
