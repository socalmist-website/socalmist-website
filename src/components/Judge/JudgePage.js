import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageSubTitle } from "../Header/PageSubTitle";
import { PageTitle } from "../Header/PageTitle";
import "./JudgePage.css";

class JudgePage extends React.Component {
  render() {
    return (
      <div className="judge-page">
        <Header />
        <PageTitle pageTitle="Judge" />
        {/* <PageSubTitle pageSubTitle="Judge applications are not currently open, please check back in the winter for more information!" /> */}
        <Container>
          {/* <Row className="justify-content-sm-center">
            <Col sm="7">
              <p>
                SoCal MIST is committed to recruiting qualified judges who are
                professionals in the field of each competition.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm="7">
              <h5>Qualifications</h5>
              <ul>
                <li>
                  <p>21 years or older</p>
                </li>
                <li>
                  <p>College graduates preferred</p>
                  <ul>
                    <li>
                      <p>College undergrads: Must be 3rd year or above</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row> */}
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe
                title="judge"
                style={{ width: "65%" }}
                src="https://forms.gle/n95ZiHtwcDP6RAjG6"
                height="2993"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { JudgePage };
