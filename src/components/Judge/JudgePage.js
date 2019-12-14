import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import { PageSubTitle } from '../Header/PageSubTitle';
import { Container, Row, Col } from 'react-bootstrap';
import './JudgePage.css';

class JudgePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Judge" />
        <PageSubTitle pageSubTitle="Interested in judging at MIST?" />
        <Container>
          <Row className="justify-content-sm-center" >
            <Col sm="7">
              <p>SoCal MIST is committed to recruiting qualified judges who are professionals in the field of each competition.</p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center" >
            <Col sm="7">
              <h5>Qualifications</h5>
              <ul>
                <li>
                  <p>21 years or older</p>
                </li>
                <li>
                  <p>College graduates preferred</p>
                  <ul>
                    <li><p>College undergrads: Must be 3rd year or above</p></li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe title="judge" src="https://docs.google.com/forms/d/e/1FAIpQLScsax4jc0niEm2eYidxej-4S47oYgL2NjvMVhjbkG1kAthXkA/viewform?embedded=true" width="640" height="2993" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { JudgePage };