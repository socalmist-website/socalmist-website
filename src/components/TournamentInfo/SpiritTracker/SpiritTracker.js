import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SpiritTracker.css"; // Create and import a CSS file for custom styles

class SpiritTracker extends React.Component {
  render() {
    return (
      <Container className="my-4 ti-spirit-container">
        <Row>
          <Col>
            <h2 className="ti-spirit-title">Spirit Points Tracker</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="text-center">
            <iframe
              title="Spirit Points Tracker"
              className="ti-spirit-iframe"
              width="705"
              height="389"
              seamless
              scrolling="no"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFMIF1DPYYqKaMWUrxzcDiy-wocdC8rDRvLmSnujpcsTTaPm-h0k4AtHFCj3G6jtprQmiBQLze1tde/pubchart?oid=6343663&amp;format=interactive"
            ></iframe>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SpiritTracker;
