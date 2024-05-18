import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Professionals.css'; // Create and import a CSS file for custom styles

class Professionals extends React.Component {
  render() {
    return (
      <Container className="my-4 ti-professionals-container">
        <Row>
          <Col>
            <h2 className="ti-professionals-title">Meeting the Professionals | College Prep Panel</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="text-center ti-professionals-item">
            <img src={require("../../../public/ti/professional-hasan.png")} alt="Hasan Elquosey" className="img-fluid ti-professionals-image" />
            <h3>Hasan Elquosey</h3>
            <p>Senior in Mechanical Engineering at UC Irvine</p>
          </Col>
          <Col xs={12} md={4} className="text-center ti-professionals-item">
            <img src={require("../../../public/ti/professional-siraj.png")} alt="Siraj Bajwa" className="img-fluid ti-professionals-image" />
            <h3>Siraj Bajwa</h3>
            <p>Sophomore in Junior Literary Journalism & Pre-Law student at UC Irvine</p>
          </Col>
          <Col xs={12} md={4} className="text-center ti-professionals-item">
            <img src={require("../../../public/ti/professional-saher.png")} alt="Saher Safiri" className="img-fluid ti-professionals-image" />
            <h3>Saher Safiri</h3>
            <p>UC Irvine Alumna</p>
          </Col>
          <Col xs={12} md={4} className="text-center ti-professionals-item">
            <img src={require("../../../public/ti/professional-yasmeen.png")} alt="Yasmeen Dibas" className="img-fluid ti-professionals-image" />
            <h3>Yasmeen Dibas</h3>
            <p>Transfer Student in Civil & Environmental Engineering at CSU Fullerton</p>
          </Col>
          <Col xs={12} md={4} className="text-center ti-professionals-item">
            <img src={require("../../../public/ti/professional-abdallah.png")} alt="Abdallah Shaikh" className="img-fluid ti-professionals-image" />
            <h3>Abdallah Shaikh</h3>
            <p>Operations and Supply Chain Management major at CSU Long Beach</p>
          </Col>
          <Col xs={12} md={4} className="text-center ti-professionals-item">
            <img src={require("../../../public/ti/professional-usman.png")} alt="Usman Asim" className="img-fluid ti-professionals-image" />
            <h3>Usman Asim</h3>
            <p>UC San Diego Alumnus</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Professionals;
