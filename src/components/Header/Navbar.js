import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Header extends React.Component {
  state = {
    navbarClass: "navbarBlack",
  };

  handleScroll(self) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll === 0) {
      self.setState({ navbarClass: "navbarBlack" });
    } else {
      self.setState({ navbarClass: "navbarBlack" });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll(this));
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll === 0) {
      this.setState({ navbarClass: "navbarBlack" });
    } else {
      this.setState({ navbarClass: "navbarBlack" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const image = require("../../public/socal-mist-logo.png");
    const insta = require("../../public/instagram-logo.png");
    const tiktok = require("../../public/tiktok-logo.png");

    return (
      <Navbar className={this.state.navbarClass} sticky="top" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img src={image} height="50px" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="SoCal MIST 2024">
            <NavDropdown.Item as={Link} to="/registration">Registration</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/theme">Theme</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/rulebook">Rulebook</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/competitions">Competitions</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/programs">Programs</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About">
            <NavDropdown.Item as={Link} to="/about">About MIST</NavDropdown.Item>
            {/* <NavDropdown.Item href="/board">Meet the Board</NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown title="Program">
            <NavDropdown.Item as={Link} to="/spirit">Spirit</NavDropdown.Item>
            {/* <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="/MISTree">MISTree</NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown title="Get Involved">
            <NavDropdown.Item as={Link} to="/judge">Judge</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/volunteer">Volunteer</NavDropdown.Item>
            {/* <NavDropdown.Item href="/boardApplication">
              Join the Team
            </NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <NavDropdown title="Sponsor/Donate">
            <NavDropdown.Item as={Link} to="/sponsor">Sponsor MIST</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/donate">Donate</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        <Navbar.Brand href="https://www.instagram.com/socalmist/">
          <img src={insta} height="30px" alt="instagram" className="instalogo"></img>
        </Navbar.Brand>
        <Navbar.Brand href="https://www.tiktok.com/@socal.mist">
          <img src={tiktok} height="30px" alt="tiktok" className="tiktoklogo"></img>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export { Header };
