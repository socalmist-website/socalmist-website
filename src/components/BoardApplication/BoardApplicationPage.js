import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import { PageSubTitle } from '../Header/PageSubTitle';
import {Container, Row, Col, Image} from 'react-bootstrap';

class BoardApplicationPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="2021 MIST E-Board Application" />
        <PageSubTitle pageSubTitle="Interested in joining our team?" />
        <Container>
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe title="judge" style={{"width":"65%"}} src="https://docs.google.com/forms/d/e/1FAIpQLSf-_JOq7_15kBq63Xkr0usw9KTBJZXnHfxiYPk2JjD-W97YEg/viewform?embedded=true" height="2993" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { BoardApplicationPage };