import React from "react";
import { Header } from "../Header/Navbar";
import Description from "./Description/Description";
import Checklist from "./Checklist/Checklist";
import Navigation from "./Navigation/Navigation";
import SpiritTracker from "./SpiritTracker/SpiritTracker";
import Schedule from "./Schedule/Schedule";
import Workshop from "./Workshop/Workshop";
import Professionals from "./Professionals/Professionals";

class TournamentInfo extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <Header />
        <Description />
        <Checklist />
        <Navigation />
        <SpiritTracker />
        <Schedule />
        <Workshop />
        <Professionals />
      </div>
    );
  }
}

export { TournamentInfo };
