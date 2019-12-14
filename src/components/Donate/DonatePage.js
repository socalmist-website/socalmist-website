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
               <iframe id="JotFormIFrame-83484228011149" title="Donation" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" height="500" allow="geolocation; microphone; camera" src="https://form.jotform.com/83484228011149" frameborder="0" style={{"min-width": "100%"}} > </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { DonatePage };