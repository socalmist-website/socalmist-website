import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import "./RulebookPage.css";
import "../../index.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class RulebookPage extends React.Component {
  render() {
    const pdf = require("../../public/RulebookSupplement.pdf");

    return (
      <div className="rulebook-page">
        <Header />
        <PageTitle pageTitle="SoCal MIST Competition Materials" />
        <Container className="rulebook-els-container">
          <Row className="section">
            <Col
              sm={5}
              className="rulebook-rounded-box box-centered rulebook-title-box"
            >
              <h3 className="mist-bowl-header">
                MIST
                <br />
                Bowl
              </h3>
            </Col>
            <Col sm={1} className="rulebook-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col
              sm={5}
              className="rulebook-rounded-box rulebook-description-box"
            >
              <div className="mist-bowl-list">
                <ul>
                  <li>
                    <p>
                      <a
                        className="mist-link"
                        href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/657a55d2183cdb0dda54d5df/1702516179760/Topic+1+-+Tracing+Palestine.pdf"
                      >
                        Topic 1: Tracing Palestine
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        className="mist-link"
                        href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/657a55e5f06a9321d7d20cd7/1702516198415/Topic+2+-+Racial+Disparities+and+Injustice.pdf"
                      >
                        Topic 2: Racial Disparities and Injustice
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        className="mist-link"
                        href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/657a55fdf6e8a55d9a01c1eb/1702516222196/Topic+3+-+The+Firsts+The+Forerunners+.pdf"
                      >
                        Topic 3: The Firsts | The Forerunners
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        className="mist-link"
                        href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/657a561117e5b54b33491d72/1702516244505/Topic+4+-+Muslim+Youth+in+Western+Tides.pdf"
                      >
                        Topic 4: Muslim Youth in Western Tides
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        className="mist-link"
                        href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/657a5628a5e4c35cc170fe7b/1702516267186/Topic+5+-+The+Steady+Rise+of+Islamaphobia.pdf"
                      >
                        Topic 5: The Steady Rise of Islamophobia
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        className="mist-link"
                        href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/657a563b2c3cde2273bdc392/1702516284586/Topic+6+-+Current+Events.pdf"
                      >
                        Topic 6: Current Events
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="section">
            <Col
              sm={5}
              className="rulebook-rounded-box rulebook-description-box"
            >
              <div className="mist-bowl-list">
                <ul>
                  <li>
                    <p className="knowledge-test-bullet">
                      Book 1: The Question of Palestine by Edward Said (first
                      150 pages)
                    </p>
                  </li>
                  <li>
                    <p className="knowledge-test-bullet">
                      Book 2: Freedom is a Constant Struggle - Angela Davis
                    </p>
                  </li>
                  <li>
                    <p className="knowledge-test-bullet">
                      Book 3: My Father Was a Freedom Fighter: Gaza’s Untold
                      Story - Ramzy Baroud
                    </p>
                  </li>
                  <li>
                    <p className="knowledge-test-bullet">
                      Book 4: Justice for Some - Noura Erekat
                    </p>
                  </li>
                </ul>
                <p
                  className="knowledge-test-bullet"
                  style={{ "padding-left": "1.5rem" }}
                >
                  All Knowledge Test levels will be of equal difficulty.
                </p>
              </div>
            </Col>
            <Col sm={1} className="rulebook-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col
              sm={5}
              className="rulebook-rounded-box box-centered rulebook-title-box"
            >
              <h3 className="mist-bowl-header">Knowledge</h3>
              <h3 className="mist-bowl-header">Test</h3>
            </Col>
          </Row>
          <Row className="section">
            <Col
              sm={5}
              className="rulebook-rounded-box box-centered rulebook-title-box"
            >
              <h3 className="mist-bowl-header">Debate</h3>
              <h3 className="mist-bowl-header">Topics</h3>
            </Col>
            <Col sm={1} className="rulebook-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col
              sm={5}
              className="rulebook-rounded-box rulebook-description-box"
            >
              <div className="mist-bowl-list">
                <ul>
                  <li>
                    <p className="debate-topics-bullet">
                      It is more effective to be engaged in local politics than
                      federal politics.
                    </p>
                  </li>
                  <li>
                    <p className="debate-topics-bullet">
                      The government should incentivize companies to adopt
                      remote work where possible.
                    </p>
                  </li>
                  <li>
                    <p className="debate-topics-bullet">
                      The rise of AI communication tools will negatively affect
                      overall human interaction.
                    </p>
                  </li>
                  <li>
                    <p className="debate-topics-bullet">
                      International sporting competitions (Olympics, World Cup,
                      etc.) offer more benefits than harms for host cities.
                    </p>
                  </li>
                  <li>
                    <p className="debate-topics-bullet">
                      The United States should no longer be called a democracy.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="section">
            <Col sm={3} className="rulebook-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col
              sm={5}
              className="rulebook-rounded-box box-centered rulebook-title-box"
            >
              <h3 className="mist-bowl-header">
                <a
                  href="https://www.getmistified.com/s/Regional-Improv-Games-24.pdf"
                  className="mist-link"
                >
                  Improv
                </a>
              </h3>
            </Col>
          </Row>
          {/* <Row className="rules-button-container">
            <a className="rulebook-link" href="https://www.getmistified.com/news/2023/12/21/2023-competitions-rulebook-x4e72">
              <button className="rulebook-rounded-box rulebook-title-box rules-button">
                MIST Rulebook
              </button>
            </a>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export { RulebookPage };
