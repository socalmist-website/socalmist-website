import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import "./RulebookPage.css";

class RulebookPage extends React.Component {
  render() {
    // const img = require("../../public/rulebook-banner.png");
    const pdf = require("./RulebookSupplement.pdf");

    return (
      <div>
        <Header />
        <PageTitle pageTitle="Rulebook Supplement" />
        <Container>
          {/* <Row className="justify-content-sm-center bannerHolder">
            <Col sm={6}>
              <Image fluid={true} src={img} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Button id="rulebookButton" target="_blank" href="https://www.getmistified.com/news/2020/1/13/2020-competitions-rulebook">
              Rulebook
            </Button>
          </Row> */}

          <Row className="justify-content-sm-center">
            <Col sm={8} style={{ "text-align": "center", "margin-top": "1.2em" }}>
              <h5>
                <a href = "https://drive.google.com/file/d/1XHGywa7zKCtmBO_Sg0LYKzAtUOZFrezi/view?usp=sharing">Click Here to Download!</a>
              </h5>
            </Col>
          </Row>

          <Row
            style={{ "margin-top": "3em", "margin-bottom": "3em" }}
            className="justify-content-sm-center"
          >
            <Col sm={8}>
              <iframe
                title="registrationPdf"
                src={pdf}
                width="100%"
                height="950"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { RulebookPage };
