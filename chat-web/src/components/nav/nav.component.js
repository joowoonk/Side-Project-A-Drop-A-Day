import React from "react";
import "./nav.styles.scss";

const Nav = () => {
  return (
    <nav className="topNav">
      <h1 className="logo">Logo</h1>
      <div className="menuNav">
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
        <a href="Sign-in">Sign In/Out</a>
      </div>
    </nav>
  );
};

export default Nav;
