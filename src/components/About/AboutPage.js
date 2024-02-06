import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./AboutPage.css";
import { Container, Row, Col, Image } from "react-bootstrap";

class AboutPage extends React.Component {
  render() {
    const impact_image = require("../../public/impact-image.JPG");
    const community_image = require("../../public/community-image.JPG");
    const events_image = require("../../public/event-image.jpg");
    const join_image = require("../../public/join-us-image.JPG");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="About MIST" />
        <Container>
          <Row className="justify-content-sm-center">
            <Col
              sm={12}
              className="titleHolder"
              style={{ "text-align": "center", "margin-top": "1.2em" }}
            >
              <h2>MIST = Muslim Inter-Scholastic Tournament</h2>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={12} className="aboutMission">
              <h5>
                Our mission is to bring high school students together to develop
                leadership, promote communication, and inspire creativity while
                gaining a deeper understanding of Islam and Muslims.
              </h5>
            </Col>
          </Row>
          <hr></hr>
          <Row className="section">
            <Col sm={5} className="about-rounded-box">
              <h3>Our Impact</h3>
              <p>
                SoCal MIST is more than just a competition; it's a
                transformative experience that has touched the lives of
                thousands of high school students across Southern California.
                Our platform has been a springboard for young talents to leap
                into excellence, offering not just trophies but also invaluable
                life lessons. With over a decade of nurturing young minds, we've
                seen our alumni soar into various fields, carrying with them the
                confidence and skills honed here at MIST. Their stories of
                success and community contribution stand as a testament to the
                lasting impact of our collective efforts.
              </p>
            </Col>
            <Col sm={1} className="about-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col sm={5}>
              <Image
                fluid={true}
                src={impact_image}
                alt="Our Impact Image"
                className="about-image"
              />
            </Col>
          </Row>

          <Row className="section">
            <Col sm={5}>
              <Image
                fluid={true}
                src={community_image}
                alt="Our Community Image"
                className="about-image"
              />
            </Col>
            <Col sm={1} className="about-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col sm={5} className="about-rounded-box">
              <h3>Our Community</h3>
              <p>
                At the heart of SoCal MIST lies a vibrant, inclusive community
                that extends beyond the boundaries of competition. We are a
                melting pot of cultures, ideas, and aspirations, united by a
                shared passion for learning and growth. Our events are a
                celebration of this unity, providing a nurturing environment for
                students to network, collaborate, and build lifelong
                friendships. It's here that barriers are broken, and a true
                sense of brotherhood and sisterhood is fostered, all under the
                umbrella of mutual respect and understanding.
              </p>
            </Col>
          </Row>

          <Row className="section">
            <Col sm={5} className="about-rounded-box">
              <h3>Our Events</h3>
              <p>
                Each year, SoCal MIST orchestrates a symphony of events that
                resonate with the rhythm of creativity and the harmony of
                competition. From intensive preparation workshops to the buzz of
                the regional contests, leading up to the excitement of the
                annual tournament, our calendar is rich with opportunities for
                participants to showcase their prowess. Whether you're a budding
                scientist, a gifted orator, or an aspiring artist, our events
                are tailored to let your talents take center stage in an
                atmosphere charged with enthusiasm and positive competition.
              </p>
            </Col>
            <Col sm={1} className="about-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col sm={5}>
              <Image
                fluid={true}
                src={events_image}
                alt="Our Events Image"
                className="about-image"
              />
            </Col>
          </Row>

          <Row className="section">
            <Col sm={5}>
              <Image
                fluid={true}
                src={join_image}
                alt="Join Us Image"
                className="about-image"
              />
            </Col>
            <Col sm={1} className="about-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col sm={5} className="about-rounded-box">
              <h3>Join Us</h3>
              <p>
                Are you ready to embark on an unforgettable journey of
                self-discovery and community engagement? SoCal MIST welcomes you
                to join our expanding family of thinkers, leaders, and
                visionaries. Registering is simple, but the rewards are
                boundless. Listen to the echoes of our past participants who
                speak of MIST not just as a competition, but as a milestone in
                their personal and professional development. Bring your passion
                and your drive—let's make the next chapter of MIST history
                together!
              </p>
            </Col>
          </Row>

          <Row className="section">
            <Col sm={5} className="about-rounded-box">
              <h3>FAQs</h3>
              <p>
                Navigating the excitement of SoCal MIST is straightforward with
                our comprehensive FAQ section. Here, you'll find clarity on
                everything from how to register, what to expect at events, and
                how to prepare for competitions. We understand you may have
                questions, and we're here to provide answers. This resource is
                constantly updated to ensure you have the latest information at
                your fingertips, allowing you to focus on what truly
                matters—preparing for an enriching and enjoyable MIST
                experience.
              </p>
            </Col>
            <Col sm={1} className="about-empty-gap">
              {/* This column is intentionally left empty to create space */}
            </Col>
            <Col sm={5}>
              <Image
                fluid={true}
                src={"path-to-your-image-5"}
                alt="FAQs Image"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { AboutPage };
