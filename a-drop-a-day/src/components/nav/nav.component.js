import React from "react";
import "./nav.styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logOut } from "../../redux/actions/userActions";

import { ReactComponent as Logo } from "../../assets/logo.svg";
// import { useHistory } from "react-router";
const Nav = () => {
  const loginState = useSelector((state) => state.userReducer.login);
  const dispatch = useDispatch();
  console.log({ loginState });
  // const history = useHistory();
  // console.log(history);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className="topNav">
      <Logo className="logo" />
      <div className="menuNav">
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        {!loginState ? (
          <>
            <Link to="Signin">Sign In</Link>
          </>
        ) : (
          <>
            <Link to="tomatoes">Tomatoes</Link>
            <Link
              onClick={() => {
                handleLogOut();
              }}
            >
              Sign Out
            </Link>
          </>
        )}
      </div>
      {/* <button type="button" onClick={() => history.goBack()} /> */}
    </nav>
  );
};

export default Nav;
