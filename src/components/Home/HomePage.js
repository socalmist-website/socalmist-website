import React from "react";
import { Header } from "../Header/Navbar";
import Banner from "./Banner";
import Numbers from "./Numbers";
import YoutubeHolder from "./YoutubeHolder";
import SpiritPoints from "./SpiritPoints";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <Header />
        <Banner />
        <SpiritPoints />
        <Numbers />
        <YoutubeHolder />
      </div>
    );
  }
}

export { HomePage };
