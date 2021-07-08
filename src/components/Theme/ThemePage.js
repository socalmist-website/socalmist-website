import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Container, Row, Col, Image } from "react-bootstrap";

class ThemePage extends React.Component {
  render() {
    const image = require("../../public/mist-theme-2021.png");
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
              <h5>The Character of Community: Healing Together as One</h5>
              <h6>(2021 Theme)</h6>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={8} style={{ "margin-top": "1em" }}>
              <p>
                COVID-19 affected our lives in ways previously unimaginable.
                Throughout the turbulence of the past year, communities around
                the world have come together to assist those in need, highlight
                and fight injustice, and stand with frontline workers. Despite
                the mandated physical distance between us, our communities and
                social circles have often drawn closer in the face of profound
                tragedy.
              </p>
              <p>
                Although our communities have rallied in some respects, we
                remain deeply divided in other ways. Racism, sectarianism, and
                elitism were rampant before the pandemic, and continue to be
                present. Arrogance, power-seeking, and a lack of compassion
                drive some of us away from communities where we once felt
                welcome. Crisis will often make existing divisions worse while
                reinforcing the importance of strong communities at the same
                time. The station of community bonds was emphasized by the
                Prophet Muhammad, peace be upon him, who is reported to have
                said: “Verily, the believers are like a structure, each part
                strengthening the other…” (Bukhari, Muslim).
              </p>
              <p>
                The current situation where we find ourselves can take us down
                two paths, according to incoming Surgeon General Dr. Vivek
                Murthy: one leads to further isolation, loneliness, and their
                negative mental and physical effects, and the other is to
                “...use this moment to recenter our lives on people. And if we
                do that, then I believe we can come out of this pandemic more
                connected, more fulfilled and more resilient than before the
                pandemic began.”
              </p>
              <p>
                What are some characteristics of strong and resilient
                communities? Do you feel included in your community? How do
                discrimination, racism, and bias affect communal bonds? How has
                the COVID-19 pandemic brought out the best in your community?
                Can we utilize our periods of solitude to better understand our
                social needs and responsibilities?
              </p>
              <p>
                We encourage you to creatively explore these concepts and more
                in online Regional and National competitions and workshops
                during MIST 2021. Remember that unique projects displaying
                creativity and insight will be judged most favorably.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { ThemePage };
