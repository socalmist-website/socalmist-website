import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./RegisterPage.css";
import { Container, Row, Col, Image } from "react-bootstrap";

class RegisterPage extends React.Component {
  styles = {
    fontWeight: "bold"
  };
  render() {
    const image = require("../../public/ambassadors.jpg");

    return (
      <div>
        <Header />
        <PageTitle pageTitle="Registration Steps" />
        <Container id="registrationContainer">
          <Row className="justify-content-sm-center">
            <Col sm={7}>
              <h2>Step 1</h2>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={7}>
              <h2>Step 2</h2>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { RegisterPage };
