import React from "react";
import "./nav.styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useDarkMode from "../../hooks/useDarkMode";

import { logOut } from "../../redux/actions/userActions";

import { ReactComponent as Logo } from "../../assets/logo2.svg";
// import { useHistory } from "react-router";
const Nav = (props) => {
  const loginState = useSelector((state) => state.userReducer.login);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const dispatch = useDispatch();
  // console.log({ loginState });

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className="topNav">
      <Logo
        onClick={(e) => {
          toggleMode(e);
        }}
        className={darkMode ? " logo toggle toggled" : "toggle logo"}
        // className="logo"
      />
      <div className="menuNav">
        <Link to="Home">HOME</Link>
        <Link to="Contact">ABOUT</Link>

        {!localStorage.token ? (
          <>
            <Link to="Signin">SIGN IN</Link>
          </>
        ) : (
          <>
            <Link to="form">ADD</Link>
            <Link to="tomatoes">TOMATOES</Link>
            <Link
              onClick={() => {
                handleLogOut();
              }}
            >
              SIGN OUT
            </Link>
          </>
        )}
      </div>
      {/* <button type="button" onClick={() => history.goBack()} /> */}
    </nav>
  );
};

export default Nav;
