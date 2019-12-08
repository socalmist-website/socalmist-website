import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import './DonatePage.css';

class DonatePage extends React.Component {

  render() {
    const donationBanner = require("../../public/donation-banner.png");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Donate" />
        <Container>
          <Row className="justify-content-sm-center">
            <Col className="donationBanner">
              <Image src={donationBanner} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col className="donationBanner">
              <Button href="https://www.launchgood.com/project/support_socal_mist_to_empower_muslim_youth#!/" target="_blank" className="donateButton">Donate via LaunchGood</Button>
            </Col>
          </Row>
          <Row className="justify=content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe title="sponsorForm" src="https://docs.google.com/forms/d/e/1FAIpQLScmjOOWbMto-ivNEDedzm7SkJI0brWDGmSUogyQcU8275n8yQ/viewform?embedded=true" width="640" height="1111" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { DonatePage };