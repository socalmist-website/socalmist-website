import React from "react";
import "./Contact.css";
import EmailLogo from "../../../public/Home/EmailLogo.png";
import InstagramLogo from "../../../public/Home/InstaLogo.png";
import ThreadsLogo from "../../../public/Home/ThreadsLogo.png";
import TikTokLogo from "../../../public/Home/TiktokLogo.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="home-contact-container">
        <h2 className="home-contact-title">Contact Us</h2>
        <div className="home-contact-row-container">
          <div className="row home-contact-row">
            <div className="col home-contact-col">
              <a href="/contact/email">
                <img src={EmailLogo} className="home-contact-button" />
              </a>
            </div>
            <div className="col home-contact-col">
              <a href="https://www.instagram.com/socalmist/">
                <img src={InstagramLogo} className="home-contact-button" />
              </a>
            </div>
            <div className="col home-contact-col">
              <a href="https://www.threads.net/@socalmist">
                <img src={ThreadsLogo} className="home-contact-button" />
              </a>
            </div>
            <div className="col home-contact-col">
              <a href="/contact/tiktok">
                <img src={TikTokLogo} className="home-contact-button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
