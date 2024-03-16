import React from "react";
import { Header } from "../Header/Navbar";
import "./HomeNew.css";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Team from "./Team/Team";
import Theme from "./Theme/Theme";

class HomeNew extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <Header />
        <Banner />
        <About />
        <Team />
        <Theme />
      </div>
    );
  }
}

export { HomeNew };
