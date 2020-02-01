import React, { Component } from 'react';
import "./Banner.css";
import {SocialIcon} from 'react-social-icons';
import {Container, Row, Col, Button} from 'react-bootstrap';
import windowSize from 'react-window-size';

class Banner extends Component {

  componentDidMount() {
    if (this.props.windowWidth < 576) {
      document.getElementById("backgroundPicture").setAttribute("style", "height:740px");
    }
  }

  render() {
    const appstoreImage = require('../../public/appstore.png');
    const playstoreImage = require('../../public/playstore.png');
    let buttons = (
      <Container fluid={true}>
          <Row className="justify-content-sm-center buttonRow">
            <Col lg={3} style={{'text-align':'center'}}>
            <a className="buttonLink" target="_blank" rel="noopener noreferrer" href="https://my.getmistified.com">
              {/* <div className = 'borderBox'> </div> */}
                  <div className='buttonDiv'>
                  
                    <span className='buttonText'><b>Register</b></span>
                    
                    </div>
                  
              </a>
              
                
            </Col>
            <Col lg={3} style={{'text-align':'center'}}>
              <a className="buttonLink" target="_blank" rel="noopener noreferrer" href="https://www.getmistified.com/news/2020/1/13/2020-competitions-rulebook">
              {/* <div className = 'borderBox'> </div> */}
               
                <div className='buttonDiv'>
                <span className='buttonText'><b>2020 Rulebook</b></span>

                
                </div>
              </a>
              
            </Col>
            <Col lg={3} className="centerAlign">
              <a className="buttonLink" href="https://socalmist.com/8th-grade" target="_blank" rel="noopener noreferrer">
              {/* <div className = 'borderBox'> </div> */}
               
                <div className='buttonDiv'>
                  <span className='buttonText'><b>8th Grade App</b></span>
                </div>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-sm-center buttonRow">
            <Col lg={3} className="centerAlign">
              <a className="buttonLink" href="https://socalmist.com/judge" target="_blank" rel="noopener noreferrer">
              {/* <div className = 'borderBox'> </div> */}
               
                <div className='buttonDiv'>
                  <span className='buttonText'><b>Judge</b></span>
                </div>
              </a>
              
            </Col>
            <Col lg={3} className="centerAlign">
              <a className="buttonLink" target="_blank" rel="noopener noreferrer" href="https://socalmist.com/volunteer">
              {/* <div className = 'borderBox'> </div> */}
               
                <div className='buttonDiv'>
                <span className='buttonText'><b>Volunteer</b></span>
                </div>
              </a>
              
            </Col>
            <Col lg={3} className="centerAlign">
              <a className="buttonLink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1M7iyi4tL9WI4nfo7mC4ZKYmKxrDsjpGnwyglmcKxf3I/edit?fbclid=IwAR1UCVIzu67NRl3q1DWIgLXCM3lEnK1K8f2y30mxPHydgW1lq3bXUkdPwNc">
              {/* <div className = 'borderBox'> </div> */}
               
                <div className='buttonDiv'>
                <span className='buttonText'><b>Join Our Mailing List!</b></span>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
    );
    let icons = (
      <Container className="iconContainer">
        <Row>
          <Col sm={4} className="leftIconBlock">
            <SocialIcon target="_blank" className="socialMediaIcon" url="https://www.facebook.com/SoCalMIST/" />
            <SocialIcon target="_blank" className="socialMediaIcon" url="https://www.instagram.com/socalmist/" />
            <SocialIcon target="_blank" className="socialMediaIcon" url="https://twitter.com/socalmist?lang=en" />
          </Col>
          <Col sm={4} style={{"text-align":"center"}}>
          </Col>
          <Col sm={4} className="rightIconBlock">
            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/get-mistified/id1341732029"><img className="appImage" alt="Apple App Store" src={appstoreImage} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.squarespace.getmistified"><img className="appImage" alt="Google Play Store" src={playstoreImage} /></a>
          </Col>
        </Row>
      </Container>
    );

    if (this.props.windowWidth < 992) {
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
            <Col xs={12} className="centerAlignIcons">
              <Button href="https://docs.google.com/forms/d/1M7iyi4tL9WI4nfo7mC4ZKYmKxrDsjpGnwyglmcKxf3I/edit?fbclid=IwAR1UCVIzu67NRl3q1DWIgLXCM3lEnK1K8f2y30mxPHydgW1lq3bXUkdPwNc" target="_blank" style={{"font-size": "1.5em"}} variant="light">Join Our Mailing List!</Button>
            </Col>
          </Row>
        </Container>
      )
    }

    if (this.props.windowWidth < 992) {
      buttons = (
        <div className="bannerSubInfoHolder">
          <h2 className="bannerSubHeader">Early Bird Registration is Now Open!</h2>
            <Button style={{"font-size": "1.5em"}} variant="light" href="https://my.getmistified.com" target="_blank">Register</Button>
        </div>
      );
    }

    return (
      <div id="backgroundPicture">
        <div className="bannerInfoHolder">
          <h1 className="bannerText">SoCal MIST 2020</h1>
        </div>
        {buttons}
        {icons}
      </div>
    );
  }
}
 
export default windowSize(Banner);