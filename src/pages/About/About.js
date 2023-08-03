import React from "react";
import gojo from "../../images/gojo.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img className="about-img" src={gojo} alt="" />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, accusantium? Sequi hic quam ab aspernatur corrupti
            dolorem iure vitae nemo ducimus quod. A officiis tempore ipsam?
            Ratione eius, beatae vel porro autem praesentium a nulla voluptatem
            sequi aliquid? Sapiente aperiam ratione dolorem voluptate quisquam
            architecto quos corrupti minus voluptatem ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
