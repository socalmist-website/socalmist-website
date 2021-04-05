import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { PageSubTitle } from "../Header/PageSubTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./SponsorPage.css";

class SponsorPage extends React.Component {
  render() {
    const irlogo = require("../../public/ir-logo.png");
    const mpaclogo = require("../../public/mpac-logo.png");
    const ysslogo = require("../../public/yss-logo.png");
    const ciulogo = require("../../public/ciu-logo.jpg");

    return (
      <div>
        <Header />
        <PageTitle pageTitle="Sponsor MIST" />
        <PageSubTitle pageSubTitle="Interested in sponsoring MIST?" />

        <Container fluid={true}>
          <Row className="justify-content-sm-center">
            <Col sm="7" style={{ "text-align": "center" }}>
              <p>
                SoCal MIST offers the unique opportunity to highlight your
                organization to a diverse audience of Muslim community members
                including community leaders, parents, young professionals, and
                most importantly - the YOUTH.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col
              sm="7"
              style={{
                "text-align": "center",
                "font-weight": "bold",
                "margin-bottom": "2em",
              }}
            >
              <p>
                If you would like to view our sponsorship package, please email
                us at socal@getmistified.com.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={4} className="centerAlign">
              <h3>Proudly Sponsored By:</h3>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={2} className="logoHolder2">
              <img alt="Cair LA Logo" src={ciulogo} height="50px" />
            </Col>
            <Col md={2} className="logoHolder">
              <img alt="MPAC Logo" src={mpaclogo} height="100px" />
            </Col>
            <Col md={2} className="logoHolder">
              <img alt="YSS Logo" src={ysslogo} height="100px" />
            </Col>
            <Col md={2} className="logoHolder">
              <img alt="Islamic Relief Logo" src={irlogo} height="100px" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { SponsorPage };
