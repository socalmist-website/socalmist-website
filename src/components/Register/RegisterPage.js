import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./RegisterPage.css";
import {Container, Row, Col, Image, Button} from 'react-bootstrap';

class RegisterPage extends React.Component {
  styles = {
    fontWeight: "bold"
  };
  render() {
    const image = require("../../public/early-bird-banner.png")
    const pdf = require("../../public/registration.pdf")
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Register" />
        <Container id="ambassadorsContainer">
          <Row className="justify-content-sm-center">
            <Col sm={6}>
              <Image fluid={true} src={image} />
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col sm={6} className="registerButtonHolder">
              <Button id="registerButton" variant="primary" href="https://my.getmistified.com" target="_blank">Register</Button>
            </Col>
          </Row>
          <Row style={{"margin-top":"3em", "margin-bottom":"3em"}} className="justify-content-sm-center">
            <Col sm={8}>
              <iframe title="registrationPdf" src={pdf} width="100%" height="950"></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
    // const image = require("../../public/ambassadors.jpg");

    // return (
    //   <div>
    //     <Header />
    //     <PageTitle pageTitle="Registration Steps" />
    //     <Container id="registrationContainer">
    //       <Row className="justify-content-sm-center">
    //         <Col sm={7}>
    //           <h2>Step 1</h2>
    //           <Image fluid={true} src={image} />
    //         </Col>
    //       </Row>
    //       <Row className="justify-content-sm-center">
    //         <Col sm={7}>
    //           <h2>Step 2</h2>
    //           <Image fluid={true} src={image} />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    // );
  }
}

export { RegisterPage };
