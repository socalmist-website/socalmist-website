import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';

class FinancialAidPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Financial Aid" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe title="sponsorForm" style={{"width":"100%"}} src="https://docs.google.com/forms/d/1RT-PuNfRqdDm9EQsPy8_1qdm0nqu1Mf0OXwU-QZDk4w/viewform?embedded=true" width="640" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export { FinancialAidPage };
