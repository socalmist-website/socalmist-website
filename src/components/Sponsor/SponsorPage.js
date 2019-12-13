import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import { PageSubTitle } from '../Header/PageSubTitle';
import {Container, Row, Col} from 'react-bootstrap';
import './SponsorPage.css';

class SponsorPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Sponsor MIST" />
        <PageSubTitle pageSubTitle="Interested in sponsoring MIST?" />
      
        <Container>
          <Row className="justify-content-sm-center">
            <Col sm="7" style={{"text-align": "center"}}>
              <p>
                SoCal MIST offers the unique opportunity to highlight your organization to a diverse 
                audience of Muslim community members including community leaders, parents, young professionals, 
                and most importantly - the YOUTH.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm="7" style={{"text-align": "center", "font-weight":"bold", "margin-top":"1em"}}>
              <p>
                If you are interested in sponsoring MIST, please complete our interest form:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe title="sponsorForm" src="https://docs.google.com/forms/d/e/1FAIpQLScmjOOWbMto-ivNEDedzm7SkJI0brWDGmSUogyQcU8275n8yQ/viewform?embedded=true" width="640" height="1111" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm="7" style={{"text-align": "center", "font-weight":"bold", "margin-bottom":"2em"}}>
              <p>
                If you would like to view our sponsorship package, please email us at socal@getmistified.com.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { SponsorPage };