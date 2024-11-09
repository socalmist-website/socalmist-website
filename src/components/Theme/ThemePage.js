import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./ThemePage.css";

class ThemePage extends React.Component {
  render() {
    const image = require("../../public/mist-theme-2025.png");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Theme" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col sm={11} style={{ "text-align": "center" }}>
              <Image className="theme-image" width="100%" src={image} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col
              sm={10}
              style={{ "text-align": "center", "margin-top": "1.2em" }}
            >
              <h3 className="theme-title">
                A Legacy of Learning: Turning Knowledge into Action
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col
              sm={8}
              style={{ "margin-top": "1em" }}
              className="theme-description"
            >
              <p>
                Islam places a profound emphasis on knowledge, considering it an
                essential virtue that enriches the mind, nurtures the soul, and
                allows for personal growth. The Prophet Muhammad (peace and
                blessings be upon him) said, "Whoever takes a path upon which to
                obtain knowledge, Allah makes the path to Paradise easy for
                him." (<a className="a-theme" href="https://sunnah.com/tirmidhi:2646">Tirmidhi</a>).
              </p>
              <p>
                However, before embarking on a path seeking knowledge,
                scientists and scholars alike must look inward to cultivate
                humility and sincerity, allowing them to receive knowledge with
                open hearts and minds, ready to absorb its wisdom and act upon
                its truths. Muslims often find inspiration from the first
                Quranic revelation to Prophet Muhammad (peace and blessings be
                upon him) to always seek God's guidance while pursuing
                knowledge: “Read! In the name of your Lord who has created (all
                that exists)” (<a className="a-theme" href="https://quran.com/en/al-alaq/1">Quran 96:1</a>).
              </p>
              <p>
                With the right intentions, the pursuit of spiritual and worldly
                knowledge paves the way for deeper faith and wisdom. Generations
                of scholars such as Fatima Al-Fihri, Al Biruni, and Ibn
                al-Haytham who excelled in mathematics, science, and philosophy,
                sought knowledge with the conviction that pursuing truth and
                understanding is an act of devotion to the Creator. These titans
                contributed positively to the world by passing on what they knew
                following the example of the Prophet (peace and blessings be
                upon him) who said, “Whoever teaches some knowledge will have
                the reward of the one who acts upon it, without that detracting
                from his reward in the slightest” (<a className="a-theme" href="https://sunnah.com/ibnmajah:240">Ibn Majah</a>).
              </p>
              <p>
                Acquiring knowledge comes with a duty to act, by implementing
                and sharing it responsibly. With time and effort, the spread of
                knowledge can lead to stronger advocacy in favor of important
                causes and more efficient or productive systems. This shared
                knowledge also reinforces collective values, promoting unity and
                a sense of purpose among those who are committed to the common
                good. The effort we invest in spreading knowledge thus becomes a
                crucial part of building stronger, more informed, and more
                engaged communities, which can be our legacy in the world.
              </p>
              <p>
                How do you seek knowledge, and what is your role in spreading it
                further? How are your decisions, values and beliefs shaped by
                what you know? How do you stay motivated to learn despite
                hitting barriers? What role does humility play in pursuing and
                teaching knowledge? How do you navigate situations where the
                knowledge you possess conflicts with your community?
              </p>
              <p>
                We encourage you to creatively explore these concepts and more
                in Regional and National competitions and workshops during MIST
                2025. Remember that unique projects displaying creativity and
                insight will be judged most favorably.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { ThemePage };
