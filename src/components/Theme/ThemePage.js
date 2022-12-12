import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Container, Row, Col, Image } from "react-bootstrap";

class ThemePage extends React.Component {
  render() {
    const image = require("../../public/mist-theme.png");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Theme" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col sm={11} style={{ "text-align": "center" }}>
              <Image width="100%" src={image} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col
              sm={10}
              style={{ "text-align": "center", "margin-top": "1.2em" }}
            >
              <h5>
              The Weight of Power: Ruling the Self to Serve Others
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={8} style={{ "margin-top": "1em" }}>
              <p>
              You hold tremendous power, even if you may not be aware of it. 
              You have the power to perceive your environment and to act upon 
              it by making decisions that can generate many outcomes. At this moment, 
              your sphere of influence may be limited to yourself, but as you grow, 
              so too will your influence and your responsibilities. Prophet Muhammad,
              peace and blessings be upon him, encouraged us to channel the power
              we hold, for “each and every one of you is like a shepherd, and 
              each and every one of you has a flock to take care of, and each and
              every single one of you will be held responsible” (Bukhari).
              </p>

              <p>
                Being thrust into a position to lead, by choice or by fate, 
                is a heavy responsibility to bear as you become accountable 
                to those around you. In such a position, you must be critically 
                aware of yourself and your intentions. If not, your service can 
                quickly become self-serving, rather than serving others. Would 
                you allow yourself to become like the Pharaoh, who proclaimed 
                to his people, “I am your Lord Most High,” (Quran 79:24) and 
                subjugated them? Or do you take lessons from Prophet Muhammad, 
                peace and blessings be upon him, whose wife Aisha, may God be 
                pleased with her, described him as someone who would constantly 
                be “serving his family” (Bukhari) while he was home? As such, 
                Prophet Muhammad, peace and blessings be upon him, exemplified 
                his teaching that “the leader of a people is their servant,” 
                (Bayhaqi) placing service before self-interest and starting with 
                himself and his loved ones.
              </p>

              <p>
                Both Pharaoh and Prophet Muhammad, peace and blessings be upon 
                him, made conscious decisions to lead their people towards arduous 
                goals. If you were allowed to be in a similar position, how would 
                you act? To "be the change you wish to see in the world" starts 
                with you, navigating your doubts, desires, and dreams, and enriching 
                the lives of yourself and others in your home and in your community.
              </p>

              <p>
                Whom do you serve and why? How will you check yourself and your 
                intentions? Where do you draw the line? Are you willing to sacrifice 
                your desires, and if so, for what? How do you manage the stress 
                of responsbility? What will be the legacy you leave behind?
              </p>

              <p>
                We encourage you to creatively explore these concepts and more
                in online and in-person Regional and National competitions and
                workshops during MIST 2023. Remember that unique projects
                displaying creativity and insight will be judged most favorably.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { ThemePage };
