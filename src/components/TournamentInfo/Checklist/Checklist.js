import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Checklist.css'; // Create and import a CSS file for custom styles

class Checklist extends React.Component {
  render() {
    const image = require("../../../public/ti/checklist-map.png"); // Update the path to your image
    return (
      <Container className="my-4 ti-checklist-container">
        <Row>
          <Col>
            <h2 className="ti-checklist-title">Checklist & Map</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <ul className="ti-checklist-list">
              <li>School ID Card</li>
              <li>Competition Submissions all due <strong>Saturday</strong> morning during registration</li>
              <li>Download the getMISTIFIED app</li>
              <li>Reusable Water Bottles</li>
              <li>Pencils and Paper</li>
              <li>Fill out CSUF General waiver</li>
              <li>Dress to impress - business casual</li>
              <li>Wear your SoCal MIST ID badge at all times!</li>
              <li>Park in Lot F, right across from Mihaylo Hall</li>
            </ul>
          </Col>
          <Col md={6} className="text-center">
            <img 
              src={image} 
              alt="Map" 
              className="img-fluid ti-checklist-image"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Checklist;
