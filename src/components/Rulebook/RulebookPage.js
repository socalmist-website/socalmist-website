import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import { Image, Button, Container, Row, Col } from 'react-bootstrap';
import './RulebookPage.css';


class RulebookPage extends React.Component {

  render() {
    const img = require("../../public/rulebook-banner.png")

    return (
      <div>
        <Header />
        <PageTitle pageTitle="Rulebook" />
        <Container>
          <Row className="justify-content-sm-center bannerHolder">
            <Col sm={6}>
              <Image fluid={true} src={img} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Button id="rulebookButton" target="_blank" href="https://www.getmistified.com/news/2020/1/13/2020-competitions-rulebook">
              Rulebook
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export { RulebookPage };