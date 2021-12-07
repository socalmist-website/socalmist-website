import React from "react";
import { Header } from "../Header/Navbar";
import Banner from "./Banner";
import Numbers from "./Numbers";
import YoutubeHolder from "./YoutubeHolder";
// import HomePageSecondSection from "./HomePageSecondSection";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <Header />
        <Banner />
        {/* <HomePageSecondSection /> */}
        <Numbers />
        <YoutubeHolder />
      </div>
    );
  }
}

export { HomePage };
