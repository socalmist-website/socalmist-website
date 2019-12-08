import React, { Component } from 'react';
import "./Banner.css";
import {SocialIcon} from 'react-social-icons';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import windowSize from 'react-window-size';

class Banner extends Component {
  render() {
    const appstoreImage = require('../../public/appstore.png');
    const playstoreImage = require('../../public/playstore.png');
    let icons = (
      <Container className="iconContainer">
        <Row>
          <Col sm={6} className="leftIconBlock">
            <SocialIcon target="_blank" className="socialMediaIcon" url="https://www.facebook.com/SoCalMIST/" />
            <SocialIcon target="_blank" className="socialMediaIcon" url="https://www.instagram.com/socalmist/" />
            <SocialIcon target="_blank" className="socialMediaIcon" url="https://twitter.com/socalmist?lang=en" />
          </Col>
          <Col sm={6} className="rightIconBlock">
            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/get-mistified/id1341732029"><img className="appImage" alt="Apple App Store" src={appstoreImage} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.squarespace.getmistified"><img className="appImage" alt="Google Play Store" src={playstoreImage} /></a>
          </Col>
        </Row>
      </Container>
    );

    if (this.props.windowWidth < 576) {
      icons = (
        <Container className="smallIconContainer">
          <Row>
            <Col xs={12} className="centerAlign">
              <SocialIcon className="socialMediaIcon" url="https://www.facebook.com/SoCalMIST/" />
              <SocialIcon className="socialMediaIcon" url="https://www.instagram.com/socalmist/" />
              <SocialIcon className="socialMediaIcon" url="https://twitter.com/socalmist?lang=en" />
              <SocialIcon className="socialMediaIcon" url="https://www.instagram.com/socalmist/" />
            </Col>
            <Col xs={12} className="centerAlignIcons">
              <a href="https://apps.apple.com/us/app/get-mistified/id1341732029"><img className="appImage" alt="Apple App Store" src={appstoreImage} /></a>
              <a href="https://play.google.com/store/apps/details?id=com.squarespace.getmistified"><img className="appImage" alt="Google Play Store" src={playstoreImage} /></a>
            </Col>
          </Row>
        </Container>
      )
    }

    return (
      <div className="backgroundPicture">
        <div className="bannerInfoHolder">
          <h1 className="bannerText">SoCal MIST 2020</h1>
        </div>
        <div className="bannerSubInfoHolder">
          <h2 className="bannerSubHeader">Registration opens January 1st</h2>
          <Button id="bannerButton" variant="light">Register</Button>
        </div>
        {icons}
      </div>
    );
  }
}
 
export default windowSize(Banner);