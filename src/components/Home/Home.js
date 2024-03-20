import React from "react";
import { Header } from "../Header/Navbar";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Team from "./Team/Team";
import Theme from "./Theme/Theme";
import ImageRowOne from "./ImageRowOne/ImageRowOne";
import ImageRowTwo from "./ImageRowTwo/ImageRowTwo";
import GetInvolved from "./GetInvolved/GetInvolved";
import Sponsors from "./Sponsors/Sponsors";
import Contact from "./Contact/Contact";

class Home extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <Header />
        <Banner />
        <About />
        <ImageRowOne />
        <Team />
        <Theme />
        <GetInvolved />
        <ImageRowTwo />
        <Sponsors />
        <Contact />
      </div>
    );
  }
}

export { Home };
