import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import './StatusPage.css';

class StatusPage extends React.Component {

  render() {
    const img = require("../../public/Official Logo.PNG");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Status" />
        <Container>
          <Row className="justify-content-sm-center" >
            <Col sm="2" style={{ "text-align": "center", "margin-top": "2em" }}>
              <img src={img} alt="Logo" width="100%" />
            </Col>
          </Row>
          <Row className="justify-content-sm-center" >
            <Col sm="7" style={{ "margin-top": "2em" }}>
              <p>Assalaamu 'Alaikum,</p>
              <p>We pray this message finds you and your families in the best of health. We understand many of you are concerned about the SoCal MIST tournament in light of COVID-19. We want to stress that our #1 priority is the health and safety of our competitors, volunteers, board, judges, and all other guests.</p>
              <p><b>In light of the current circumstances, we have decided to postpone SoCal MIST 2020.</b> We are actively developing plans to reschedule the tournament to a later date post-Ramadan, InshaAllah. We will keep you up to date on all details over the coming weeks.</p>
              <p>If you have any questions or concerns, please reach out to us at socal@getmistified.com or DM us on our social media pages.</p>
              <p>Sincerely,<br />
              SoCal MIST Executive Board</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { StatusPage };
