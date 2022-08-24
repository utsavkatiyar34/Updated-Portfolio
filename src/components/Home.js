import React from "react";
import "../styles/home.css";
import Skills from "./Skills";
import { Button } from '@mui/material';
import Projects from "./Projects";
import { SocialMediaIconsReact } from "social-media-icons-react";
import Education from "./Education";
import Achivements from "./Achivements";
import ContactMe from "./ContactMe";
export default function Home() {
  return (
    <div className="home-body">
      <div className="home-intro">
        <div className="home-intro-text">
          <h2 className="mainheading">
            Hi! I'm, Utsav <span class="wave" role="img" aria-label="visible">👋</span>
          </h2>
          <p>
            A passionate Full Stack Web Developer having an experience of
            building Web applications with JavaScript, React.Js, Node.Js and
            some other useful libraries and frameworks.
          </p>
          <div className="home-social">
            <div className="home-socialmedia">
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
            <div className="home-socialmedia">
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
            <div className="home-socialmedia">
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
            <div className="home-socialmedia">
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
            <div className="home-socialmedia">
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
          <div className="home-buttons">
            <a href="https://www.linkedin.com/in/utsav-katiyar-27635417a/" target="blank" style={{textDecoration:"none"}}>
              <Button  variant="solid"
            sx={{
            color: "white",
            backgroundColor: "purple",
            borderColor: "purple",
            marginLeft:'auto',
            marginRight:'2vw',
            fontSize:'1.5vw',
            "&:hover": { backgroundColor: "purple" },
            }}>CONTACT ME</Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1vKQS1jeamcg00d9Ha0qX-KQAaL42z788/view?usp=sharing"
              target="blank"
              style={{textDecoration:"none"}}
            >
              <Button  variant="solid"
            sx={{
              color: "white",
              backgroundColor: "purple",
              borderColor: "purple",
              marginLeft:'auto',
              marginRight:'2vw',
              fontSize:'1.5vw',
              "&:hover": { backgroundColor: "purple" },
            }}>SEE RESUME</Button>
            </a>
          </div>
        </div>
        <div className="home-intro-image">
          <div>
            <img 
            alt="myimage"
            src={require("../images/Myimage.png")} />
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
