import React, { Component } from 'react';
import "./Banner.css";

class Banner extends Component {
  render() { 
    return (
      <div className="backgroundPicture">
        <div className="bannerInfoHolder">
          <h1 className="bannerText">SoCal MIST 2020</h1>
        </div>    
      </div>
    );
  }
}
 
export default Banner;