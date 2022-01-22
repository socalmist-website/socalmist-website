import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { PageSubTitle } from "../Header/PageSubTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./VolunteerPage.css";

class VolunteerPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Volunteer" />
        <PageSubTitle pageSubTitle="Interested in volunteering at MIST?" />
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
            <Col className="sponsorFormHolder">
              <iframe
                title="sponsorForm"
                style={{ width: "100%" }}
                src="https://docs.google.com/forms/d/e/1FAIpQLSe3C_ldPPnsVxbKUjx0nylSp25IrQPlzP0_ZK5ESeLpZyO6Cg/viewform?embedded=true"
                width="640"
                height="2930"
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

export { VolunteerPage };
