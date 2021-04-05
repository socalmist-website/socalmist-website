import React, { Component } from "react";
import "./YoutubeHolder.css";

class SpiritPoints extends Component {
  render() {
    return (
      <div className="videoHolder">
        <h1 className="spiritPointsTitle">2021 Spirit Point Standings</h1>
        <iframe
          title="Spirit Points"
          width="610px"
          height="400px"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQtbfxLLR5rbjvr9UTz-vgDB-BHyCvWn2rf5kRz5bKdIMZEswPiqtnLfHyOybn7eivP66Wc1g0DvLZy/pubchart?oid=698781454&amp;format=interactive"
        ></iframe>
      </div>
    );
  }
}

export default SpiritPoints;
