import React, { Component } from "react";
import Youtube from "react-youtube";
import "./YoutubeHolder.css";
import { isMobile } from "react-device-detect";

class YoutubeHolder extends Component {
  render() {
    var opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    if (isMobile) {
      opts = {
        height: window.innerWidth * 0.6,
        width: window.innerWidth,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    }

    return (
      <div className="videoHolder">
        <h1 className="numbersTitle">MIST HIGHLIGHTS</h1>
        <Youtube videoId="9HowMs4olrQ" opts={opts} />
      </div>
    );
  }
}

export default YoutubeHolder;
