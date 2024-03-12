import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";

class SchedulePage extends React.Component {
  render() {
    const image = require("../../public/schedule-picture.png");
    const image2 = require("../../public/esports-schedule.png");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Schedule" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col sm={6}>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={6}>
              <Image fluid={true} src={image2} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { SchedulePage };
