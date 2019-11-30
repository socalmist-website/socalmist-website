import React from 'react';
import { Header } from '../Header/Navbar';
import queryString from 'query-string';
import {Container, Row, Col} from 'react-bootstrap';
import './CompetitionPage.css';
import {competitions} from './CompetitionTextConstants';

class CompetitionPage extends React.Component {

  render() {
    const params = queryString.parse(this.props.location.search);
    const competitionInfo = competitions[params.competitionName];
    
    if (competitionInfo == null) {
      return (
        <div>
          <Header />
          <h3>Competition not found</h3>
        </div>
      )
    }

    return (
      <div>
        <Header />
        <Container fluid={true} id="tabContainer">
          <Row className="justify-content-sm-center">
            <Col sm={6} className="competitionTitle"><h1>{competitionInfo.title}</h1></Col>
            <Col sm={8} id="tabsHolder">
              {competitionInfo.tabs}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { CompetitionPage };