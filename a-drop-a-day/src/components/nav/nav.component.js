import React from "react";
import "./nav.styles.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
// import { useHistory } from "react-router";
const Nav = () => {
  // const history = useHistory();
  // console.log(history);
  return (
    <nav className="topNav">
      <Logo className="logo" />
      <div className="menuNav">
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Sign-in">Sign In/Out</Link>
      </div>
      {/* <button type="button" onClick={() => history.goBack()} /> */}
    </nav>
  );
};

export default Nav;
