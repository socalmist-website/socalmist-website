import React from "react";
import "./Banner.css";
import bgImage from "../../../public/HomeNew/MISTGroupPhoto.jpg";
import logoImage from "../../../public/HomeNew/MISTLogo.png";

class Banner extends React.Component {
  render() {
    return (
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="fade-to-black"></div>
        <img src={logoImage} alt="MIST Logo" className="home-banner-logo" />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScoQbcFM2NCUyLS6Gn9t0N88i64ar7cTCey7UMf-TihdZd-dA/viewform">
          <button className="home-spotlight-button">
            Competitor Spotlight
          </button>
        </a>
      </div>
    );
  }
}

export default Banner;
