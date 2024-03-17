import React from "react";
import "./Team.css";
import team1 from "../../../public/HomeNew/team-1.jpg"; // Update the path as necessary
import team2 from "../../../public/HomeNew/team-2.jpeg"; // Update the path as necessary
import team3 from "../../../public/HomeNew/team-3.jpeg"; // Update the path as necessary
import { Link } from "react-router-dom";

class Team extends React.Component {
  render() {
    return (
      <div className="home-team-container">
        <div className="row home-team-row">
          <div className="col home-team-image-col">
            <img src={team1} alt="Team 1" className="home-team-image" />
          </div>
          <div className="col home-team-image-col">
            <img src={team2} alt="Team 2" className="home-team-image" />
          </div>
          <div className="col home-team-image-col">
            <img src={team3} alt="Team 3" className="home-team-image" />
          </div>
        </div>
        <div className="home-team-text-section">
          <h2>Our Team</h2>
          <p>
            Meet the heart and soul behind MIST—our dedicated team of organizers
            and volunteers. Each member brings a unique blend of passion and
            expertise, driving our mission forward with innovation and
            commitment. Together, we create dynamic experiences that empower
            students, celebrate achievements, and inspire a legacy of excellence
            in the Muslim community. Get to know the faces that make MIST a
            beacon of inspiration and a hub of inter-scholastic triumph.
          </p>
          <Link to="/board">
            <button className="home-team-button">Meet the Team</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Team;
