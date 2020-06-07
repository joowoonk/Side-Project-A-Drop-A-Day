import React, { useState } from "react";
import "./form.styles.scss";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onInputUserName = (e) => {
    setUserName(e.target.value);
  };

  const onInputPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
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
      <div className="account">
        <p>Doesn't have an account?</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Form;
