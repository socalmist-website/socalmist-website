import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./RulebookPage.css";

class RulebookPage extends React.Component {
  render() {
    return (
      <div className="rulebook-page">
        <Header />
        <PageTitle pageTitle="SoCal MIST Competition Materials" />
        <Container>
          <Row className="section d-flex align-items-stretch">
            <Col sm={6} className="mb-4 d-flex">
              <Card className="rule-card w-100" style={{ minHeight: 375 }}>
                <Card.Body className="rule-card-body">
                  <Card.Title className="text-center">MIST Bowl</Card.Title>
                  <div className="mistbowl-card-content">
                    <p>
                      <a
                        className="rule-link"
                        href="https://tinyurl.com/mistbowl2024t1"
                      >
                        Topic 1: Tracing Palestine
                      </a>
                    </p>
                    <p>
                      <a
                        className="rule-link"
                        href="https://tinyurl.com/mistbowl2024t2"
                      >
                        Topic 2: Racial Disparities and Injustice
                      </a>
                    </p>
                    <p>
                      <a
                        className="rule-link"
                        href="https://tinyurl.com/mistbowl2024t3"
                      >
                        Topic 3: The Firsts | The Forerunners
                      </a>
                    </p>
                    <p>
                      <a
                        className="rule-link"
                        href="https://tinyurl.com/mistbowl2024t4"
                      >
                        Topic 4: Muslim Youth in Western Tides
                      </a>
                    </p>
                    <p>
                      <a
                        className="rule-link"
                        href="https://tinyurl.com/mistbowl2024t5"
                      >
                        Topic 5: The Steady Rise of Islamophobia
                      </a>
                    </p>
                    <p>
                      <a
                        className="rule-link"
                        href="https://tinyurl.com/mistbowl2024t6"
                      >
                        Topic 6: Current Events
                      </a>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-4 d-flex">
              <Card className="rule-card w-100" style={{ minHeight: 375 }}>
                <Card.Body className="rule-card-body">
                  <Card.Title className="text-center">
                    Knowledge Test
                  </Card.Title>
                  <div className="knowledge-test-content">
                    <p>
                      Book 1: The Question of Palestine by Edward Said (first
                      150 pages)
                    </p>
                    <p>Book 2: Freedom is a Constant Struggle - Angela Davis</p>
                    <p>
                      Book 3: My Father Was a Freedom Fighter: Gaza’s Untold
                      Story - Ramzy Baroud
                    </p>
                    <p>Book 4: Justice for Some - Noura Erekat</p>
                    <p>
                      All Knowledge Test levels will be of equal difficulty.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="section d-flex align-items-stretch">
            <Col sm={6} className="mb-4 d-flex">
              <Card className="rule-card w-100" style={{ minHeight: 375 }}>
                <Card.Body className="rule-card-body">
                  <Card.Title className="text-center">Debate Topics</Card.Title>
                  <div className="debate-content">
                    <p>
                      It is more effective to be engaged in local politics than
                      federal politics.
                    </p>
                    <p>
                      The government should incentivize companies to adopt
                      remote work where possible.
                    </p>
                    <p>
                      The rise of AI communication tools will negatively affect
                      overall human interaction.
                    </p>
                    <p>
                      International sporting competitions (Olympics, World Cup,
                      etc.) offer more benefits than harms for host cities.
                    </p>
                    <p>
                      The United States should no longer be called a democracy.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-4 d-flex">
              <a
                className="w-100 rule-card-improv-rules-link"
                href="https://docs.google.com/document/d/12HE0wsdmwpD0kb3IVnfI_50qZCiM7Q1s9uAzXLgEHsg/edit#heading=h.71lqsqhvebe7"
              >
                <Card
                  className="rule-card rule-card-improv-rules"
                  style={{ minHeight: 450 }}
                >
                  <Card.Body className="rule-card-body">
                    <div className="improv-content">
                      <p className="text-center" id="rule-improv-rules">
                        Improv Rules
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
        <Container>
          <a
            href="https://www.getmistified.com/news/2023/12/21/2023-competitions-rulebook-x4e72"
            className="rule-buttonDiv"
          >
              <h5>Official MIST 2024 Rulebook</h5>
          </a>
        </Container>
      </div>
    );
  }
}

export { RulebookPage };
