import React from "react";
import gojo from "../../images/gojo.jpg";
import "./Menu.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={gojo} alt="profile pic" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>

              <div className="nav-link">
                <FcAbout />
                About
              </div>

              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>

              <div className="nav-link">
                <FcBiotech />
                Tech stack
              </div>

              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>

              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>

              <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div>

              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome size={35} title="Home" />
              </div>

              <div className="nav-link">
                <FcAbout size={35} title="About" />
              </div>

              <div className="nav-link">
                <FcPortraitMode size={35} title="Work Experience" />
              </div>

              <div className="nav-link">
                <FcBiotech size={35} title="Techstack" />
              </div>

              <div className="nav-link">
                <FcReadingEbook size={35} title="Eductaion" />
              </div>

              <div className="nav-link">
                <FcVideoProjector size={35} title="Projects" />
              </div>

              <div className="nav-link">
                <FcVoicePresentation size={35} title="Testimonial" />
              </div>

              <div className="nav-link">
                <FcBusinessContact size={35} title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
