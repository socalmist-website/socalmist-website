import React from "react";
import { Col, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";

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
          </Col>
        </Row>
      </div>
    );
  }
}

export { ContactPage };
