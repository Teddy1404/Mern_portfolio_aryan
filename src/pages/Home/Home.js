import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Resume from "../../assets/docs/resume.txt";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hi I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Mern Stack Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-button">
            <button class="custom-btn btn-3 btn-hire">
              <span>Hire me</span>
            </button>
            <button class="custom-btn btn-3 btn-resume">
              <span>
                <a href={Resume} download="Resume.pdf">
                  My Resume
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
