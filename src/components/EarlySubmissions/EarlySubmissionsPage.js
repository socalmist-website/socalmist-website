import React, { Component } from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Container, Row, Col } from "react-bootstrap";

class EarlySubmissionsPage extends Component {
  styles = {
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Early Submissions" />
        <Container id="submissionsContainer">
          <Row className="justify-content-sm-center"></Row>
          <Row className="justify-content-sm-center">
            <Col sm={7} className="textHolder">
              <p>General Guidelines for Written Submission Documents:</p>
              <Row className="justify-content-sm-center">
                <Col sm={12} className="textholder">
                  <ul>
                    <li>Typed and double spaced</li>
                    <li>Size 12 font, Times new Roman</li>
                    <li>All submission must be in PDF format</li>
                    <li>
                      A written statement is required for all early submission
                      competitions, which should be included on a separate page
                      at the end of your document, or submission.
                    </li>
                  </ul>
                </Col>
              </Row>
              <p>
                *Note some regions still require 3 hard copies of your early
                submission competition. Please check with your regional
                headquarters for more information. MIST Florida requires 3 hard
                copies the day of.
              </p>
              <p>
                **Note your region has the right to dock points from your piece
                if the above format of titling your pieces is not followed for
                early submission.
              </p>
              <p>
                ***Make sure to check the rules pertaining to your competition
                for Written Statement. All the competitions do NOT have the same
                requirements.
              </p>
              <p style={this.styles}>
                To submit your entries, email them as an attachment following
                the guidelines above, with the *COMPETITIONNAME__Submission* as
                the subject line to our competitions chair at
                tsyed@getmistified.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { EarlySubmissionsPage };
