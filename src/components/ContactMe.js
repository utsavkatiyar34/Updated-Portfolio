import React from "react";
import "../styles/contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function ContactMe() {
  return (
    <div className="contact-div">
      <h2 style={{color:'#55198b',fontSize:'3.25vw',fontFamily:'font-family: Arial, sans-serif',textAlign:'center'}}>
        Contact Me
        <span role="img" aria-label="visible">
          ☎️
        </span>
      </h2>
      <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
      <p>+91-9653023447</p>
      <p>utsavkatiyar34@gmail.com</p>
      <div className="contact-social">
        <div className="contact-socialmedia">
          <a href="https://github.com/utsavkatiyar34" target="blank">
            <GitHubIcon
              sx={{
                color: "black",
                fontSize: "3vw",
              }}
            />
          </a>
        </div>
        <div className="contact-socialmedia">
          <a
            href="https://www.linkedin.com/in/utsav-katiyar-27635417a/"
            target="blank"
          >
            <LinkedInIcon
              sx={{
                color: "#0077b5",
                fontSize: "3vw",
              }}
            />
          </a>
        </div>
        <div className="contact-socialmedia">
          <a href="https://www.facebook.com/utsav.katiyar.39/" target="blank">
            <FacebookIcon
              sx={{
                color: "#3b5998",
                fontSize: "3vw",
              }}
            />
          </a>
        </div>
        <div className="contact-socialmedia">
          <a href="mailto:utsavkatiyar34@gmail.com">
            <MailIcon
              sx={{
                color: "#ea4335",
                fontSize: "3vw",
              }}
            />
          </a>
        </div>
        <div className="contact-socialmedia">
          <a href="https://twitter.com/utsav_katiyar" target="blank">
            <TwitterIcon
              sx={{
                color: "#55acee",
                fontSize: "3vw",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
