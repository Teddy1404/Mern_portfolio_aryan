import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Resume from "../../assets/docs/Resumearyan.pdf";
import Fade from "react-reveal/Fade";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleClick = () => {
    setTheme((PrevState) => (PrevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container " id="home">
        <div className="theme-btn" onClick={handleClick}>
          {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Mern Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=918966992318"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Resume.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
