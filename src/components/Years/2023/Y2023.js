import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header } from "../../Header/Navbar";
import { PageTitle } from "../../Header/PageTitle";
import "../years.css";

class Y2023 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="2023" />
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="y-card-container">
              {" "}
              {/* Adjusted for column width */}
              {this.createCard(
                "Winners",
                "Explore the champions of the 2023 tournament.",
                "/winners"
              )}
              {this.createCard(
                "MIST Feedback Form",
                "Give your feedback to help us improve future tournaments.",
                "https://docs.google.com/forms/d/e/1FAIpQLSf4AYcyvG624mBBzLY6a6iMZzBComdx6bq6J6EdHHsRTwPKag/viewform"
              )}
              {this.createCard(
                "2023 Highlight Video",
                "Watch the exciting highlights from the 2023 tournament.",
                "https://www.youtube.com/watch?v=Xl8IvNkes0Q"
              )}
              {this.createCard(
                "Photos",
                "Browse through the photo gallery from the 2023 tournament.",
                "https://photos.app.goo.gl/CwDGLHrmpHzfD6LCA"
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  createCard(title, description, link) {
    if (link.startsWith("http")) {
      return (
        <a
          href={link}
          className="y-cardLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="y-card card mb-4">
            <div className="y-card-body">
              <h5 className="y-card-title">{title}</h5>
              <p className="y-card-text">{description}</p>
            </div>
          </div>
        </a>
      );
    }
    else {
      return (
        <Link
          to={link}
          className="y-cardLink"
          rel="noopener noreferrer"
        >
          <div className="y-card card mb-4">
            <div className="y-card-body">
              <h5 className="y-card-title">{title}</h5>
              <p className="y-card-text">{description}</p>
            </div>
          </div>
        </Link>
      );
    }
  }
}

export { Y2023 };
