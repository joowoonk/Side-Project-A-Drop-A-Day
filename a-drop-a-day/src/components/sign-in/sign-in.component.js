import React, { useState } from "react";
import "./sign-in.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { push } = useHistory();
  const loginState = useSelector((state) => state.userReducer.login);
  const dispatch = useDispatch();

  const classes = useStyles();
  const onInputUserName = (e) => {
    setUserName(e.target.value);
  };

  const onInputPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUserAction(userName, userPassword));
    push("/tomatoes");
    console.log(localStorage);
  };
  return (
    <>
      {!localStorage.token ? (
        <div className="sign-in-form">
          <form className={classes.root} noValidate autoComplete="off">
            <div className="userName">
              <label htmlFor="userName">
                {/* <h3>Username</h3> */}
                <TextField
                  id="standard-basic"
                  label="Username"
                  type="text"
                  name="userName"
                  id="userName"
                  value={userName}
                  onChange={onInputUserName}
                />
              </label>
            </div>

            <label htmlFor="password">
              <div className="password">{/* <h3>Password</h3> */}</div>
              <div className="password">
                <TextField
                  id="standard-basic"
                  label="Password"
                  id="password"
                  value={userPassword}
                  type="password"
                  onChange={onInputPassword}
                  name="password"
                />
              </div>
            </label>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Log In
            </Button>
          </form>
          <div className="account">
            <p>Doesn't have an account?</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => push("/signup")}
            >
              Sign Up
            </Button>
          </div>
        </div>
      ) : (
        <div className="loggedIn">
          <h1>You're Logged in!</h1>
        </div>
      )}
    </>
  );
};

export default SignIn;
