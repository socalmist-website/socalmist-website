import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import {Container, Row, Col, Image} from 'react-bootstrap';
import "./AmbassadorsPage.css";

class AmbassadorsPage extends React.Component {

  render() {
    const image = require("../../public/ambassadors.png");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="MIST Ambassadors" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col sm={8}>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={7} className="textHolder">
              <p>The purpose of the ambassadors program is to recruit students from each participating team to represent MIST at their high schools and their communities. Ambassadors gain skills in leadership, public speaking, communication, while picking up spirit points for their teams along the way!</p>
              <p>MIST Ambassadors will be expected to lead their MIST teams, recruit new members to their team, and serve as the liaison between MIST board and their team. For every new team member or school recruited, Ambassadors earn spirit points for their team!</p>
              <p>MIST Ambassadors will have the opportunity to meet community members, speak at Masjid events, and be in direct communication with the MIST board. Being a MIST Ambassador serves as the stepping stone to join MIST E-Board!</p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={7} className="ambassadorInterestText">
              <h4>Interested in becoming a MIST Ambassador?</h4>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe title="sponsorForm" style={{"width":"100%"}} src="https://docs.google.com/forms/d/e/1FAIpQLSc1mACGxzcC6Me92OD95X3G5igaFhnGNrbDbvUV-E-wEVhiyg/viewform?embedded=true" width="640" height="2500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export { AmbassadorsPage };