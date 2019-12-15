import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import { Row, Col } from 'react-bootstrap';

class ContactPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Contact" />
        <Row className="justify-content-sm-center">
            <Col sm="7" style={{"text-align": "center", "font-weight":"bold", "margin-top":"2em"}}>
              <h3>
                If you would like to contact us, please email us at socal@getmistified.com.
              </h3>
            </Col>
        </Row>
      </div>
    );
  }
}

export { ContactPage };