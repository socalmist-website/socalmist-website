import React, { Component } from "react";
import "./Banner.css";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col } from "react-bootstrap";
import windowSize from "react-window-size";
import { Link } from "react-router-dom";

class Banner extends Component {
  componentDidMount() {
    if (this.props.windowWidth < 576) {
      document
        .getElementById("backgroundPicture")
        .setAttribute("style", "height:740px");
    }
  }

  render() {
    let buttons = (
      <Container fluid={true}>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} style={{ "text-align": "center" }}>
            <Link className="buttonLink" to="/about">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>About MIST</b>
                </span>
              </div>
            </Link>
          </Col>
          <Col lg={3} style={{ "text-align": "center" }}>
            <Link
              className="buttonLink"
              to="https://docs.google.com/forms/d/e/1FAIpQLScoQbcFM2NCUyLS6Gn9t0N88i64ar7cTCey7UMf-TihdZd-dA/viewform"
            >
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>Competitor Spotlight</b>
                </span>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-sm-center buttonRow">
          <Col lg={3} className="centerAlign">
            <Link className="buttonLink" to="/theme">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>Theme</b>
                </span>
              </div>
            </Link>
          </Col>
          <Col lg={3} className="centerAlign">
            <Link className="buttonLink" to="/donate">
              <div className="buttonDiv">
                <span className="buttonText">
                  <b>Donate</b>
                </span>
              </div>
            </Link>
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
        </Row>
      </Container>
    );
    let mainTitle = (
      <div className="bannerInfoHolder">
        <div className="bannerContainer">
          <h1 className="bannerText">SoCal MIST 2024</h1>
          <h2 className="bannerTextSmaller">May 18 & 19th</h2>
        </div>
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
          </Row>
        </Container>
      );
      buttons = (
        <Container className="smallIconContainer">
          <Row>
            <Col xs={3} className="centerAlignIcons"></Col>
            <Col xs={7} className="centerAlignIcons">
              <Link className="buttonLink" to="/about">
                <div className="buttonDivMobile">
                  <span className="buttonText smallerButtonText">
                    <b>About MIST</b>
                  </span>
                </div>
              </Link>
            </Col>
            <Col xs={3} className="centerAlignIcons"></Col>
            <Col xs={7} className="centerAlignIcons">
              <Link
                className="buttonLink"
                to="https://docs.google.com/forms/d/e/1FAIpQLScoQbcFM2NCUyLS6Gn9t0N88i64ar7cTCey7UMf-TihdZd-dA/viewform"
              >
                <div className="buttonDivMobile">
                  <span className="buttonText smallerButtonText">
                    <b>Competitor Spotlight</b>
                  </span>
                </div>
              </Link>
            </Col>
            <Col xs={3} className="centerAlignIcons"></Col>
            <Col xs={7} className="centerAlignIcons">
              <Link className="buttonLink" to="/theme">
                <div className="buttonDivMobile">
                  <span className="buttonText smallerButtonText">
                    <b>Theme</b>
                  </span>
                </div>
              </Link>
            </Col>
            <Col xs={3} className="centerAlignIcons"></Col>
            <Col xs={7} className="centerAlignIcons">
              <Link className="buttonLink" to="/donate">
                <div className="buttonDivMobile">
                  <span className="buttonText smallerButtonText">
                    <b>Donate</b>
                  </span>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      );
      mainTitle = (
        <div className="bannerInfoHolder">
          <div className="bannerContainer">
            <h1 className="bannerTextSmall">SoCal MIST</h1>
            <h1 className="bannerTextSmaller">May 20th - 21st</h1>
          </div>
        </div>
      );
    }

    return (
      <div id="backgroundPicture">
        {mainTitle}
        {buttons}
        {/* {icons} */}
      </div>
    );
  }
}

export default windowSize(Banner);
