import React from 'react';
import { Link } from 'react-router-dom';
import './Sponsors.css';
import sponsorLogoOne from '../../../public/Home/CAIRlogo.png'; // Update path as necessary
import sponsorLogoTwo from '../../../public/Home/YSSlogo.png'; // Update path as necessary

class Sponsors extends React.Component {
  render() {
    return (
      <div className="home-sponsors-container">
        <h2 className="home-sponsors-title">Our Sponsors</h2>
        <div className="home-sponsors-logos">
          <img src={sponsorLogoOne} alt="Sponsor One" className="home-sponsors-logo"/>
          <img src={sponsorLogoTwo} alt="Sponsor Two" className="home-sponsors-logo"/>
        </div>
        <div className="home-sponsors-buttons">
          <Link to="/sponsor" className="home-sponsors-link">
            <button className="home-sponsors-button">Sponsor</button>
          </Link>
          <Link to="/donate" className="home-sponsors-link">
            <button className="home-sponsors-button">Donate</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sponsors;
