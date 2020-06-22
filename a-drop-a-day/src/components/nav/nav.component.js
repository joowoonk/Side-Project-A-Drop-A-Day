import React from "react";
import "./nav.styles.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useDarkMode from "../../hooks/useDarkMode";

import { logOut } from "../../redux/actions/userActions";

import { ReactComponent as Logo } from "../../assets/logo2.svg";
// import { useHistory } from "react-router";
const Nav = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const loggedIn = useSelector((state) => state.userReducer.login);
  const { push } = useHistory();

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const dispatch = useDispatch();

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
        <Link to="">HOME</Link>
        <a
          href="https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/"
          target="blank"
        >
          CONTACT
        </a>

        {/* LEARN HOW TO LOG OUT SHOWS WITHOUT HAVING DRY CODE ON APP */}
        {loggedIn || localStorage.token ? (
          <>
            <Link to="form">ADD</Link>
            <Link to="tomatoes">TOMATOES</Link>
            <Link
              onClick={() => {
                handleLogOut();
                push("/signin");
              }}
            >
              SIGN OUT
            </Link>
          </>
        ) : (
          <>
            <Link to="Signin">SIGN IN</Link>
          </>
        )}
      </div>
      {/* <button type="button" onClick={() => history.goBack()} /> */}
    </nav>
  );
};

export default Nav;
