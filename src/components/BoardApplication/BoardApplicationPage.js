import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./BoardApplication.css";
import "../../index.css"

class BoardApplicationPage extends React.Component {
  render() {
    return (
      <div className="board-application-page">
        <Header />
        <PageTitle pageTitle="E-Board Application" />
        <Container className="board-application-container">
          <Row className="justify-content-sm-center mt-5"><a href="https://tinyurl.com/socalmist2024descriptions" className="mist-button" target="_blank">Available Positions</a></Row>
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe
                title="eboardForm"
                style={{ width: "100%" }}
                src="https://forms.gle/bA3eg9kuD6oMYFQD7"
                width="640"
                height="2930"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col
              sm="7"
              style={{
                "text-align": "center",
                "font-weight": "bold",
                "margin-bottom": "2em",
              }}
            >
              <p>
                For more questions about the E-Board, please contact us at
                socal@getmistified.com.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { BoardApplicationPage };
