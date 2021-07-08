import React, { Component } from "react";
import "./HomePageSecondSection.css";
import { Button } from "react-bootstrap";

class HomePageSecondSection extends Component {
  render() {
    return (
      <div className="centerBottomPadding">
        <h1 className="numbersTitle">2021-2022 SoCal MIST E-Board</h1>
        <h2 className="secondSectionSubtitle">
          Applications for the 2021-2022 SoCal MIST E-Board are now open!
        </h2>
        <Button href="/boardApplication" className="applyButton">
          Apply now!
        </Button>
      </div>
    );
  }
}

export default HomePageSecondSection;
