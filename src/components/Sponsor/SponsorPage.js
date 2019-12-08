import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import {Container, Row, Col} from 'react-bootstrap';
import './SponsorPage.css';

class SponsorPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Sponsor" />
        <Container>
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

export { SponsorPage };