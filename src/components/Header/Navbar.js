import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="About">
          <NavDropdown.Item href="/about">
            New to MIST?
          </NavDropdown.Item>
          <NavDropdown.Item href="/">
            Meet the Board
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/program">Program</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <NavDropdown title="Get Involved" id="getInvolved">
          <NavDropdown.Item href="/">
            Judge
          </NavDropdown.Item>
          <NavDropdown.Item href="/">
            Volunteer
          </NavDropdown.Item>
          <NavDropdown.Item href="/">
            MIST Ambassadors
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Competitions">
          <NavDropdown.Item href="/competition">
            Early Submissions
          </NavDropdown.Item>
          <NavItem>
            <NavDropdown title="Brackets" drop="right" >
              <NavDropdown.Item href="/competition">
                MIST Bowl
              </NavDropdown.Item>
              <NavDropdown.Item href="/competition">
                Improv
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
        </NavDropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Navbar>
    );
  }
}


export { Header };