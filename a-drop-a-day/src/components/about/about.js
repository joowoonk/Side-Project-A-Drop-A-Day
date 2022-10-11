import React from "react";
import "./about.styles.scss";
const About = () => {
  return (
    <div className="update">
      <div className="aboutme">
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/joowoonk/"
          target="_blank"
          className="card"
          alt="portfolio"
        >
          <img
            className="profile"
            src={require("../../assets/profile.png")}
            alt="my-personal-profile-picture"
          />
        </a>
        <hr />
        <h3>
          If you run into any bugs or issues send me a message to get it fixed.
          I will handle all of the technical details and making sure you have a
          smooth experience.
        </h3>
        <hr />
        <div className="contact">
          <i class="fab fa-linkedin-in text-warning"></i>&nbsp;
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/"
            alt="linkedIn link"
          >
            joowoonk
          </a>
        </div>
        <div className="contact">
          🖼&nbsp;
          <a
            style={{ textDecoration: "none" }}
            href="mailto:joowoonk@gmail.com"
            target="_blank"
            alt="email address joowoonk@gmail.com"
          >
            joowoonk@gmail.com
          </a>
        </div>
        <div className="contact">
          💎&nbsp;
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/joowoonk"
            alt="github"
          >
            github.com/joowoonk
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;
