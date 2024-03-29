import React from "react";
import "./About.css";
import backgroundImg from "../../../public/Home/AboutBG.png";
import audienceImg from "../../../public/Home/Applause.jpeg";
import trophiesImg from "../../../public/Home/Trophies.jpeg";
import { Link } from "react-router-dom";


class About extends React.Component {
  render() {
    return (
      <div
        className="home-about-container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 home-about-image-col">
            <img
              src={audienceImg}
              alt="Audience"
              className="img-fluid home-about-image"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 home-about-image-col">
            <img
              src={trophiesImg}
              alt="Trophies"
              className="img-fluid home-about-image"
            />
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12 home-about-text">
            <h2>About us</h2>
            <p>
              At MIST, we empower high school students through engaging
              competitions that fuse educational pursuits with Islamic values.
              Our vibrant community welcomes diverse talents to express
              themselves, innovate, and excel across a spectrum of disciplines.
              From fostering leadership and communication skills to inspiring a
              creative and collaborative spirit, MIST is dedicated to nurturing
              the next generation of thinkers, leaders, and change-makers. Join
              us on this transformative journey to celebrate knowledge, unity,
              and growth.
            </p>
            <Link to="/about">
              <button className="home-about-button">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
