import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
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

    return (
      <Navbar className={this.state.navbarClass} sticky="top" expand="lg">
        <Navbar.Brand href="/">
          <img src={image} height="50px" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="About">
            <NavDropdown.Item href="/about">About MIST</NavDropdown.Item>
            <NavDropdown.Item href="/board">Meet the Board</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            href="https://my.getmistified.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </Nav.Link>
          <NavDropdown title="Competitions">
            <NavDropdown.Item
              href="https://www.getmistified.com/news/2021/12/5/2022-competitions-rulebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rulebook
            </NavDropdown.Item>
            <NavItem>
              <NavDropdown title="Knowledge & Qur'an" drop="right">
                <NavDropdown.Item href="/competition?competitionName=knowledgeTests">
                  Knowledge Tests
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=quranMemorization">
                  Qur'an Memorization
                </NavDropdown.Item>
              </NavDropdown>
            </NavItem>
            <NavItem>
              <NavDropdown title="Arts" drop="right">
                <NavDropdown.Item href="/competition?competitionName=2dArt">
                  2D Arts
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=3dArt">
                  3D Arts
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=fashionDesign">
                  Fashion Design
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=graphicDesign">
                  Graphic Design
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=photography">
                  Photography
                </NavDropdown.Item>
              </NavDropdown>
            </NavItem>
            <NavItem>
              <NavDropdown title="Writing & Oratory" drop="right">
                <NavDropdown.Item href="/competition?competitionName=extemporaneousEssay">
                  Extemporaneous Essay
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=extemporaneousSpeaking">
                  Extemporaneous Speaking
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=originalOratory">
                  Original Oratory
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=poetry">
                  Poetry
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=preparedEssay">
                  Prepared Essay
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=shortFiction">
                  Short Fiction
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=spokenWord">
                  Spoken Word
                </NavDropdown.Item>
              </NavDropdown>
            </NavItem>
            <NavItem>
              <NavDropdown title="Brackets" drop="right">
                <NavDropdown.Item href="/competition?competitionName=debate">
                  Debate
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=mathOlympics">
                  Math Olympics
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=mistQuizBowl">
                  MIST Quiz Bowl
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=improv">
                  Improv
                </NavDropdown.Item>
              </NavDropdown>
            </NavItem>
            <NavItem>
              <NavDropdown title="Group Projects" drop="right">
                <NavDropdown.Item href="/competition?competitionName=businessVenture">
                  Business Venture
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=humanitarianService">
                  Humanitarian Service
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=nasheed">
                  Nasheed/Rap
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=scienceFair">
                  Science Fair
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=shortFilm">
                  Short Film
                </NavDropdown.Item>
                <NavDropdown.Item href="/competition?competitionName=socialMedia">
                  Social Media
                </NavDropdown.Item>
              </NavDropdown>
            </NavItem>
            <NavItem>
              <NavDropdown title="Sports" drop="right">
                <NavDropdown.Item href="/competition?competitionName=basketball">
                  Basketball
                </NavDropdown.Item>
              </NavDropdown>
            </NavItem>
          </NavDropdown>
          <NavDropdown title="Program">
            <NavDropdown.Item href="/theme">Theme</NavDropdown.Item>
            <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Get Involved">
            <NavDropdown.Item href="/judge">Judge</NavDropdown.Item>
            {/* <NavDropdown.Item href="/volunteer">
            Volunteer
          </NavDropdown.Item> */}
            <NavDropdown.Item href="/boardApplication">
              Join the Team
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <NavDropdown title="Sponsor/Donate">
            <NavDropdown.Item href="/sponsor">Sponsor MIST</NavDropdown.Item>
            <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export { Header };
