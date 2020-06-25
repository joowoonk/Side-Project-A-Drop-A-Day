import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "../../redux/actions/userActions";
import { addProject } from "../../redux/actions/tomatoesActions";

import "./subject-form.styles.scss";

import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
const user = localStorage.getItem("user_id");

const SubjectForm = () => {
  const [subject, setSubject] = useState("");
  const [tomatoesNumber, setTomatoesNumber] = useState(0);
  const dispatch = useDispatch();
  const useinfo = useSelector((state) => state.userReducer);
  const [userId, setUserId] = useState(user);

  console.log({ userId });

  const onInputSubject = (e) => {
    setSubject(e.target.value);
  };
  const onInputTomatoes = (e) => {
    setTomatoesNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      subject.length > 4 &&
      subject.length <= 100 &&
      tomatoesNumber > 0 &&
      tomatoesNumber < 20
    ) {
      e.preventDefault();

      dispatch(addProject(subject, tomatoesNumber, userId));
    } else if (subject.length < 4) {
      alert(
        "Please provide project name that has more than at least four characters"
      );
    } else if (subject.length > 100) {
      alert("Please insert letters shorter than 40");
    } else if (tomatoesNumber <= 0) {
      alert("Number of tomatoes should be at least one or more");
    } else if (tomatoesNumber > 20) {
      alert(
        "That's way to many tomatoes to eat a day! Maximum of 20 tomatoes per project!"
      );
    }
  };

  useEffect(() => {
    dispatch(userInformation());
  }, []);

  return (
    <>
      <div className="formContainer">
        <form noValidate autoComplete="off" className="tomatoesForm">
          <div className="project">
            <label htmlFor="subject">
              <h2>Your project is..</h2>
              <TextareaAutosize
                id="standard-basic"
                label="Standard"
                type="text"
                name="subject"
                rowsMax={2}
                // aria-label="maximum height"
                placeholder="Example: Working on my side project.."
                value={subject}
                onChange={onInputSubject}
                style={{ width: 250, height: 50 }}
              />
              <p className="limit">letters:{subject.length}/100</p>
            </label>
          </div>
          <label htmlFor="tomatoes">
            <br />
            <div className="project">
              {/* <h3>How many tomatoes a day:</h3> */}
              <TextField
                id="filled-number"
                label="How many tomatoes a day?"
                type="number"
                InputLabelProps={{
                  shrink: true,
                  min: 0,
                }}
                variant="filled"
                value={tomatoesNumber}
                onChange={onInputTomatoes}
                style={{ width: 250 }}
              />
            </div>
          </label>
          <div className="submit">
            <Button
              style={{ fontSize: "100%" }}
              variant="contained"
              color="primary"
              onClick={(e) => handleSubmit(e)}
            >
              Add To My Project
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubjectForm;
