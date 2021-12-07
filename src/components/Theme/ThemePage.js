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
                The Conviction in Courage: Finding the Balance between Fear and
                Risk
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={8} style={{ "margin-top": "1em" }}>
              <p>
                The past 20 months have been demanding as we collectively cope
                with a global pandemic, giving rise to protests and conflict at
                home and abroad. These events have grabbed our attention as we
                witness the challenges our brothers and sisters endure and are
                awed by the determination and courage they possess. These months
                have not been kind on our bodies and minds, yet we are asked by
                our community to remain steadfast, to withstand these moments,
                and keep faith that this will pass.
              </p>
              <p>
                Often, when we think of courage, we look to the physical and
                moral manifestation of it, imagining a fearless individual
                standing firm in a protest, or those willing to make the tough
                decisions in challenging situations. Philosophers such as Plato
                or Aristotle discussed courage as a trait set aside for those
                that do not fear death. However, we can look towards the
                teachings of the Prophet Muhammad (may peace and blessings be
                upon him) on how we can remain strong and demonstrate courage in
                various forms. At a time where we are surrounded with
                injustices, "a word of truth spoken before an unjust ruler"
                (an-Nasa'i) is the best form of struggle. We remember
                maintaining self-control is where true strength lies for a
                believer for "the strong man is one who controls himself in
                anger" (Bukhari).
              </p>
              <p>
                However, sometimes our courage and our conviction to stand firm
                can be tested or shaken by the outcomes and consequences of our
                decisions and we may begin to question our yaqeen, our solid
                conviction (certainty). Instead of giving into despair, we can
                use this opportunity to become closer to Allah and have the
                courage to hold firm in our beliefs and not have our faith
                deterred as we have been told that "the strong believer is
                better and more beloved to Allah" (Muslim). As we experience
                tragedies and undergo failures that shake our core, we remain
                patient and accept the order of Allah for "Allah does not decree
                anything for the believer except what is good for him" (Ahmad).
              </p>
              <p>
                How do you define courage and instill this characteristic into
                situations that arise in your life? How can we harness our
                courage to serve our communities while taking care of ourselves?
                How do we strike the balance between the courage we inwardly and
                outwardly demonstrate? How do we navigate our vulnerabilities as
                a part of being courageous? What are ways to value and support
                those who have taken a stand when it's needed? How can we
                maintain our beliefs when making hard decisions?
              </p>
              <p>
                We encourage you to creatively explore these concepts and more
                in online and in-person Regional and National competitions and
                workshops during MIST 2022. Remember that unique projects
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
