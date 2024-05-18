import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Workshop.css'; // Create and import a CSS file for custom styles

class Workshop extends React.Component {
  render() {
    return (
      <Container className="my-4 ti-workshop-container">
        <Row>
          <Col>
            <h2 className="ti-workshop-title">Workshops & MISTChats</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center ti-workshop-item">
            <img src={require("../../../public/ti/workshop-muhsen.png")} alt="Muhsen Workshop" className="img-fluid ti-workshop-image" />
            <h3>Muhsen Accessibility Workshop</h3>
            <p>Muhsen Representative</p>
          </Col>
          <Col className="text-center ti-workshop-item">
            <img src={require("../../../public/ti/workshop-quran.png")} alt="Quran in Context" className="img-fluid ti-workshop-image" />
            <h3>Quran in Context</h3>
            <p>Dr. Omar Ezzeldine</p>
          </Col>
          <Col className="text-center ti-workshop-item">
            <img src={require("../../../public/ti/workshop-tasbeeh.png")} alt="Tasbeeh Making Workshop" className="img-fluid ti-workshop-image" />
            <h3>Tasbeeh Making Workshop</h3>
            <p>Sheikha Ayesha Hussain</p>
          </Col>
          <Col className="text-center ti-workshop-item">
            <img src={require("../../../public/ti/workshop-global.png")} alt="Global Injustices" className="img-fluid ti-workshop-image" />
            <h3>Global Injustices: Being a Changemaker</h3>
            <p>Sheikh Furhan Zubairi</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Workshop;
