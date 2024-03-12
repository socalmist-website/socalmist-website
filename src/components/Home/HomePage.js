import React from "react";
import { Header } from "../Header/Navbar";
import Banner from "./Banner";
import "./HomePage.css";
import Numbers from "./Numbers";
import YoutubeHolder from "./YoutubeHolder";

class HomePage extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <Header />
        <Banner />
        <Numbers />
        <YoutubeHolder />
      </div>
    );
  }
}

export { HomePage };
