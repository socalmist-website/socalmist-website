import React from 'react';
import './Banner.css';
import bgImage from '../../../public/HomeNew/MISTGroupPhoto.jpg';
import logoImage from '../../../public/HomeNew/MISTLogo.png';

class Banner extends React.Component {
  render() {
    return (
      <div className="home-banner" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="fade-to-black"></div>
        <img src={logoImage} alt="MIST Logo" className="home-banner-logo" />
        <button className="home-spotlight-button">Competitor Spotlight</button>
      </div>
    );
  }
}

export default Banner;
