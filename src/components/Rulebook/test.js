import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../index.css";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./RulebookPage.css"; // Ensure the CSS file is correctly imported

class RulebookPage extends React.Component {
  render() {
    return (
      <div className="rule-rulebook-page">
        <Header />
        <PageTitle pageTitle="SoCal MIST Competition Materials" />
        <Container fluid className="py-4">
          <Row className="gx-4 gy-4">
            {this.renderTopicSection("MIST Bowl", "rule-mist-bowl", [
              { title: "Topic 1: Tracing Palestine", url: "https://tinyurl.com/mistbowl2024t1" },
              // Add the rest of the topics in similar format
            ])}
            {this.renderKnowledgeTest()}
            {this.renderDebateSection()}
            {this.renderImprovSection()}
            <Col xs={12} className="text-center my-4">
              <Button
                variant="outline-primary"
                size="lg"
                href="https://www.getmistified.com/news/2023/12/21/2023-competitions-rulebook-x4e72"
                target="_blank"
                className="rule-official-rulebook-button"
              >
                Official MIST 2024 Rulebook
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  // Example method for rendering a section. Update similarly for Knowledge Test, Debate, and Improv sections
  renderTopicSection(title, className, topics) {
    return (
      <Col sm={6} className="mb-4 d-flex">
        <Card className={`text-center rule-custom-card w-100 ${className}`}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="card-content">
              {topics.map((topic, index) => (
                <p key={index}>
                  <a href={topic.url}>{topic.title}</a>
                </p>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export { RulebookPage };
