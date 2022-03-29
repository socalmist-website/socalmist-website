import React, { Component } from "react";
import "./Banner.css";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import windowSize from "react-window-size";

class Banner extends Component {
  componentDidMount() {
    if (this.props.windowWidth < 576) {
      document
        .getElementById("backgroundPicture")
        .setAttribute("style", "height:740px");
    }
  }

  render() {
    // const appstoreImage = require("../../public/appstore.png");
    // const playstoreImage = require("../../public/playstore.png");
    let buttons = (
      <Container fluid={true}>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} style={{ "text-align": "center" }}>
            <a className="buttonLink" href="/about">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>About MIST</b>
                </span>
              </div>
            </a>
          </Col>
          <Col lg={3} style={{ "text-align": "center" }}>
            <a className="buttonLink" href="/winners">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>Winners</b>
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
            <a className="buttonLink" href="/theme">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>Theme</b>
                </span>
              </div>
            </a>
          </Col>
          <Col lg={3} className="centerAlign">
            <a className="buttonLink" href="/donate">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>Donate</b>
                </span>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    );
    let icons = (
      <Container className="iconContainer">
        <Row>
          <Col sm={4} className="leftIconBlock">
            <SocialIcon
              target="_blank"
              className="socialMediaIcon"
              url="https://www.facebook.com/SoCalMIST/"
            />
            <SocialIcon
              target="_blank"
              className="socialMediaIcon"
              url="https://www.instagram.com/socalmist/"
            />
          </Col>
          <Col sm={4} style={{ "text-align": "center" }}></Col>
          {/* <Col sm={4} className="rightIconBlock">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/us/app/get-mistified/id1341732029"
            >
              <img
                className="appImage"
                alt="Apple App Store"
                src={appstoreImage}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.squarespace.getmistified"
            >
              <img
                className="appImage"
                alt="Google Play Store"
                src={playstoreImage}
              />
            </a>
          </Col> */}
        </Row>
      </Container>
    );
    let mainTitle = (
      <div className="bannerInfoHolder">
        <h1 className="bannerText">SoCal MIST</h1>
        <h2 className="bannerTextSmaller">
          March 18-20 at Cal State Fullerton
        </h2>
      </div>
    );

    if (this.props.windowWidth < 992) {
      icons = (
        <Container className="smallIconContainer">
          <Row>
            <Col xs={12} className="centerAlign">
              <SocialIcon
                className="socialMediaIcon"
                url="https://www.facebook.com/SoCalMIST/"
              />
              <SocialIcon
                className="socialMediaIcon"
                url="https://www.instagram.com/socalmist/"
              />
            </Col>
            {/* <Col xs={12} className="centerAlignIcons">
              <a href="https://apps.apple.com/us/app/get-mistified/id1341732029">
                <img
                  className="appImage"
                  alt="Apple App Store"
                  src={appstoreImage}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.squarespace.getmistified">
                <img
                  className="appImage"
                  alt="Google Play Store"
                  src={playstoreImage}
                />
              </a>
            </Col> */}
          </Row>
        </Container>
      );
      buttons = (
        <Container className="smallIconContainer">
          <Row>
            <Col xs={3} className="centerAlignIcons"></Col>
            <Col xs={7} className="centerAlignIcons">
              <a className="buttonLink" href="/about">
                <div className="buttonDiv">
                  <span className="buttonText">
                    <b>About MIST</b>
                  </span>
                </div>
              </a>
            </Col>
            <Col xs={3} className="centerAlignIcons"></Col>
            <Col xs={7} className="centerAlignIcons">
              <a
                className="buttonLink"
                href="https://docs.google.com/forms/d/1M7iyi4tL9WI4nfo7mC4ZKYmKxrDsjpGnwyglmcKxf3I/edit?fbclid=IwAR1UCVIzu67NRl3q1DWIgLXCM3lEnK1K8f2y30mxPHydgW1lq3bXUkdPwNc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="buttonDiv">
                  <span className="buttonText">
                    <b>Mailing List</b>
                  </span>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      );
      mainTitle = (
        <div className="bannerInfoHolder">
          <h1 className="bannerTextSmall">SoCal MIST</h1>
        </div>
      );
    }

    return (
      <div id="backgroundPicture">
        {mainTitle}
        {buttons}
        {icons}
      </div>
    );
  }
}

export default windowSize(Banner);
