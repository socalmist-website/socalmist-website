import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageSubTitle } from "../Header/PageSubTitle";
import { PageTitle } from "../Header/PageTitle";
import "./VolunteerPage.css";

class VolunteerPage extends React.Component {
  render() {
    return (
      <div className="volunteer-page">
        <Header />
        <PageTitle pageTitle="Volunteer" />
        <Container className="volunteer-container">
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe
                title="sponsorForm"
                style={{ width: "100%" }}
                src="https://tinyurl.com/SoCalMIST2025Volunteer"
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
