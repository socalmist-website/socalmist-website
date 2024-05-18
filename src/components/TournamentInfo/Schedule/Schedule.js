import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Schedule.css'; // Create and import a CSS file for custom styles

class Schedule extends React.Component {
  render() {
    return (
      <Container className="my-4 ti-schedule-container">
        <Row>
          <Col>
            <h2 className="ti-schedule-title">Schedule</h2>
            <p className="ti-schedule-subtitle">Detailed schedule is on the getMISTIFIED app!</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5} className="text-center ti-schedule-day">
            <div className="ti-schedule-card">
              <p>Knowledge & Quran, Brackets Round 1 & 2, and Writing & Oratory</p>
              <p>Muhsen Accessibility Workshop and Quran in Context MISTChat</p>
              <strong>Day 1</strong>
            </div>
          </Col>
          <Col md={5} className="text-center ti-schedule-day">
            <div className="ti-schedule-card">
              <p>Group Projects and Arts</p>
              <p>College Prep Panel, Tasbeeh Making Workshop, and Global Injustices: Being a Changemaker MISTChat</p>
              <strong>Day 2</strong>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Schedule;
