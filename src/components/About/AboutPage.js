import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import windowSize from "react-window-size";
import "./AboutPage.css";

class AboutPage extends React.Component {
  render() {
    const impact_image = require("../../public/impact-image.JPG");
    const community_image = require("../../public/community-image.JPG");
    const events_image = require("../../public/event-image.jpg");
    const join_image = require("../../public/join-us-image.JPG");
    if (this.props.windowWidth < 1000) {
      return (
        <div className="about-page">
          <Header />
          <PageTitle pageTitle="About MIST" />
          <Container>
            <Row className="justify-content-center my-5">
              <Col sm={12} className="text-center">
                <h2>MIST = Muslim Inter-Scholastic Tournament</h2>
                <p className="mission-statement">
                  Our mission is to bring high school students together to
                  develop leadership, promote communication, and inspire
                  creativity while gaining a deeper understanding of Islam and
                  Muslims.
                </p>
              </Col>
            </Row>
            <hr />
            <Row className="justify-content-center section">
              <Col sm={12} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <Card.Title>Our Impact</Card.Title>
                    <Card.Text>
                      SoCal MIST is more than just a competition; it's a
                      transformative experience that has touched the lives of
                      thousands of high school students across Southern
                      California. Our platform has been a springboard for young
                      talents to leap into excellence, offering not just
                      trophies but also invaluable life lessons. With over a
                      decade of nurturing young minds, we've seen our alumni
                      soar into various fields, carrying with them the
                      confidence and skills honed here at MIST. Their stories of
                      success and community contribution stand as a testament to
                      the lasting impact of our collective efforts.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} className="mb-4 text-center img-wrapper">
                <Image
                  src={impact_image}
                  alt="Our Impact"
                  className="img-fluid about-image"
                />
              </Col>
            </Row>
            <Row className="justify-content-center section">
              <Col sm={12} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <Card.Title>Our Community</Card.Title>
                    <Card.Text>
                      At the heart of SoCal MIST lies a vibrant, inclusive
                      community that extends beyond the boundaries of
                      competition. We are a melting pot of cultures, ideas, and
                      aspirations, united by a shared passion for learning and
                      growth. Our events are a celebration of this unity,
                      providing a nurturing environment for students to network,
                      collaborate, and build lifelong friendships. It's here
                      that barriers are broken, and a true sense of brotherhood
                      and sisterhood is fostered, all under the umbrella of
                      mutual respect and understanding.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} className="mb-4 text-center">
                <Image
                  src={community_image}
                  alt="Our Community"
                  className="img-fluid about-image"
                />
              </Col>
            </Row>
            <Row className="justify-content-center section">
              <Col sm={12} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <Card.Title>Our Events</Card.Title>
                    <Card.Text>
                      Each year, SoCal MIST orchestrates a symphony of events
                      that resonate with the rhythm of creativity and the
                      harmony of competition. From intensive preparation
                      workshops to the buzz of the regional contests, leading up
                      to the excitement of the annual tournament, our calendar
                      is rich with opportunities for participants to showcase
                      their prowess. Whether you're a budding scientist, a
                      gifted orator, or an aspiring artist, our events are
                      tailored to let your talents take center stage in an
                      atmosphere charged with enthusiasm and positive
                      competition.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} className="mb-4 text-center">
                <Image
                  src={events_image}
                  alt="Our Impact"
                  className="img-fluid about-image"
                />
              </Col>
            </Row>
            <Row className="justify-content-center section">
              <Col sm={12} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <Card.Title>Join Us</Card.Title>
                    <Card.Text>
                      Are you ready to embark on an unforgettable journey of
                      self-discovery and community engagement? SoCal MIST
                      welcomes you to join our expanding family of thinkers,
                      leaders, and visionaries. Registering is simple, but the
                      rewards are boundless. Listen to the echoes of our past
                      participants who speak of MIST not just as a competition,
                      but as a milestone in their personal and professional
                      development. Bring your passion and your drive—let's make
                      the next chapter of MIST history together!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} className="mb-4 text-center">
                <Image
                  src={join_image}
                  alt="Our Community"
                  className="img-fluid about-image"
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    return (
      <div className="about-page">
        <Header />
        <PageTitle pageTitle="About MIST" />
        <Container>
          <Row className="justify-content-center my-5">
            <Col sm={12} className="text-center">
              <h2>MIST = Muslim Inter-Scholastic Tournament</h2>
              <p className="mission-statement">
                Our mission is to bring high school students together to develop
                leadership, promote communication, and inspire creativity while
                gaining a deeper understanding of Islam and Muslims.
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center section">
            <Col lg={5} className="mb-4">
              <Card className="about-card" style={{height: '100%'}}>
                <Card.Body>
                  <Card.Title>Our Impact</Card.Title>
                  <Card.Text>
                    SoCal MIST is more than just a competition; it's a
                    transformative experience that has touched the lives of
                    thousands of high school students across Southern
                    California. Our platform has been a springboard for young
                    talents to leap into excellence, offering not just trophies
                    but also invaluable life lessons. With over a decade of
                    nurturing young minds, we've seen our alumni soar into
                    various fields, carrying with them the confidence and skills
                    honed here at MIST. Their stories of success and community
                    contribution stand as a testament to the lasting impact of
                    our collective efforts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5} className="mb-4 text-center img-wrapper">
              <Image
                src={impact_image}
                alt="Our Impact"
                className="img-fluid about-image"
              />
            </Col>
          </Row>
          <Row className="justify-content-center section">
            <Col lg={5} className="mb-4 text-center img-wrapper">
              <Image
                src={community_image}
                alt="Our Community"
                className="img-fluid about-image"
              />
            </Col>
            <Col lg={5} className="mb-4">
              <Card className="about-card" style={{height: '100%'}}>
                <Card.Body>
                  <Card.Title>Our Community</Card.Title>
                  <Card.Text>
                    At the heart of SoCal MIST lies a vibrant, inclusive
                    community that extends beyond the boundaries of competition.
                    We are a melting pot of cultures, ideas, and aspirations,
                    united by a shared passion for learning and growth. Our
                    events are a celebration of this unity, providing a
                    nurturing environment for students to network, collaborate,
                    and build lifelong friendships. It's here that barriers are
                    broken, and a true sense of brotherhood and sisterhood is
                    fostered, all under the umbrella of mutual respect and
                    understanding.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center section">
            <Col lg={5} className="mb-4">
              <Card className="about-card" style={{height: '100%'}}>
                <Card.Body>
                  <Card.Title>Our Events</Card.Title>
                  <Card.Text>
                    Each year, SoCal MIST orchestrates a symphony of events that
                    resonate with the rhythm of creativity and the harmony of
                    competition. From intensive preparation workshops to the
                    buzz of the regional contests, leading up to the excitement
                    of the annual tournament, our calendar is rich with
                    opportunities for participants to showcase their prowess.
                    Whether you're a budding scientist, a gifted orator, or an
                    aspiring artist, our events are tailored to let your talents
                    take center stage in an atmosphere charged with enthusiasm
                    and positive competition.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5} className="mb-4 text-center img-wrapper">
              <Image
                src={events_image}
                alt="Our Impact"
                className="img-fluid about-image"
              />
            </Col>
          </Row>
          <Row className="justify-content-center section">
            <Col lg={5} className="mb-4 text-center img-wrapper">
              <Image
                src={join_image}
                alt="Our Community"
                className="img-fluid about-image"
              />
            </Col>
            <Col lg={5} className="mb-4">
              <Card className="about-card" style={{height: '100%'}}>
                <Card.Body>
                  <Card.Title>Join Us</Card.Title>
                  <Card.Text>
                    Are you ready to embark on an unforgettable journey of
                    self-discovery and community engagement? SoCal MIST welcomes
                    you to join our expanding family of thinkers, leaders, and
                    visionaries. Registering is simple, but the rewards are
                    boundless. Listen to the echoes of our past participants who
                    speak of MIST not just as a competition, but as a milestone
                    in their personal and professional development. Bring your
                    passion and your drive—let's make the next chapter of MIST
                    history together!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default windowSize(AboutPage);
