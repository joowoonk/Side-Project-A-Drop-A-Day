import React from "react";
import "./about.styles.scss";
const About = () => {
  return (
    <div className="update">
      <div className="aboutme">
        <a
          style={{ textDecoration: "none" }}
          href="https://www.joowoonk.ga"
          target="_blank"
          className="card"
        >
          <img
            className="profile"
            src={require("./profile.png")}
            alt="my-personal-profile-picture"
            // className="logo"
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
          >
            www.linkedin.com/in/joo-woon
          </a>
        </div>
        <div className="contact">
          <i class="fa fa-envelope text-warning"></i>&nbsp;
          <a
            style={{ textDecoration: "none" }}
            href="mailto:engineerforlifejohn@gmail.com"
            target="_blank"
          >
            engineerforlifejohn@gmail.com
          </a>
        </div>
        <div className="contact">
          <i class="fab fa-twitter"></i>&nbsp;
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://twitter.com/johnwhoprograms"
          >
            @johnwhoprograms
          </a>
        </div>
        <div className="contact">
          <i class="fab fa-github text-warning"></i>&nbsp;
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/joowoonk"
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
