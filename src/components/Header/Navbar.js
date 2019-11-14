import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="About">
          <NavDropdown.Item href="/">
            New to MIST?
          </NavDropdown.Item>
          <NavDropdown.Item href="/">
            Meet the Board
          </NavDropdown.Item>
        </NavDropdown>
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
          <NavDropdown.Item href="/">
            Early Submissions
          </NavDropdown.Item>
          <NavItem>
            <NavDropdown title="Brackets" drop="right" >
              <NavDropdown.Item href="/">
                MIST Bowl
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                Improv
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem>
            <NavDropdown title="Arts" drop="right">
              <NavDropdown.Item href="/">
                2D Art
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                3D Art
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
        </NavDropdown>



      </Navbar>
    );
  }
}


export { Header };