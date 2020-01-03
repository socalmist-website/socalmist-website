import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import {Container, Row, Col, Image} from 'react-bootstrap';

class ThemePage extends React.Component {

  render() {
    const image = require("../../public/mist-theme-2020.png");
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Theme" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col sm={11} style={{"text-align":"center"}}>
              <Image width="100%" src={image} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={10} style={{"text-align":"center", "margin-top":"1.2em"}}>
              <h5>Trusting the Process: Contentment Through Adversity </h5>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={8} style={{"margin-top":"1em"}}>
             <p>As we pass through ever changing stages of our life (whether we are moving on from high school, moving to an unfamiliar place, or starting a new career path), we face an unknown future that may come with unsettling challenges. Greater hardships, like the passing of a loved one, can leave us confused, unstable, and hopeless. Through this adversity, it’s hard to refrain from asking, “Why am I going through this?” Being content when events don’t pan out the way that we planned becomes increasingly difficult as obstacles pile up on the path to our goals.</p>
             <p>“…God will find a way out for those who are mindful of Him, and will provide for them from an unexpected source; God will be enough for those who put their trust in Him…” (Qur’an 65:2-3). This passage from the Qur’an shows us how to be optimistic - even when the odds are against us - through the Islamic concept of Tawakkul, which means, “To trust in God.” This trust stems from an understanding that God is in control of our lives and has a plan for us that will lead to what is most appropriate for our lives. This doesn’t mean we should stop trying to create positive change around us; a man came to the Prophet Muhammad, peace be upon him, and asked him if he should tie his camel, or simply trust in God. The Prophet Muhammad, peace be upon him, replied, “Tie her up and trust in God,” (Tirmidhi). Tawakkul gives us a methodology for dealing with challenges, finding our place in the cosmos, and attaining contentment without becoming complacent with our circumstances. It is similar to concepts in modern psychology that also teach us how to persevere through tough times. One such method is called radical acceptance, which posits that accepting the reality of adversity can be a healthy way to deal with our challenges. Although we may not be able to change the problems we face, we can alter our perception towards them.</p>
             <p>When difficulties and uncertainties arrive in your life, how do you move forward and remain content? How do you support others who are facing their own challenges? How does Tawakkul - or your own view on destiny - inspire you to move beyond obstacles, reach your dreams, and find contentment in times of adversity? </p>
             <p>We encourage you to creatively explore these concepts, and more, in Regional and National competitions and workshops during MIST 2020. Remember that unique projects displaying creativity and insight will be judged most favorably.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { ThemePage };