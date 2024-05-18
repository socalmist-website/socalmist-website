import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './SpiritTracker.css'; // Create and import a CSS file for custom styles

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
              src="https://docs.google.com/spreadsheets/d/1LKkNTjrlhuyaeQCLUtg51AX5-54B7b4cUkICo4NSRNk/edit#gid=1330700691/pubhtml?widget=true&headers=false" 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="Spirit Points Tracker"
              className="ti-spirit-iframe"
            ></iframe>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SpiritTracker;
