import React from "react";
// import gojo from "../../images/gojo.jpg";
import "./About.css";
import me from "../../images/aboutme.jpg";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img className="about-img" src={me} alt="" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                Hello, I am Aryan Singh Chandel, currently pursuing my B.Tech at
                IIIT Bhopal. I have a passion for web development, and I
                specialize in ReactJS and MERN stack development. Additionally,
                I am well-versed in C++ programming and enjoy solving coding
                challenges. Being a developer, I constantly seek opportunities
                to enhance my skills and stay updated with the latest
                technologies. My dedication to coding and problem-solving drives
                me to create efficient and innovative solutions. I am excited to
                explore new possibilities in the world of software development
                and make a positive impact through my work.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
