import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./AboutPage.css";
import { Container, Row, Col, Image } from "react-bootstrap";

class AboutPage extends React.Component {

  render() {
    const image = require("../../public/about-image.jpg");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="About MIST" />
        <Container>
          <Row className="justify-content-sm-center">
            <Col sm={12} className="titleHolder">
              <h2>MIST = Muslim Inter-Scholastic Tournament</h2>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={12} className="aboutMission">
              <h5>
                Our mission is to bring high school students together to develop leadership, 
                promote communication, and inspire creativity while gaining a deeper understanding of Islam and Muslims.
              </h5>
            </Col>
          </Row>
          <hr></hr>
          <Row className="section">
            <Col sm={6}>
              <h3>What We Offer</h3>
              <p>
                SoCal MIST is a highly-anticipated and empowering program of competitions and workshops 
                which brings together Muslim high school youth from across the Southern California region 
                to compete in a friendly tournament and showcase their talents. The program offers a large 
                variety of competitions such as Qur’an Memorization, Quiz Bowl, Debate, Math Olympics, 
                Basketball, Spoken Word, Photography, and much, much more! With such a large variety of 
                competitions offered, there is a place at MIST for all talents to shine.
              </p>
            </Col>
            <Col sm={6}>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { AboutPage };
