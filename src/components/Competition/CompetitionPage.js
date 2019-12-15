import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import queryString from 'query-string';
import {Row, Col, Jumbotron} from 'react-bootstrap';
import './CompetitionPage.css';
import {competitions} from './CompetitionTextConstants';

class CompetitionPage extends React.Component {

  componentDidMount() {
    try {
      document.getElementById("tab-tab-one").click();
    } catch (e) {
      
    }
  }

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
        <PageTitle pageTitle={competitionInfo.title} />
        <Jumbotron id="competitionTabHolder">
          <Row className="justify-content-sm-center">
            <Col sm={9}>
              {competitionInfo.tabs}
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export { CompetitionPage };