import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import './Navbar.css';

class Header extends React.Component {

  render() {
    const image = require('../../public/socal-mist-logo.png');

    return (
      <Navbar sticky='top' expand="lg">
        <Navbar.Brand href="/"><img src={image} height="50px" alt="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="About">
          <NavDropdown.Item href="/about">
            About MIST
          </NavDropdown.Item>
          <NavDropdown.Item href="/board">
            Meet the Board
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/register">Register</Nav.Link>
        <NavDropdown title="Competitions">
          <NavDropdown.Item href="/competition">
            Early Submissions
          </NavDropdown.Item>
          <NavItem>
            <NavDropdown title="Knowledge & Qur'an" drop="right" >
              <NavDropdown.Item href="/competition?competitionName=knowledgeTests">
                Knowledge Tests
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Qur'an Memorization
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Arts" drop="right" >
              <NavDropdown.Item href="/competition">
                2D Arts
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                3D Arts
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Fashion Design
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Photography
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Round One Art Ballot
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Writing & Oratory" drop="right" >
              <NavDropdown.Item href="/competition">
                Extemporaneous Essay
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Extemporaneous Speaking
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Original Oratory
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Poetry
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Prepared Essay
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Short Fiction
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Spoken Word
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Brackets" drop="right" >
              <NavDropdown.Item href="/competition">
                Debate
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Math Olympics
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                MIST Quiz Bowl
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Improv
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Group Projects" drop="right" >
              <NavDropdown.Item href="/competition">
                Business Venture
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Humanitarian Service
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Nasheed/Rap
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Science Fair
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Short Film
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Social Media
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Sports" drop="right" >
              <NavDropdown.Item href="/competition">
                Basketball
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
        </NavDropdown>
        <NavDropdown title="Program">
          <NavDropdown.Item href="/theme">
            Theme
          </NavDropdown.Item>
          <NavDropdown.Item href="/schedule">
            Schedule
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Get Involved">
          <NavDropdown.Item href="/judge">
            Judge
          </NavDropdown.Item>
          <NavDropdown.Item href="/volunteer">
            Volunteer
          </NavDropdown.Item>
          <NavDropdown.Item href="/ambassadors">
            MIST Ambassadors
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/donate">Sponsor/Donate</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export { Header };