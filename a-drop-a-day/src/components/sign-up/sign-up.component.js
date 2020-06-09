import React, { useState } from "react";
import "./form.styles.scss";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { push } = useHistory();

  const dispatch = useDispatch();

  const onInputUserName = (e) => {
    setUserName(e.target.value);
  };

  const onInputPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(userName, userPassword));
    if (localStorage.token) {
      push("/login");
    }
    //dipatch for posting username goes here
  };
  return (
    <div className="sign-in-form">
      <form className="sign-in">
        <div className="userName">
          <label htmlFor="userName">
            <h3>Username</h3>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={onInputUserName}
            />
          </label>
        </div>

        <label htmlFor="password">
          <div className="password">
            <h3>Password</h3>
          </div>
          <div className="password">
            <input
              id="password"
              value={userPassword}
              type="password"
              onChange={onInputPassword}
              name="password"
            />
          </div>
        </label>
        <button onClick={handleSubmit}>Log In</button>
      </form>
    </div>
  );
};

export default Form;
