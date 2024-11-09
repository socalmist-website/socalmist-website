import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header } from "../../Header/Navbar";
import { PageTitle } from "../../Header/PageTitle";
import "../years.css";

class Y2024 extends React.Component {
  createYoutubeEmbed() {
    return (
      <div className="y-video-embed-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xl8IvNkes0Q?si=sK9_HvEgkWwj1o_d"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  }

  render() {
    const youtubeVideo = this.createYoutubeEmbed();
    const img = require("../../../public/2023-spirit.png");

    return (
      <div>
        <Header />
        <PageTitle pageTitle="2024" />
        <div className="y-mega-container">
          <Container>
            <h3 className="text-center y-page-header">Details</h3>
          </Container>
          <Container className="y-content-container">
            <Col md={6} lg={8}>
              {/* Left side content here */}
              <div className="card mb-4 y-lefthand" style={{minHeight: 474}}>
                <div className="y-card-body">
                  <h5 className="y-card-title">Theme</h5>
                  <p className="y-card-text">
                    The Weight of Power: Ruling the Self to Serve Others
                  </p>
                  <h5 className="y-card-title">Location</h5>
                  <p className="y-card-text">Cal State Fullerton</p>
                  <h5 className="y-card-title">Date</h5>
                  <p className="y-card-text">May 20-21</p>
                  <h5 className="y-card-title">Previous Board Members</h5>
                  <p className="y-card-text">
                    Yusuf Ezzeldine, Aimen Imtiaz, Alaa Salim, Araam Abutaha,
                    Dua Shoaib, Hafsa Farooqui, Imaad Rana, Janan AlKhaja, Kian
                    Nourollahi, Lujain Almahdi, Meraal Abutaha, Mohammad Israr,
                    Mouaz Kanawati, Rabaa Khan, Rabia Ahmed, Rokshana Bushra,
                    Sawsan Dibseh, Shereen Nourollahi, Sal Latif, Summer Kurdi, Yazan
                    Moubayed, Zayyan Ul Hassan
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="y-card-container">
              {" "}
              {/* Adjusted for column width */}
              {this.createCard(
                "Winners",
                "Explore the champions of the 2024 tournament.",
                "/winners"
              )}
              {this.createCard(
                "MIST Feedback Form",
                "Give your feedback to help us improve future tournaments.",
                "https://docs.google.com/forms/d/e/1FAIpQLSf4AYcyvG624mBBzLY6a6iMZzBComdx6bq6J6EdHHsRTwPKag/viewform"
              )}
              {this.createCard(
                "Photos",
                "Browse through the photo gallery from the 2024 tournament.",
                "https://photos.app.goo.gl/CwDGLHrmpHzfD6LCA"
              )}
            </Col>
          </Container>
          <Container>
            <h3 className="text-center y-page-header">2024 Recap Video</h3>
            {youtubeVideo}
          </Container>
          <Container>
            <h3 className="text-center y-page-header">Spirit</h3>
            <img src={img} alt="2024 Spirit" className="y-spirit-image" />
          </Container>
        </div>
      </div>
    );
  }

  createCard(title, description, link) {
    // Determine if the link is external or internal
    const isExternalLink = link.startsWith("http");

    // Common card content
    const cardContent = (
      <div className="y-card card mb-4">
        <div className="y-card-body">
          <h5 className="y-card-title">{title}</h5>
          <p className="y-card-text">{description}</p>
        </div>
      </div>
    );

    // Return the card wrapped in either an <a> or <Link> tag, depending on the link type
    return isExternalLink ? (
      <a
        href={link}
        className="y-cardLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    ) : (
      <Link to={link} className="y-cardLink">
        {cardContent}
      </Link>
    );
  }
}

export { Y2024 };
