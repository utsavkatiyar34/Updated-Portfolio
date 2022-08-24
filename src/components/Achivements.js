import React from "react";
import "../styles/achivements.css";
export default function Achivements() {
  return (
    <div className="achive-maindiv">
      <h2 className="achive-maindivh2">Achivements</h2>
      <div className="achivements-wrapper">
        <div className="achivement-div">
          <img
          alt=""
          src={require("../images/hackerrankcertificate.png")} />
          <h3 className="achivement-divh3">HackerRank Problem Solving (Basic) Certificate</h3>
          <p>
            It covers basic topics of Data Structures (such as Arrays, Strings)
            and Algorithms (such as Sorting and Searching).
          </p>
        </div>
        <div className="achivement-div">
          <img src={require("../images/problemsolverintermediate.png")}
          alt=""
          />
          <h3 className="achivement-divh3">HackerRank Problem Solving (Intermediate) Certificate</h3>
          <p>
          It covers the problems related to topics of Data Structures
          and Algorithms.
          </p>
        </div>
        
      </div>

      <div className="achivements-wrapper">
        <div className="achivement-div">
          <img
          alt=""
          src={require("../images/ICRAMME 22 Certificate .jpg")} />
          <h3 className="achivement-divh3">IRCAMME Reserch Paper Presentation</h3>
          <p>
            Reserch paper presented and submitted successfully on the topic "A Study on Physical and Mechanical Properties of Green Composite" during the major project of our Graduation.
          </p>
        </div>
        <div className="achivement-div">
          <img src={require("../images/internship.jpg")}
          alt=""
          />
          <h3 className="achivement-divh3">Automobiles & Electric vehicle internship Certificate</h3>
          <p>
            During the internship I learned about IC engine Automobiles &
            electric vehicles and its components.
          </p>
        </div>
      </div>
      
        <div className="achivement-div" style={{marginLeft:'auto',marginRight:'auto'}}>
          <img src={require("../images/PowerProject.jpg")}
          alt=""
          />
          <h3 className="achivement-divh3">The Power Project award</h3>
          <p>
            Our team won this award two times for our construct week projects, Banggood Clone (Third position) and Amazon Prime Clone (First position)
          </p>
        </div>
        
    </div>
  );
}
