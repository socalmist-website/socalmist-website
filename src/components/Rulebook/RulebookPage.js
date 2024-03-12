import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../index.css";
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
          {/* Ensure the Row acts as a flex container with equal height children */}
          <Row className="section d-flex align-items-stretch">
            <Col sm={6} className="mb-4 d-flex">
              <Card className="text-center custom-card w-100" style={{minHeight: 375}}>
                <Card.Body>
                  <Card.Title>MIST Bowl</Card.Title>
                  <div className="mist-bowl-content card-content">
                    <p>
                      <a
                        className="mist-link"
                        href="https://tinyurl.com/mistbowl2024t1"
                      >
                        Topic 1: Tracing Palestine
                      </a>
                    </p>
                    <p>
                      <a
                        className="mist-link"
                        href="https://tinyurl.com/mistbowl2024t2"
                      >
                        Topic 2: Racial Disparities and Injustice
                      </a>
                    </p>
                    <p>
                      <a
                        className="mist-link"
                        href="https://tinyurl.com/mistbowl2024t3"
                      >
                        Topic 3: The Firsts | The Forerunners
                      </a>
                    </p>
                    <p>
                      <a
                        className="mist-link"
                        href="https://tinyurl.com/mistbowl2024t4"
                      >
                        Topic 4: Muslim Youth in Western Tides
                      </a>
                    </p>
                    <p>
                      <a
                        className="mist-link"
                        href="https://tinyurl.com/mistbowl2024t5"
                      >
                        Topic 5: The Steady Rise of Islamophobia
                      </a>
                    </p>
                    <p>
                      <a
                        className="mist-link"
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
              <Card className="custom-card w-100" style={{minHeight: 375}}>
                <Card.Body>
                  <Card.Title className="text-center">
                    Knowledge Test
                  </Card.Title>
                  <div className="knowledge-test-content card-content">
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
              <Card className="custom-card w-100" style={{minHeight: 375}}>
                <Card.Body>
                  <Card.Title className="text-center">Debate Topics</Card.Title>
                  <div className="debate-content card-content">
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
              <Card className="text-center custom-card w-100" style={{minHeight: 375}}>
                <Card.Body>
                  <Card.Title>Improv</Card.Title>
                  <div className="improv-content card-content">
                    <p style={{fontSize: 40, padding: 95}}>
                      <a
                        className="mist-link"
                        href="https://tinyurl.com/mistimprov2024"
                      >
                        Improv Rules
                      </a>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="section justify-content-center">
            <Col sm={6} className="mb-4 text-center">
              <Button
                variant="none"
                size="lg"
                href="https://www.getmistified.com/news/2023/12/21/2023-competitions-rulebook-x4e72"
                target="_blank"
                className="buttonDiv"
              >
                <b>Official MIST 2024 Rulebook</b>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { RulebookPage };
