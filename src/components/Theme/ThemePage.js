import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./ThemePage.css";

class ThemePage extends React.Component {
  render() {
    const image = require("../../public/mist-theme-2024.png");
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
                The Treasure of Fellowship: From Fragrance to Fortress
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={8} style={{ "margin-top": "1em" }} className="theme-description">
              <p>
                A fundamental shift in society has occurred in recent years,
                emphasizing individualism and cold digital interactions.
                However, as humans are social creatures, it is crucial to
                recognize the significance of authentic connections among
                ourselves. Creating connections and building fellowship and
                companionship hold a significant place in the teachings of
                Islam. It is not merely a casual social relationship but a
                profound and spiritually uplifting bond based on compassion and
                virtue. In Islam, friendship is viewed as a divine gift that can
                guide individuals on their journey toward spiritual growth and
                righteousness.
              </p>
              <p>
                We are reminded to choose our companions wisely as the
                connections we make impact our character and conduct, as the
                Prophet, peace and blessings be upon him, said, "The quality of
                good company and that of bad company is that of the owner of
                musk and of the iron smith, and the owner of musk would either
                offer you free of charge or you would buy it from him or you
                would smell its pleasant odor, and so far as the iron smith is
                concerned, he would either burn your clothes or you shall have
                to smell its repugnant smell"{" "}
                <a className="a-theme" href="https://sunnah.com/muslim:2628">
                  (Muslim)
                </a>
                . We need to reflect deeply on our own actions as well to see if
                we uphold the values we wish to see in others, to treat people
                with respect and kindness, whether they share the same faith or
                not. If not, we may become isolated and lonely. This is a
                condition that affects far too many people and has been deemed a
                public health priority by the U.S. Surgeon General,{" "}
                <a
                  className="a-theme"
                  href="https://www.forbes.com/sites/bryanrobinson/2023/05/06/us-surgeon-general-cites-loneliness-as-serious-mental-health-hazard-in-new-report/?sh=295fca6d1adc"
                >
                  Vivek Murthy
                </a>
                .
              </p>
              <p>
                A genuine bond is built when one is sincere in their intentions,
                loyal in their actions, advises one another through compassion,
                and is trustworthy in their words. As Muslims, we are encouraged
                to hone these attributes out of love, as the Prophet, peace and
                blessings be upon him, narrated that "None of you truly believes
                until you love for your brother what you love for yourself"{" "}
                <a className="a-theme" href="https://sunnah.com/ibnmajah:66">
                  (Ibn Majah)
                </a>
                . This love is a powerful force that inspires people to do the
                most amazing acts of kindness and empathy for each other, no
                matter how large or small these acts may be. This love further
                strengthens our bonds to one another, as the Prophet, peace and
                blessings be upon him, related to his companions, "The believers
                in their mutual kindness, compassion and sympathy are just like
                one body. When one of the limbs suffers, the whole body responds
                to it with wakefulness and fever"{" "}
                <a
                  className="a-theme"
                  href="https://sunnah.com/riyadussalihin:224"
                >
                  (Muslim)
                </a>
                . By embodying these values in our relationships, we can then
                truly support and assist those closest to us.
              </p>
              <p>
                How do you cultivate and maintain your ties with others? How do
                you define friendship? In moments of competing interests, how do
                you provide counsel to those closest to you? How do you help
                them? How do you know that those around you bring a positive
                impact to you? Do you bring a positive influence to those close
                to you? Do you love for your brother or sister what you love for
                yourself?
              </p>
              <p>
                We encourage you to creatively explore these concepts and more
                in Regional and National competitions and workshops during MIST
                2024. Remember that unique projects displaying creativity and
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
