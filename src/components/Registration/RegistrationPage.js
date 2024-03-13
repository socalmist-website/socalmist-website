import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./RegistrationPage.css";

class RegistrationPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Registration" />
        <Row className="justify-content-sm-center">
          <Col sm={8} md={6} lg={4} className="my-4">
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>How Registration Works</Card.Title>
                <Card.Text>
                  Registration for SoCal MIST is open to all high school
                  students, including those from schools, independent
                  competitors, and guests. We offer both online and on-site
                  registration options. Our outreach and registration committee
                  is available to assist with the process and answer any
                  questions.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="custom-card mt-3">
              <Card.Body>
                <Card.Title>Pricing</Card.Title>
                <Card.Text>
                  <Table responsive="sm" className="pricing-table">
                    <thead>
                      <tr>
                        <th>Registration Period</th>
                        <th>Competitor Price</th>
                        <th>Guest Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="current-reg-phase">
                        <td>Early Registration</td>
                        <td>$35</td>
                        <td>$35</td>
                      </tr>
                      <tr>
                        <td>Regular Registration</td>
                        <td>
                          {/* Competitor price will be added here later */}
                        </td>
                        <td>{/* Guest price will be added here later */}</td>
                      </tr>
                      <tr>
                        <td>Late Registration</td>
                        <td>
                          {/* Competitor price will be added here later */}
                        </td>
                        <td>{/* Guest price will be added here later */}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col sm={8} md={6}>
            <h2 className="text-center my-4">How to Register</h2>
            <div className="video-responsive">
              <iframe
                src="https://www.youtube.com/embed/DvZVUkiqECI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center my-4">
              <Button
                variant="none"
                size="lg"
                href="https://my.getmistified.com/"
                target="_blank"
                className="reg-buttonDiv"
              >
                <b>Register Now!</b>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export { RegistrationPage };
