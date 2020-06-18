import React, { useState } from "react";
import "./sign-up.styles.scss";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../redux/actions/userActions";
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

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { push } = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onInputUserName = (e) => {
    setUserName(e.target.value);
  };

  const onInputPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(userName, userPassword));
    //dipatch for posting username goes here
  };
  return (
    <>
      {!localStorage.token ? (
        <div className="sign-up-form">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            className="sign-up"
          >
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
              Sign Me Up!
            </Button>
          </form>
        </div>
      ) : (
        <div className="loggedIn">
          <h1>Cannot make another account while logged in</h1>
        </div>
      )}
    </>
  );
};

export default SignUp;
