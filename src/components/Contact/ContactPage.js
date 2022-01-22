import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Row, Col } from "react-bootstrap";

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Contact" />
        <Row className="justify-content-sm-center">
          <Col
            sm="7"
            style={{
              "text-align": "center",
              "font-weight": "bold",
              "margin-top": "2em",
            }}
          >
            <h5>
              For any general questions you have about SoCal MIST, please
              contact us at: socal@getmistified.com
            </h5>
            {/* <iframe
              title="contactForm"
              style={{ width: "100%" }}
              src="https://docs.google.com/forms/d/e/1FAIpQLSdJPZPOYnoUhayld2egI7wbOZ1Y1GPCOM2eGTCaYpd3mAwDcA/viewform?embedded=true"
              width="640"
              height="790"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export { ContactPage };
