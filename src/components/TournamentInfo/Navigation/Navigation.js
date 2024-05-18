import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Navigation.css'; // Create and import a CSS file for custom styles

class Navigation extends React.Component {
  render() {
    const mainImage = require("../../../public/ti/navigation-main-map.png"); // Update the path to your main image
    const exampleImage = require("../../../public/ti/navigation-example.png"); // Update the path to your example image

    return (
      <Container className="my-4 ti-nav-container">
        <Row>
          <Col>
            <h2 className="ti-nav-title">How to Navigate Mihaylo Hall</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="ti-nav-text">
              <p><strong>Example:</strong></p>
              <p>SGMH - 1225</p>
              <p>Mihaylo Hall <span className="ti-nav-location">Floor</span> <span className="ti-nav-room-number">Classroom number</span></p>
              <img 
                src={exampleImage} 
                alt="Example" 
                className="img-fluid ti-nav-example-image mt-3"
              />
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img 
              src={mainImage} 
              alt="Navigation Map" 
              className="img-fluid ti-nav-image"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
