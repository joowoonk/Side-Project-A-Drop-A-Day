import React from "react";
import "./form.styles.scss";

const Form = () => {
  return (
    <div className="sign-in-form">
      <h1>Let's Chill</h1>
      <form className="sign-in">
        <div className="userName">
          <label htmlFor="userName">
            <h3>Username/Emaill</h3>
            <input
              type="text"
              name="userName"
              id="userName"
              // value={}
              // onChange={handleChange}
            />
          </label>
        </div>

        <label htmlFor="password">
          <div className="password">
            <h3>password</h3>
          </div>
          <div className="password">
            <input id="password" type="password" name="password" />
          </div>
        </label>

        <div className="account">
          <p>Doesn't have an account?</p>
          <p>Sign Up</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
