import React, { useState } from "react";
import "./sign-in.styles.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { LOGIN_USER_SUCCESS } from "../../redux/actions/userActions";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useHistory();

  const dispatch = useDispatch();

  const classes = useStyles();
  const onInputUserName = (e) => {
    setUserName(e.target.value);
  };

  const onInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/auth/login`, { username, password })
      .then((res) => {
        localStorage.setItem("user_id", res.data.id);
        localStorage.setItem("token", res.data.token);
        // console.log("LOGIN INFO", res);
        alert(`Welcome ${username}, hope you have a great day!`);
        push("/tomatoes");
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        alert("Incorrect username/password!");
      });
  };

  return (
    <>
      {!localStorage.token ? (
        <div className="sign-in-form">
          <form className={classes.root} noValidate autoComplete="off">
            <div className="userName">
              <h5>Where're my tomatoes?</h5>
              <label htmlFor="userName">
                {/* <h3>Username</h3> */}
                <TextField
                  id="standard-basic"
                  label="Username"
                  type="text"
                  name="userName"
                  value={username}
                  onChange={onInputUserName}
                  style={{ width: "100%" }}
                />
              </label>
            </div>

            <label htmlFor="password">
              <div className="password"></div>
              <div className="password">
                <TextField
                  id="standard-basic"
                  label="Password"
                  value={password}
                  type="password"
                  onChange={onInputPassword}
                  style={{ width: "100%" }}
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
