import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { PageSubTitle } from "../Header/PageSubTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./MISTree.css";

class MISTree extends React.Component {
  render() {
    let buttons = (
      <Container fluid={true}>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} style={{ "text-align": "center" }}>
            <a className="buttonLink" href="https://bit.ly/22-23bullyingsurvey">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>CAIR LA Survey</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} style={{ "text-align": "center" }}>
            <a className="buttonLink" href="https://my.getmistified.com/">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>Register for SoCal MIST</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          {/* <Col lg={3} className="centerAlign">
            <a className="buttonLink" href="/winners">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>2021 Winners</b>
                </span>
              </div>
            </a>
          </Col> */}
          {/* <Col lg={3} className="centerAlign">
            <a className="buttonLink" href="/schedule">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>Program</b>
                </span>
              </div>
            </a>
          </Col> */}
          <Col lg={3} className="centerAlign">
            <a className="buttonLink" href="https://tinyurl.com/socalmistjudges2023">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>Judge Application</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} className="centerAlign">
            <a className="buttonLink" href="https://tinyurl.com/MISTVolunteerApplication">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>Volunteer Application</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          <p>


          </p>
        </Row>
      </Container>
    );


    return (
      <div>
        <Header />
        <PageTitle pageTitle="MISTree" />
        {buttons}
      </div>

    );
  }
}

export { MISTree };