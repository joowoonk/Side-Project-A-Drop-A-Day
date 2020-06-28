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
    <header className="header">
      <img
        src={require("./tomato.png")}
        className="logo"
        alt="logo"
        onClick={(e) => {
          toggleMode(e);
        }}
        className={darkMode ? " logo toggle toggled" : "toggle logo"}
        // className="logo"
      />

      <nav className="Nav">
        <a
          onClick={() => {
            if (isStopping) {
              push("/");
            }
          }}
        >
          HOME
        </a>
        <a
          onClick={() => {
            if (isStopping) {
              window.open(
                "https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/"
              );
            }
          }}
        >
          CONTACT
        </a>

        {/* LEARN HOW TO LOG OUT SHOWS WITHOUT HAVING DRY CODE ON APP */}
        {loggedIn || localStorage.token ? (
          <>
            {/* //isStopping needs to be false when this onClick is disabled. */}
            <a
              onClick={() => {
                if (isStopping) {
                  push("/form");
                }
              }}
            >
              ADD
            </a>
            <a
              onClick={() => {
                push("/tomatoes");
              }}
            >
              TOMATOES
            </a>
            <a
              onClick={() => {
                if (isStopping) {
                  handleLogOut();
                  push("/signin");
                }
              }}
            >
              SIGN OUT
            </a>
          </>
        ) : (
          <>
            <a onClick={() => push("/Signin")}>SIGN IN</a>
          </>
        )}
        <div class="dropdown">
          <div class="dropbtn">
            <i className="fa fa-bars fa-2x" />
          </div>
          <div class="dropdown-content">
            <a
              onClick={() => {
                if (isStopping) {
                  push("/");
                }
              }}
            >
              HOME
            </a>
            <a
              onClick={() => {
                if (isStopping) {
                  window.open(
                    "https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/"
                  );
                }
              }}
            >
              CONTACT
            </a>

            {/* LEARN HOW TO LOG OUT SHOWS WITHOUT HAVING DRY CODE ON APP */}
            {loggedIn || localStorage.token ? (
              <>
                {/* //isStopping needs to be false when this onClick is disabled. */}
                <a
                  onClick={() => {
                    if (isStopping) {
                      push("/form");
                    }
                  }}
                >
                  ADD
                </a>
                <a
                  onClick={() => {
                    push("/tomatoes");
                  }}
                >
                  TOMATOES
                </a>
                <a
                  onClick={() => {
                    if (isStopping) {
                      handleLogOut();
                      push("/signin");
                    }
                  }}
                >
                  SIGN OUT
                </a>
              </>
            ) : (
              <>
                <a onClick={() => push("/Signin")}>SIGN IN</a>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
