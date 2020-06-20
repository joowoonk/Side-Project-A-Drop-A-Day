import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTomatoes,
  addProject,
  deleteProject,
} from "../../redux/actions/tomatoesActions";

import "./subject.styles.scss";
import {
  finishingOneTomatoes,
  resetFinishingTomatoes,
} from "../../redux/actions/tomatoesActions";
import SubjectDetail from "../SubjectDetail/SubjectDetail";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // borderRadius: 10,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    background: "floralwhite",
    boxShadow: "0 1px 3px 1px black",
    color: theme.palette.text.secondary,
  },
}));
const styles = {
  root: {
    background: (props) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    // border: 0,
    // borderRadius: 3,
    boxShadow: (props) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    // color: "red",
    height: 48,
    // padding: "0 30px",
    marginRight: 30,
    marginBottom: 10,
  },
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}
MyButtonRaw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["blue", "red"]).isRequired,
};

const MyButton = withStyles(styles)(MyButtonRaw);

const example = [
  {
    id: "c",
    project: "Eg. Solving code problems on leetcode",
    finished: 5,
    tomatoes: 8,
  },
  {
    id: "d",
    project: "Eg. Practing ukulele for a day",
    finished: 1,
    tomatoes: 4,
  },
];

const Subject = (props) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.tomatoesReducers.projects);

  console.log(projects);
  const classes = useStyles();
  // const [color, setColor] = useState("white");
  // const [textColor, setTextColor] = useState("black");
  // const [userId, setUserId] = useState(0);

  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);

  useEffect(() => {
    dispatch(fetchTomatoes());
  }, []);

  const finishedOneTask = () => {
    console.log(props.isStopping);
    props.setIsStopping(false);
  };
  if (props.minutes <= 0) {
    console.log("Yes?");
    dispatch(finishingOneTomatoes(props.userId));
    props.setMinutes(25);
    props.setBreakTime(false);
    props.setFocusTime(false);
    props.setIsStopping(true);
    window.open("http://localhost:3000/tomatoes");
    window.close();
    //add dipatch here to add a block with color
  }
  console.log(props.userId);
  return (
    <>
      <div className="projects">
        {isFetching ? (
          <>
            {projects.length === 0 ? (
              <>
                <div className={classes.root}>
                  <Grid container spacing={2} className="projects">
                    {example.map((sub) => {
                      return (
                        <Grid item xs={12}>
                          <Paper className={classes.paper}>
                            <p>Project Name: </p>
                            <h1>{sub.project.toUpperCase()}</h1>
                            <p>You finished</p>
                            <h1>
                              {sub.finished}/{sub.tomatoes}
                            </h1>
                            <div className="buttons">
                              <MyButton
                                disabled={true}
                                color="red"
                                onClick={() => {
                                  props.setUserId(sub.id);

                                  return finishedOneTask();
                                }}
                              >
                                <i className="fa fa-play fa-2x" />
                              </MyButton>
                              <MyButton
                                disabled={true}
                                color="red"
                                onClick={() => {
                                  props.setMinutes(25);
                                  props.setUserId(sub.id);
                                  dispatch(resetFinishingTomatoes(sub.id));
                                }}
                              >
                                RESET PROGRESS
                              </MyButton>

                              <MyButton
                                disabled={true}
                                color="red"
                                onClick={() => {
                                  // setUserId(sub.id);
                                  dispatch(deleteProject(sub.id));
                                }}
                              >
                                <i className="fa               fa-trash  fa-2x" />
                              </MyButton>
                            </div>
                          </Paper>
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              </>
            ) : (
              <>
                <div className={classes.root}>
                  <Grid container spacing={2} className="projects">
                    {projects.length <= 1 && (
                      <>
                        {projects.map((sub) => {
                          console.log(sub.id);
                          return (
                            <Grid item xs={12}>
                              <Paper
                                className={classes.paper}
                                style={{ marginTop: "50%" }}
                              >
                                <p>Project Name: </p>
                                <h4>{sub.project.toUpperCase()}</h4>
                                You finished
                                <h1>
                                  {sub.finished}/{sub.tomatoes}
                                </h1>
                                <div className="buttons">
                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      props.setUserId(sub.id);
                                      props.setFocusTime(true);

                                      return finishedOneTask();
                                    }}
                                  >
                                    <i className="fa fa-play fa-2x" />
                                  </MyButton>
                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      props.setMinutes(25);
                                      props.setUserId(sub.id);
                                      dispatch(resetFinishingTomatoes(sub.id));
                                    }}
                                  >
                                    RESET PROGRESS
                                  </MyButton>

                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      // setUserId(sub.id);
                                      dispatch(deleteProject(sub.id));
                                    }}
                                  >
                                    <i className="fa               fa-trash  fa-2x" />
                                  </MyButton>
                                </div>
                              </Paper>
                            </Grid>
                          );
                        })}
                      </>
                    )}
                    {projects.length === 2 && (
                      <>
                        {projects.map((sub) => {
                          return (
                            <Grid item xs={12}>
                              <Paper className={classes.paper}>
                                {" "}
                                {/* <div className="project" key={sub.id}></div> */}
                                {/* <SubjectDetail sub={sub} /> */}
                                <p>Project Name: </p>
                                <h1>{sub.project.toUpperCase()}</h1>
                                <p>You finished</p>
                                <h1>
                                  {sub.finished}/{sub.tomatoes}
                                </h1>
                                <div className="buttons">
                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      props.setUserId(sub.id);
                                      props.setFocusTime(true);
                                      return finishedOneTask();
                                    }}
                                  >
                                    <i className="fa fa-play fa-2x" />
                                  </MyButton>
                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      props.setMinutes(25);
                                      props.setUserId(sub.id);
                                      dispatch(resetFinishingTomatoes(sub.id));
                                    }}
                                  >
                                    RESET MY FINISHED
                                  </MyButton>

                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      // setUserId(sub.id);
                                      dispatch(deleteProject(sub.id));
                                    }}
                                  >
                                    <i className="fa               fa-trash  fa-2x" />
                                  </MyButton>
                                </div>
                              </Paper>
                            </Grid>
                          );
                        })}
                      </>
                    )}{" "}
                    {projects.length > 2 && (
                      <>
                        {projects.map((sub) => {
                          return (
                            <Grid item xs={12} sm={6}>
                              <Paper className={classes.paper}>
                                {" "}
                                {/* <div className="project" key={sub.id}></div> */}
                                {/* <SubjectDetail sub={sub} /> */}
                                <p>Project Name: </p>
                                <h1>{sub.project.toUpperCase()}</h1>
                                <p>You finished</p>
                                <h1>
                                  {sub.finished}/{sub.tomatoes}
                                </h1>
                                <div className="buttons">
                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      props.setUserId(sub.id);
                                      props.setFocusTime(true);
                                      return finishedOneTask();
                                    }}
                                  >
                                    <i className="fa fa-play fa-2x" />
                                  </MyButton>
                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      props.setMinutes(25);
                                      props.setUserId(sub.id);
                                      dispatch(resetFinishingTomatoes(sub.id));
                                    }}
                                  >
                                    RESET MY FINISHED
                                  </MyButton>

                                  <MyButton
                                    disabled={!props.isStopping}
                                    color="red"
                                    onClick={() => {
                                      // setUserId(sub.id);
                                      dispatch(deleteProject(sub.id));
                                    }}
                                  >
                                    <i className="fa               fa-trash  fa-2x" />
                                  </MyButton>
                                </div>
                              </Paper>
                            </Grid>
                          );
                        })}
                      </>
                    )}
                  </Grid>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className={classes.root}>
              <Grid container spacing={1} className="server-down">
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <h4>Something went wrong with the server</h4>
                    <a href="https://www.linkedin.com/in/joo-woon-kang-2515ab1a2/">
                      Contact the developer if this issue keeps occurs
                    </a>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Subject;

// {tomatoes.map((tom) => {
//   {
//     /* <button style={{background:color,color:textColor}} className='btn btn-primary' onClick={()=>{setColor("black");setTextColor('red')}}>Click here</button> */
//   }
//   return (
//     <button
//       style={{ backgroundColor: color, color: textColor }}
//       className="subjectbox"
//       onClick={() => {
//         changeColor();
//       }}
//     >
//       x
//     </button>
//   );
// })}
