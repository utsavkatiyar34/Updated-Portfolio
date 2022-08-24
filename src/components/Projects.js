import React from "react";
import { Button } from '@mui/material';
import "../styles/Projects.css";
export default function Projects() {
  return (
    <div className="projects-maindiv">
      <h2 style={{color:'#55198b',fontSize:'3.25vw',fontFamily:'font-family: Arial, sans-serif',textAlign:'center'}}>My Project Works</h2>
      <div className="projects-maindiv-mainsection">
        <div className="projects-information">
          <h2 style={{color:'#55198b',fontSize:'2.5vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Nykaa Website Clone</h2>
          <p>
            Nykaa is India's biggest e-commerce cosmetics website. We cloned the
            Nykaa website and it was a collaborative project with a team of
            three members was completed in five days.
          </p>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Tech-stack</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Area of responsibilities</h3>
          <ul>
            <li>I created the homepage.</li>
            <li>I created the skin page.</li>
            <li>I gave the final touches to the project.</li>
          </ul>
        </div>
        <div className="projects-image-wrapper">
          <a
            // className="probtn-link"
            href="https://6226334f60db02083f69e8c9--practical-jepsen-45a6ea.netlify.app/"
            target="blank"
            style={{textDecoration:"none",width:'14vw',marginRight:'0px',marginLeft:'auto',padding:'0px'}}
          >
           <Button  variant="solid"
            sx={{
            color: "white",
            backgroundColor: "#55198b",
            borderColor: "#55198b",
            marginLeft:'auto',
            marginRight:'0',
            fontSize:'1.5vw',
            "&:hover": { backgroundColor: "#55198b" },
            }}>VIEW PROJECT</Button>
          </a>
          <img 
          alt=""
          src={require("../images/Nykaa.png")} />
        </div>
      </div>
      <div className="projects-maindiv-mainsection">
        <div className="projects-information">
          <h2 style={{color:'#55198b',fontSize:'2.5vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Practo Clone</h2>
          <p>
            Practo is one of India's leading healthcare consultation website. We
            cloned the Practo website and it was a collaborative project with a
            team of five members was completed in five days.{" "}
          </p>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Tech-stack</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JSON-server</li>
          </ul>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Area of responsibilities</h3>
          <ul>
            <li>I created the homepage.</li>
            <li>I created the login page.</li>
            <li>I created the sign-up page.</li>
            <li>I gave the final touches to the project.</li>
          </ul>
        </div>
        <div className="projects-image-wrapper">
          <a
            // className="probtn-link"
            href="https://papaya-salamander-3f0af6.netlify.app/practo-clone/html/home.html"
            target="blank"
            style={{textDecoration:"none",width:'14vw',marginRight:'0px',marginLeft:'auto',padding:'0px'}}
          >
            <Button  variant="solid"
            sx={{
            color: "white",
            backgroundColor: "#55198b",
            borderColor: "#55198b",
            marginLeft:'auto',
            marginRight:'0',
            fontSize:'1.5vw',
            "&:hover": { backgroundColor: "#55198b" },
            }}>VIEW PROJECT</Button>
          </a>
          <img
          alt=""
          src={require("../images/Practo.png")} />
        </div>
      </div>
      <div className="projects-maindiv-mainsection">
        <div className="projects-information">
          <h2 style={{color:'#55198b',fontSize:'2.5vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Banggood Clone</h2>
          <p>
          Clone of banggood.com which is an international online selling platform from China.{" "}
          </p>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Tech-stack</h3>
          <ul>
            <li>ReactJs</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JSON-server</li>
          </ul>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Area of responsibilities</h3>
          <ul>
            <li>I had created the navbar.</li>
            <li>I had done the Routing.</li>
            <li>Gave final touches with the team.</li>
          </ul>
        </div>
        <div className="projects-image-wrapper">
          <a
            // className="probtn-link"
            href="https://banggood-site-clone.netlify.app/"
            target="blank"
            style={{textDecoration:"none",width:'16vw',marginRight:'0px',marginLeft:'auto',padding:'0px'}}
          >
            <Button  variant="solid"
            sx={{
            color: "white",
            backgroundColor: "#55198b",
            borderColor: "#55198b",
            marginLeft:'auto',
            marginRight:'0',
            fontSize:'1.5vw',
            "&:hover": { backgroundColor: "#55198b" },
            }}>VIEW PROJECT</Button>
          </a>
          <img
          alt=""
          src={require("../images/Banggood.png")} />
        </div>
      </div>
      <div className="projects-maindiv-mainsection">
        <div className="projects-information">
          <h2 style={{color:'#55198b',fontSize:'2.5vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Amazon Prime Clone</h2>
          <p>
            Amazon Prime is one of the best OTT platform. With a wide range of content.
          </p>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Tech-stack</h3>
          <ul>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>Material-UI</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JSON-server</li>
          </ul>
          <h3 style={{color:'#55198b',fontSize:'2vw',fontFamily:'font-family: Arial, sans-serif',margin:'0px'}}>Area of responsibilities</h3>
          <ul>
            <li>I created the store page with JSON-server data.</li>
            <li>I created the login and signup page functionality (Authentication).</li>
            <li>Gave the final touches to the project with team.</li>
          </ul>
        </div>
        <div className="projects-image-wrapper">
          <a
            // className="probtn-link"
            href="https://github.com/Pritesh0-0/Amazon-Prime-Video-Clone"
            target="blank"
            style={{textDecoration:"none",width:'16vw',marginRight:'0px',marginLeft:'auto',padding:'0px'}}
          >
            <Button  variant="solid"
            sx={{
            color: "white",
            backgroundColor: "#55198b",
            borderColor: "#55198b",
            marginLeft:'auto',
            marginRight:'0',
            fontSize:'1.5vw',
            "&:hover": { backgroundColor: "#55198b" },
            }}>VIEW PROJECT</Button>
          </a>
          <img
          alt=""
          src={require("../images/Amazonprime.png")} />
        </div>
      </div>
    </div>
  );
}
