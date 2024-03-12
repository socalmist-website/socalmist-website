import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
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
            <Col sm={7} className="donationBanner">
              <Image style={{"width":"100%"}} src={donationBanner} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            {/* <Col className="donationBanner">
              <Button href="https://www.launchgood.com/project/support_socal_mist_to_empower_muslim_youth#!/" target="_blank" className="donateButton">Donate via LaunchGood</Button>
            </Col> */}
          </Row>
          <Row className="justify=content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe id="JotFormIFrame-83484228011149" title="Donation" frameborder="0" marginheight="0" marginwidth="0" style={{"width":"100%","height":"500px"}} src="https://form.jotform.com/83484228011149"> </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { DonatePage };
