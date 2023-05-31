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
            <a className="buttonLink" href="https://socalmist.com/winners">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>Winners</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} style={{ "text-align": "center" }}>
            <a className="buttonLink" href="https://docs.google.com/forms/d/e/1FAIpQLSf4AYcyvG624mBBzLY6a6iMZzBComdx6bq6J6EdHHsRTwPKag/viewform">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>MIST Feedback Form</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} style={{ "text-align": "center" }}>
            <a className="buttonLink" href="https://www.youtube.com/watch?v=Xl8IvNkes0Q">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>2023 Highlight Video</b>
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
            <a className="buttonLink" href="https://photos.app.goo.gl/CwDGLHrmpHzfD6LCA">
              <div className="buttonDivTree">
                <span className="buttonText">
                  <b>2023 Photos</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} className="centerAlign">
            <a className="buttonLink" href="https://my.getmistified.com/">
              <div className="buttonDivTree">
                <span className="buttonTextTree">
                  <b>Register For Nationals</b>
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