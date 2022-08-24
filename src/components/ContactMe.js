import React from "react";
import "../styles/contact.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
export default function ContactMe() {
  return (
    <div className="contact-div">
      <h2 className="contact-divh2">
        Contact Me <span role="img" aria-label="visible">☎️</span>
      </h2>
      <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
      <p>+91-9653023447</p>
      <p>utsavkatiyar34@gmail.com</p>
      <div className="contact-social">
        <div className="contact-socialmedia">
          <SocialMediaIconsReact
            borderColor="black"
            icon="github"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="black"
            url="https://github.com/utsavkatiyar34"
            target="blank"
            size="3.25vw"
            roundness="50%"
          />
        </div>
        <div className="contact-socialmedia">
          <SocialMediaIconsReact
            borderColor="blue"
            icon="linkedin"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="blue"
            url="https://www.linkedin.com/in/utsav-katiyar-27635417a/"
            target="blank"
            size="3.25vw"
            roundness="50%"
          />
        </div>
        <div className="contact-socialmedia">
          <SocialMediaIconsReact
            borderColor="blue"
            icon="facebook"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="blue"
            url="https://www.facebook.com/utsav.katiyar.39/"
            target="blank"
            size="3.25vw"
            roundness="50%"
          />
        </div>
        <div className="contact-socialmedia">
          <SocialMediaIconsReact
            borderColor="red"
            icon="mail"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="red"
            url="mailto:utsavkatiyar34@gmail.com"
            size="3.25vw"
            roundness="50%"
          />
        </div>
        <div className="contact-socialmedia">
          <SocialMediaIconsReact
            borderColor="blue"
            icon="twitter"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="blue"
            url="https://twitter.com/utsav_katiyar"
            target="blank"
            size="3.25vw"
            roundness="50%"
          />
        </div>
      </div>
    </div>
  );
}
