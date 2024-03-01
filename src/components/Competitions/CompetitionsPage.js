import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Row, Col } from "react-bootstrap";

class CompetitionsPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Competitions" />
        <Row className="justify-content-sm-center">
          <Col
            sm="7"
            style={{
              "text-align": "center",
              "font-weight": "bold",
              "margin-top": "2em",
            }}
          >

          </Col>
        </Row>
      </div>
    );
  }
}

export { CompetitionsPage };
