import React from "react";
import "./form.styles.scss";

const Form = () => {
  return (
    <div className="sign-in-form">
      <h1>Let's Chill</h1>
      <form className="sign-in">
        <label htmlFor="userName">
          Your Unsername or Emaill
          <input
            type="text"
            name="userName"
            // value={}
            // onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Your Password
          <input
            type="password"
            name="password"
            // value={}
            // onChange={}
          />
        </label>
        <p>Need an account?</p>
        <p>Sign Up</p>
      </form>
    </div>
  );
};

export default Form;
