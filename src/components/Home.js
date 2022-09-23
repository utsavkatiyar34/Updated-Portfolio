import React from "react";
import "../styles/home.css";
import Skills from "./Skills";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Projects from "./Projects";
import Education from "./Education";
import Achivements from "./Achivements";
import ContactMe from "./ContactMe";
export default function Home() {
  return (
    <div className="home-body">
      <div className="home-intro">
        <div className="home-intro-text">
          <h2 style={{color:'#55198b',fontSize:'3.5vw',fontFamily:'font-family: Arial, sans-serif'}}>
            Hi! I'm, Utsav{" "}
            <span class="wave" role="img" aria-label="visible">
              👋
            </span>
          </h2>
          <p>
            A passionate Full Stack Web Developer having an experience of
            building Web applications with JavaScript, React.Js, Node.Js and
            some other useful libraries and frameworks.
          </p>
          <div className="home-social">
            <div className="home-socialmedia">
              <a href="https://github.com/utsavkatiyar34" target="blank">
                <GitHubIcon
                  sx={{
                    color: "black",
                    fontSize: "3vw",
                  }}
                />
              </a>
            </div>
            <div className="home-socialmedia">
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
            <div className="home-socialmedia">
              <a
                href="https://www.facebook.com/utsav.katiyar.39/"
                target="blank"
              >
                <FacebookIcon
                  sx={{
                    color: "#3b5998",
                    fontSize: "3vw",
                  }}
                />
              </a>
            </div>
            <div className="home-socialmedia">
              <a
                href="mailto:utsavkatiyar34@gmail.com"
              >
              <MailIcon
                sx={{
                  color: "#ea4335",
                  fontSize: "3vw",
                }}
              />
              </a>
            </div>
            <div className="home-socialmedia">
              <a
                href="https://twitter.com/utsav_katiyar"
                target="blank"
              >
              <TwitterIcon 
               sx={{
                color: "#55acee",
                fontSize: "3vw",
              }}/>
              </a>
            </div>
          </div>
          <div className="home-buttons">
            <a
              href="https://www.linkedin.com/in/utsav-katiyar-27635417a/"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="solid"
                sx={{
                  color: "white",
                  backgroundColor: "#55198b",
                  borderColor: "#55198b",
                  marginLeft: "auto",
                  marginRight: "2vw",
                  fontSize: "1.5vw",
                  "&:hover": { backgroundColor: "#55198b" },
                }}
              >
                CONTACT ME
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1vzFdU3CHyCoERWNev5RxPnMQG9tX3ULs/view?usp=sharing"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="solid"
                sx={{
                  color: "white",
                  backgroundColor: "#55198b",
                  borderColor: "#55198b",
                  marginLeft: "auto",
                  marginRight: "2vw",
                  fontSize: "1.5vw",
                  "&:hover": { backgroundColor: "#55198b" },
                }}
              >
                SEE RESUME
              </Button>
            </a>
          </div>
        </div>
        <div style={{width:'100%',height:'100%'}}>
          <div style={{width:'100%',height:'100%'}}>
            <img style={{width:'100%',height:'100%'}} alt="myimage" src={require("../images/Myimage.png")} />
          </div>
        </div>
      </div>
      <div className="padder"></div>
      <Skills />
      <div className="padder"></div>
      <Projects />
      <div className="padder"></div>
      <Education />
      <div className="padder"></div>
      <Achivements />
      <div className="padder"></div>
      <ContactMe />
    </div>
  );
}
