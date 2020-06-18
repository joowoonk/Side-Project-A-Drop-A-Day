import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "../../redux/actions/userActions";
import { addProject } from "../../redux/actions/tomatoesActions";
import { fetchTomatoes } from "../../redux/actions/tomatoesActions";
import "./subject-form.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const SubjectForm = () => {
  const [subject, setSubject] = useState("");
  const [tomatoesNumber, setTomatoesNumber] = useState(0);
  const dispatch = useDispatch();
  const useinfo = useSelector((state) => state.userReducer.user[0]);
  const classes = useStyles();
  const onInputSubject = (e) => {
    setSubject(e.target.value);
  };
  const onInputTomatoes = (e) => {
    setTomatoesNumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subject.length > 4 && tomatoesNumber > 0 && tomatoesNumber < 20) {
      e.preventDefault();
      dispatch(addProject(subject, tomatoesNumber, useinfo.id));
    } else if (subject.length < 4) {
      alert(
        "Please provide project name that has more than at least four characters"
      );
    } else if (tomatoesNumber === 0) {
      alert("Number of tomatoes should be at least one or more");
    } else if (tomatoesNumber > 20) {
      alert(
        "That's way to many tomatoes to eat a day! Max is 20 tomatoes per project!"
      );
    }

    // await dispatch(fetchTomatoes());
  };

  useEffect(() => {
    dispatch(userInformation());
  }, []);

  // console.log({ useinfo });

  return (
    <>
      <h4 className="formTitle"> ADD YOUR NEW PROJECT!</h4>
      <div className="formContainer">
        <form noValidate autoComplete="off" className="tomatoesForm">
          <div className="project">
            <label htmlFor="subject">
              <h3>Your project name:</h3>
              <TextareaAutosize
                id="standard-basic"
                label="Your Project Name.."
                type="text"
                name="subject"
                id="subject"
                rowsMax={2}
                aria-label="maximum height"
                placeholder="Example: Work on my side project.."
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
                value={subject}
                onChange={onInputSubject}
                style={{ width: 250, height: 50 }}
              />
            </label>
          </div>
          <label htmlFor="tomatoes">
            <br />
            <div className="project">
              {/* <h3>How many tomatoes a day:</h3> */}
              <TextField
                // id="standard-basic"

                label="How many tomatoes a day?"
                type="number"
                id="tomatoes"
                name="tomatoes"
                min="1"
                max="24"
                value={tomatoesNumber}
                onChange={onInputTomatoes}
                style={{ width: 250 }}
              />
            </div>
          </label>
          <div className="submit">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add To My Project
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubjectForm;
