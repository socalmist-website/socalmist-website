import React from "react";
import "./ImageRowTwo.css";
import team4 from "../../../public/Home/team-4.jpg"; // Update the path as necessary
import team5 from "../../../public/Home/team-5.jpg"; // Update the path as necessary
import team6 from "../../../public/Home/team-6.jpg"; // Update the path as necessary

class ImageRowTwo extends React.Component {
  render() {
    return (
      <div className="home-irt-container">
        <div className="row home-irt-row">
          <div className="col home-irt-image-col">
            <img src={team4} alt="Team 4" className="home-irt-image" />
          </div>
          <div className="col home-team-image-col">
            <img src={team5} alt="Team 5" className="home-irt-image" />
          </div>
          <div className="col home-team-image-col">
            <img src={team6} alt="Team 6" className="home-irt-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageRowTwo;
