import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { PageSubTitle } from "../Header/PageSubTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./SpiritPage.css";

class SpiritPage extends React.Component {

  render() {

    // const colStyle =
    //   this.props.windowWidth < 992
    //     ? { paddingLeft: "2em", paddingRight: "2em" }
    //     : { paddingLeft: "2em", paddingRight: "2em" };

    return (
      <div>
        <Header />
        <PageTitle pageTitle="Spirit" />
        <PageSubTitle pageSubTitle="" />
        <p></p>
        <Container>
          {/* <Row className="justify-content-sm-center" >
            <Col sm="7">
              <p>SoCal MIST is committed to recruiting motivated volunteers who are dedicated to making MIST a successful event!</p>
            </Col>
          </Row>
          <Row className="justify-content-sm-center" >
            <Col sm="7">
              <h5>Qualifications</h5>
              <ul>
                <li>
                  <p>18 years or older</p>
                </li>
                <li>
                  <p>Demonstrate a high level of motivation, maturity, and leadership</p>
                </li>
              </ul>
            </Col>
          </Row> */}
          <Row className="justify-content-sm-center">
            <Col className="sponsorFormHolder d-flex justify-content-center" style={{ paddingLeft: "2em", paddingRight: "2em" }}>
              <iframe
                title="sponsorForm"
                style={{
                  width: "100%",
                  maxWidth: "740px",
                  minHeight: "620px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFMIF1DPYYqKaMWUrxzcDiy-wocdC8rDRvLmSnujpcsTTaPm-h0k4AtHFCj3G6jtprQmiBQLze1tde/pubchart?oid=6343663&amp"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
              {/* <iframe
                width="705"
                height="389"
                seamless frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFMIF1DPYYqKaMWUrxzcDiy-wocdC8rDRvLmSnujpcsTTaPm-h0k4AtHFCj3G6jtprQmiBQLze1tde/pubchart?oid=6343663&amp;format=interactive%22%3E"
              >
              </iframe> */}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { SpiritPage };