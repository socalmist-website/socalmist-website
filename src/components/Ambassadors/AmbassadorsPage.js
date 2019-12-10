import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import {Container, Row, Col, Image} from 'react-bootstrap';
import "./AmbassadorsPage.css";

class AmbassadorsPage extends React.Component {

  render() {
    const image = require("../../public/ambassadors.jpg");
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
              <p>SoCal MIST is excited to introduce the MIST Ambassadors Program!</p>
              <p>So, what is a MIST Ambassador? An ambassador is a leader who can inspire and organize 
                students to go to MIST from their school and the community in their area.</p>
              <p>During this program, you will improve your leadership skills, learn how to give 
                an elevator pitch, and be equipped with the answer to any question that can come 
                your way about MIST. You will put your skills to the test by reaching out to new 
                local high schools and expand the reach of SoCal MIST.</p>
              <p>Please fill out this application form by FRIDAY, DECEMBER 28 AT 11:59 PM, 
                and you’ll be one step closer to being part of the first ever SoCal MIST Ambassadors Program! 
                After you submit your application, you will be contacted by our Executive Board. 
                Please make sure to check your emails!</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { AmbassadorsPage };