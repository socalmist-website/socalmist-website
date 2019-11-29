import React from 'react';
import { Header } from '../Header/Navbar';
import queryString from 'query-string';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Container, Row, Col} from 'react-bootstrap';
import './CompetitionPage.css';
import {competitions} from './CompetitionTextConstants';

class CompetitionPage extends React.Component {

  render() {
    let params = queryString.parse(this.props.location.search);
    let competitionInfo = competitions[params.competitionName];
    
    if (competitionInfo == null) {
      return (
        <div>
          <Header />
          <h3>Competition not found</h3>
        </div>
      )
    }

    let resources = null;
    if (competitionInfo.hasResources) {
      resources = (
        <Tab eventKey="resources" title="Resources">
          <div className="tabContent">
            {competitionInfo.resources}
          </div>
        </Tab>
      );
    }

    return (
      <div>
        <Header />
        <Container fluid={true} id="tabContainer">
          <Row className="justify-content-sm-center">
            <Col sm={6} className="competitionTitle"><h1>{competitionInfo.title}</h1></Col>
            <Col sm={8} id="tabsHolder">
            <Tabs className="tabText" defaultActiveKey="overview" id="tab">
              <Tab eventKey="overview" title="Overview">
                <div className="tabContent">
                  <p>{competitionInfo.overview}</p>
                </div>
              </Tab>
              <Tab eventKey="rules" title="Rules and Regulations">
                <div className="tabContent">
                  {competitionInfo.rules}
                </div>
              </Tab>
              {resources}
            </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { CompetitionPage };