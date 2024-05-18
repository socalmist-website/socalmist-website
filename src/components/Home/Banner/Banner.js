import React from "react";
import "./Banner.css";
import bgImage from "../../../public/Home/MISTGroupPhoto.jpg";
import logoImage from "../../../public/Home/MISTLogo.png";
import { Link } from "react-router-dom";

class Banner extends React.Component {
  render() {
    return (
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="fade-to-black"></div>
        <img src={logoImage} alt="MIST Logo" className="home-banner-logo" />
        <Link to="/tournamentinfo">
          <button className="home-spotlight-button">
            Tournament Info
          </button>
        </Link>
      </div>
    );
  }
}

export default Banner;
