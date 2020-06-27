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
const Nav = ({ isStopping, setIsStopping }) => {
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
        <Link
          onClick={() => {
            if (isStopping) {
              push("/");
            }
          }}
        >
          HOME
        </Link>
        <Link
          onClick={() => {
            if (isStopping) {
              window.open(
                "https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/"
              );
            }
          }}
        >
          CONTACT
        </Link>

        {/* LEARN HOW TO LOG OUT SHOWS WITHOUT HAVING DRY CODE ON APP */}
        {loggedIn || localStorage.token ? (
          <>
            {/* //isStopping needs to be false when this onClick is disabled. */}
            <Link
              onClick={() => {
                if (isStopping) {
                  push("/form");
                }
              }}
            >
              ADD
            </Link>
            <Link
              onClick={() => {
                push("/tomatoes");
              }}
            >
              TOMATOES
            </Link>
            <Link
              onClick={() => {
                if (isStopping) {
                  handleLogOut();
                  push("/signin");
                }
              }}
            >
              SIGN OUT
            </Link>
          </>
        ) : (
          <>
            <Link onClick={() => push("/Signin")}>SIGN IN</Link>
          </>
        )}
      </div>
      {/* <button type="button" onClick={() => history.goBack()} /> */}
    </nav>
  );
};

export default Nav;
