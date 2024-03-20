import React from "react";
import "./ImageRowOne.css";
import team1 from "../../../public/Home/team-1.jpg"; // Update the path as necessary
import team2 from "../../../public/Home/team-2.jpeg"; // Update the path as necessary
import team3 from "../../../public/Home/team-3.jpeg"; // Update the path as necessary

class ImageRowOne extends React.Component {
  render() {
    return (
      <div className="home-iro-container">
        <div className="row home-iro-row">
          <div className="col home-iro-image-col">
            <img src={team1} alt="Team 1" className="home-iro-image" />
          </div>
          <div className="col home-team-image-col">
            <img src={team2} alt="Team 2" className="home-iro-image" />
          </div>
          <div className="col home-team-image-col">
            <img src={team3} alt="Team 3" className="home-iro-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageRowOne;
