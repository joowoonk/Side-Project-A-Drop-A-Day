/* eslint-disable jsx-a11y/anchor-is-valid */
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
  const darkmode = () => {
    if (darkMode) {
      return "logo toggle toggled";
    } else {
      return "toggle logo";
    }
    // darkMode ? " logo toggle toggled" : "toggle logo";
  };
  return (
    <header className="header">
      {/* this will let logo be a switch for darkmode */}
      <img
        src={require("./tomato.png")}
        className="logoicon"
        alt="logo"
        onClick={(e) => {
          toggleMode(e);
        }}
        className={darkMode ? " logo toggle toggled" : "toggle logo"}
        // className="logo"
      />

      <nav className="Nav">
        <a
          className="navMenu"
          alt="Home"
          onClick={() => {
            //Timer is disabled while timer is on
            if (isStopping) {
              push("/");
            }
          }}
        >
          HOME
        </a>
        <a
          className="navMenu"
          alt="About"
          onClick={() => {
            //Timer is disabled while timer is on
            if (isStopping) {
              push("/about");
            }
          }}
        >
          ABOUT
        </a>
        <a
          className="navMenu"
          alt="Updates"
          onClick={() => {
            //Timer is disabled while timer is on
            if (isStopping) {
              push("/updates");
            }
          }}
        >
          UPDATES
        </a>

        {/* LEARN HOW TO LOG OUT SHOWS WITHOUT HAVING DRY CODE ON APP */}
        {loggedIn || localStorage.token ? (
          <>
            {/* //isStopping needs to be false when this onClick is disabled. */}
            <a
              className="navMenu"
              alt="Adding project"
              onClick={() => {
                //Timer is disabled while timer is on
                if (isStopping) {
                  push("/form");
                }
              }}
            >
              ADD
            </a>
            <a
              className="navMenu"
              alt="projects"
              onClick={() => {
                if (isStopping) {
                  push("/projects");
                }
              }}
            >
              PROJECTS
            </a>
            <a
              className="navMenu"
              alt="sign out"
              onClick={() => {
                //Timer is disabled while timer is on
                if (isStopping) {
                  handleLogOut();
                  push("/signin");
                }
                window.location.href = "/";
              }}
            >
              SIGN OUT
            </a>
          </>
        ) : (
          <>
            <a
              className="navMenu"
              alt="sign in"
              onClick={() => push("/Signin")}
            >
              SIGN IN
            </a>
          </>
        )}
        <div class="dropdown">
          <div class="dropbtn">
            <i className="fa fa-bars fa-2x" />
          </div>
          <div class="dropdown-content">
            <a
              alt="Home"
              onClick={() => {
                //Timer is disabled while timer is on
                if (isStopping) {
                  push("/");
                }
              }}
            >
              HOME
            </a>
            <a
              alt="about"
              onClick={() => {
                //Timer is disabled while timer is on
                if (isStopping) {
                  push("/about");
                }
              }}
            >
              ABOUT
            </a>
            <a
              alt="updates"
              onClick={() => {
                if (isStopping) {
                  push("/updates");
                }
              }}
            >
              UPDATES
            </a>

            {/* LEARN HOW TO LOG OUT SHOWS WITHOUT HAVING DRY CODE ON APP */}
            {loggedIn || localStorage.token ? (
              <>
                {/* //isStopping needs to be false when this onClick is disabled. */}
                <a
                  alt="adding project"
                  onClick={() => {
                    //Timer is disabled while timer is on
                    if (isStopping) {
                      push("/form");
                    }
                  }}
                >
                  ADD
                </a>
                <a
                  alt="projects"
                  onClick={() => {
                    //Timer is disabled while timer is on
                    push("/projects");
                  }}
                >
                  PROJECTS
                </a>
                <a
                  alt="sign out"
                  onClick={() => {
                    //Timer is disabled while timer is on
                    if (isStopping) {
                      handleLogOut();
                      push("/signin");
                    }
                    window.location.href = "/";
                  }}
                >
                  SIGN OUT
                </a>
                {darkMode ? (
                  <a
                    alt="darkmode on"
                    onClick={(e) => toggleMode(e)}
                    className={darkmode}
                  >
                    <i class="fa fa-toggle-on light" aria-hidden="true"></i>
                  </a>
                ) : (
                  <a
                    alt="darkmode off"
                    onClick={(e) => toggleMode(e)}
                    className={darkmode}
                  >
                    <i class="fa fa-toggle-off light" aria-hidden="true"></i>
                  </a>
                )}

                {/* <i style={{textAlign:"center"}}mg
                  src={require("./tomato.png")}

                  // className="logo"
                /> */}
              </>
            ) : (
              <>
                <a alt="darkmode on" onClick={() => push("/Signin")}>
                  SIGN IN
                </a>
                {darkMode ? (
                  <a onClick={(e) => toggleMode(e)} className={darkmode}>
                    <i class="fa fa-toggle-on light" aria-hidden="true"></i>
                  </a>
                ) : (
                  <a
                    alt="darkmode off"
                    onClick={(e) => toggleMode(e)}
                    className={darkmode}
                  >
                    <i class="fa fa-toggle-off light" aria-hidden="true"></i>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
