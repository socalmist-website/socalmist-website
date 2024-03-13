import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./MISTree.css";

class MISTree extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="2023" />
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="card-container"> {/* Adjusted for column width */}
              {this.createCard("Winners", "Explore the champions of the 2023 tournament.", "https://socalmist.com/winners")}
              {this.createCard("MIST Feedback Form", "Give your feedback to help us improve future tournaments.", "https://docs.google.com/forms/d/e/1FAIpQLSf4AYcyvG624mBBzLY6a6iMZzBComdx6bq6J6EdHHsRTwPKag/viewform")}
              {this.createCard("2023 Highlight Video", "Watch the exciting highlights from the 2023 tournament.", "https://www.youtube.com/watch?v=Xl8IvNkes0Q")}
              {this.createCard("Photos", "Browse through the photo gallery from the 2023 tournament.", "https://photos.app.goo.gl/CwDGLHrmpHzfD6LCA")}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  createCard(title, description, link) {
    return (
      <a href={link} className="cardLink" target="_blank" rel="noopener noreferrer">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </a>
    );
  }
}

export { MISTree };
