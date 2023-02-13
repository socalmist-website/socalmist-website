import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { PageSubTitle } from "../Header/PageSubTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./SpiritPage.css";

class SpiritPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Spirit" />
        <PageSubTitle pageSubTitle="How many points do you have!?" />
        <Container>
          {/* <Row className="justify-content-sm-center" >
            <Col sm="7">
              <p>SoCal MIST is committed to recruiting motivated volunteers who are dedicated to making MIST a successful event!</p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center" >
            <Col sm="7">
              <h5>Qualifications</h5>
              <ul>
                <li>
                  <p>18 years or older</p>
                </li>
                <li>
                  <p>Demonstrate a high level of motivation, maturity, and leadership</p>
                </li>
              </ul>
            </Col>
          </Row> */}
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder" style={{ paddingLeft: "4.5em", paddingRight: "2em" }}>
              <iframe
                title="sponsorForm"
                style={{ width: "100%", display: "block", "margin-left": "auto", "margin-right": "auto" }}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFMIF1DPYYqKaMWUrxzcDiy-wocdC8rDRvLmSnujpcsTTaPm-h0k4AtHFCj3G6jtprQmiBQLze1tde/pubchart?oid=6343663&format=interactive"
                width="640"
                height="620"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
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
                For more questions about volunteering, please contact us at
                socal@getmistified.com.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { SpiritPage };
