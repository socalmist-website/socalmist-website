import React from 'react';
import './Theme.css';
import themeImage from '../../../public/HomeNew/MISTTheme.png'; // Update the path as necessary

class Theme extends React.Component {
  render() {
    return (
      <div className="home-theme-container">
        <img src={themeImage} alt="MIST Theme 2024" className="home-theme-image"/>
        <div className="home-theme-buttons">
          <button className="home-theme-button">Theme</button>
          <button className="home-theme-button">Rulebook</button>
        </div>
      </div>
    );
  }
}

export default Theme;
