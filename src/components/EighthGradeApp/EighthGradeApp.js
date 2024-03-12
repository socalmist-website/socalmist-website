import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import "./EighthGradeApp.css";

class EighthGradeApp extends React.Component {

  render() {
    console.log("TEWSET");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="8th Grade Application" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder">
              <iframe id="JotFormIFrame-200290990776159" title="8th Grade MIST Application" src="https://form.jotform.com/200290990776159" frameborder="0" style={{"width":"100%","height":"1200px"}} > </iframe> 
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export { EighthGradeApp };
