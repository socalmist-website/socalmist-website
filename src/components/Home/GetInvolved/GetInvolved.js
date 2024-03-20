import React from 'react';
import { Link } from 'react-router-dom';
import GetInvolvedImage from '../../../public/Home/GetInvolvedBG.jpg'; // Update the path as necessary
import './GetInvolved.css';

class GetInvolved extends React.Component {
  render() {
    return (
      <div className="home-gi-container">
        <img src={GetInvolvedImage} alt="Get Involved" className="home-gi-image"/>
        <h2 className="home-gi-header">Get Involved</h2>
        <div className="home-gi-buttons">
          <Link to="/judge">
            <button className="home-gi-button">Judge</button>
          </Link>
          <Link to="/volunteer">
            <button className="home-gi-button">Volunteer</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default GetInvolved;
