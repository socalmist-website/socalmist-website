import React, { Component } from 'react';
import Youtube from 'react-youtube';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './YoutubeHolder.css';
import { isMobile } from 'react-device-detect';

class YoutubeHolder extends Component {
  render() { 
    var opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    if (isMobile) {
      opts = {
        height: window.innerWidth * 0.6,
        width: window.innerWidth,
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    }

    return (
      <div id="videoHolder">
        <Row className="justify-content-sm-center">
          <Col sm={6} className="centerAlign">
            <h1 className="numbersTitle">MIST 2019 Highlights</h1>
            <Youtube videoId="CnjbiC76ltY" opts={opts} />
          </Col>
        </Row>
      </div>
    );
  }
}
 
export default YoutubeHolder;