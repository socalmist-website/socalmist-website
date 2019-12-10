import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./AboutPage.css";
import { Container, Row, Col, Image } from "react-bootstrap";

class AboutPage extends React.Component {

  render() {
    const image = require("../../public/aboutfiller.png");
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
            <Col sm={12} className="textholder">
              <p>Put stuff about mist: Florida's intro for example:</p>
              <p>
                ​Our mission is to bring high school students together to
                develop leadership, promote communication, and inspire
                creativity while gaining a deeper understanding of Islam and
                Muslims. We do this through our annual regional and national
                tournaments. MIST was founded in 2002 by a teenage girl in
                Houston, Texas and now takes place in 15 regions across North
                America. And though our name and heritage are proudly Muslim, we
                serve as an outlet for all high school students, regardless of
                religion or faith!
              </p>
            </Col>
          </Row>
          <hr></hr>
          <Row className="section">
            <Col sm={6}>
              <h3>Develop Confidence and Professionalism</h3>
              <p>
                Paragraph about develop confidence and professionalism
                Paragraph about develop confidence and professionalism
                Paragraph about develop confidence and professionalism
                Paragraph about develop confidence and professionalism
                Paragraph about develop confidence and professionalism
                Paragraph about develop confidence and professionalism
              </p>
            </Col>
            <Col sm={6}>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
          <hr></hr>
          <Row className="section">
            <Col sm={6}>
              <Image fluid={true} src={image} />
            </Col>
            <Col sm={6}>
              <h3>Learn Strategies to Deal with Stereotypes</h3>
              <p>
                Paragraph about learn strategies to deal with stereotypes
                Paragraph about learn strategies to deal with stereotypes
                Paragraph about learn strategies to deal with stereotypes
                Paragraph about learn strategies to deal with stereotypes
                Paragraph about learn strategies to deal with stereotypes
                Paragraph about learn strategies to deal with stereotypes
                Paragraph about learn strategies to deal with stereotypes
              </p>
            </Col>
          </Row>
          <hr></hr>
          <Row className="section">
            <Col sm={6}>
              <h3>Express Thoughts, Feelings, and Ideas</h3>
              <p>
                Paragraph about express thoughts, feelings, and ideas
                Paragraph about express thoughts, feelings, and ideas
                Paragraph about express thoughts, feelings, and ideas
                Paragraph about express thoughts, feelings, and ideas
                Paragraph about express thoughts, feelings, and ideas
                Paragraph about express thoughts, feelings, and ideas
              </p>
            </Col>
            <Col sm={6}>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
          <hr></hr>
          <Row className="section">
            <Col sm={6}>
              <Image fluid={true} src={image} />
            </Col>
            <Col sm={6}>
              
              <h3>Meet and Network</h3>
              <p>
                Paragraph about meet and network
                Paragraph about meet and network
                Paragraph about meet and network
                Paragraph about meet and network
                Paragraph about meet and network
                Paragraph about meet and network
                Paragraph about meet and network
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { AboutPage };
