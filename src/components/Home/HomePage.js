import React from 'react';
import { Header } from '../Header/Navbar';
import Banner from './Banner';
import Numbers from './Numbers';
import YoutubeHolder from './YoutubeHolder';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';

class HomePage extends React.Component {

  render() {
    const yaqeenlogo = require("../../public/yaqeen-logo.png");
    return (
      <div className="pageBody">
        <Header />
        <Banner />
        <Numbers />
        <YoutubeHolder />
        <hr></hr>
        <Container>
          <Row className="justify-content-sm-center">
            <Col sm={4} className="centerAlign">
              <h3>Proudly Sponsored By:</h3>
            </Col>            
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={6} className="centerAlign">
              <img alt="Yaqeen logo" src={yaqeenlogo} height="150px" />
            </Col>
          </Row>
        </Container>
      </div>
      
    );
  }
}

export { HomePage };