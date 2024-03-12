import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div id="backgroundPicture">
        <div className="bannerInfoHolder">
          <div className="bannerContainer">
            <h1 className="bannerText">SoCal MIST 2024</h1>
            <h2 className="bannerTextSmaller">
              May 18 & 19th @ Cal State Fullerton
            </h2>
          </div>
        </div>
        <Container fluid className="buttonContainer">
          <Row className="justify-content-center">
            {this.renderButton("/about", "About MIST")}
            {this.renderButton(
              "https://docs.google.com/forms/d/e/1FAIpQLScoQbcFM2NCUyLS6Gn9t0N88i64ar7cTCey7UMf-TihdZd-dA/viewform",
              "Competitor Spotlight"
            )}
            {this.renderButton("/theme", "Theme")}
            {this.renderButton("/donate", "Donate")}
          </Row>
        </Container>
      </div>
    );
  }

  renderButton(link, text) {
    if (link.startsWith("http")) {
      return (
        <Col xs={12} sm={6} md={4} lg={3} className="buttonCol">
          <a className="buttonLink" href={link} target="_blank">
            <div className="buttonDiv">
              <span className="buttonText">{text}</span>
            </div>
          </a>
        </Col>
      );
    } else {
      return (
        <Col xs={12} sm={6} md={4} lg={3} className="buttonCol">
          <Link
            className="buttonLink"
            to={link}
            target={link.startsWith("http") ? "_blank" : "_self"}
          >
            <div className="buttonDiv">
              <span className="buttonText">{text}</span>
            </div>
          </Link>
        </Col>
      );
    }
  }
}

export default Banner;
