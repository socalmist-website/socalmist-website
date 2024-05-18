import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './Description.css'; // Create and import a CSS file for custom styles

class Description extends React.Component {
  render() {
    const image = require("../../../public/ti/ti-desc.png");
    return (
      <Container fluid className="my-4 ti-desc-container">
        <h2 className="text-center mb-4">2024 Tournament Info</h2>
        <Row className="align-items-center ti-desc-row">
          <Col md={6} className="text-center">
            <img 
              src={image} 
              alt="MIST Tournament" 
              className="img-fluid ti-desc-image"
            />
          </Col>
          <Col md={6}>
            <div className="ti-desc-info-text">
              <h3 className="ti-desc-info-header">Everything You Need this Weekend</h3>
              <div className="ti-desc-button-group">
                <Button variant="warning" className="my-2 mx-2 ti-desc-button">getMISTIFIED app</Button>
                <Button variant="warning" className="my-2 mx-2 ti-desc-button">CSUF General Waiver</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Description;
