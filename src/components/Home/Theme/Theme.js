import React from 'react';
import './Theme.css';
import themeImage from '../../../public/Home/MISTTheme.png'; // Update the path as necessary
import { Link } from 'react-router-dom';

class Theme extends React.Component {
  render() {
    return (
      <div className="home-theme-container">
        <img src={themeImage} alt="MIST Theme 2024" className="home-theme-image"/>
        <div className="home-theme-buttons">
          <Link to="/theme">
            <button className="home-theme-button">Theme</button>
          </Link>
          <Link to="/rulebook">
            <button className="home-theme-button">Rulebook</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Theme;
