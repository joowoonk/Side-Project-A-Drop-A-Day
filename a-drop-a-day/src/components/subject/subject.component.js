import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTomatoes,
  deleteProject,
} from "../../redux/actions/tomatoesActions";

import "./subject.styles.scss";
import {
  finishingOneTomatoes,
  resetFinishingTomatoes,
} from "../../redux/actions/tomatoesActions";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { styles, useStyles } from "./subject.styles";
import SubjectDetail from "../SubjectDetail/SubjectDetail";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
    project: "Your project can be added from add tab",
    finished: 5,
    tomatoes: 8,
  },
  {
    id: "d",
    project: "Eg. Practing ukulele for a day",
    finished: 1,
    tomatoes: 4,
  },
  {
    id: "e",
    project: "Eg. Working on my side project",
    finished: 6,
    tomatoes: 8,
  },
];
const Subject = (props) => {
  //redux hook for dispatch
  const dispatch = useDispatch();

  //grabing from global state
  const projects = useSelector((state) => state.tomatoesReducers.projects);
  
  // styling material ui
  const classes = useStyles();

  //checking for fetching
  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);

  //fetching all the tomatoes
  useEffect(() => {
    dispatch(fetchTomatoes());
  }, []);

  //Timer will start
  const finishedOneTask = () => {
    props.setIsStopping(false);
  };

  //when minutues hits 0
  if (props.minutes <= 0) {
    dispatch(finishingOneTomatoes(props.userId));
    props.setMinutes(25);
    props.setBreakTime(false);
    props.setFocusTime(false);
    props.setIsStopping(true);
       props.setPrinstine()
    // window.open("https://side-project-a-drop-a-day.vercel.app/timeisup");
  }

  return (
    <>
      <div className="projects">
        {isFetching ? (
          <>
            {/* example will be shown if a user doesnt add any project */}
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
                                // className="example"
                                onClick={() => {
                                  props.setUserId(sub.id);
                                  props.scrollToTop();
                                  return finishedOneTask();
                                }}
                              >
                                <i className="fa fa-play fa-2x" />
                              </MyButton>

                              <MyButton
                                disabled={true}
                                color="red"
                                // className="example"
                                onClick={() => {
                                  props.setMinutes(25);
                                  props.setUserId(sub.id);
                                  dispatch(resetFinishingTomatoes(sub.id));
                                }}
                              >
                                RESET PROGRESS
                              </MyButton>

                              <MyButton
                                // className="example"
                                disabled={true}
                                color="red"
                                onClick={() => {
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
                  {projects.length === 1 && (
                    <Grid container spacing={2} className="projects smaller">
                      {projects.map((sub) => {
                        return (
                          <Grid item xs={12}>
                            <SubjectDetail
                            setIsFocusing={props.setIsFocusing}
                              sub={sub}
                              scrollToTop={props.scrollToTop}
                              isStopping={props.isStopping}
                              setUserId={props.setUserId}
                              setFocusTime={props.setFocusTime}
                              setIsStopping={props.setIsStopping}
                              setMinutes={props.setMinutes}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  )}
                  {projects.length == 2 && (
                    <Grid container spacing={2} className="projects">
                      {projects.map((sub) => {
                        return (
                          <Grid item xs={12}>
                            <SubjectDetail
                            setIsFocusing={props.setIsFocusing}
                              sub={sub}
                              scrollToTop={props.scrollToTop}
                              isStopping={props.isStopping}
                              setUserId={props.setUserId}
                              setFocusTime={props.setFocusTime}
                              setIsStopping={props.setIsStopping}
                              setMinutes={props.setMinutes}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  )}
                  {projects.length == 3 && (
                    <Grid container spacing={2} className="projects">
                      {projects.map((sub) => {
                        return (
                          <Grid item xs={12}>
                            <SubjectDetail
                            setIsFocusing={props.setIsFocusing}
                              sub={sub}
                              scrollToTop={props.scrollToTop}
                              isStopping={props.isStopping}
                              setUserId={props.setUserId}
                              setFocusTime={props.setFocusTime}
                              setIsStopping={props.setIsStopping}
                              setMinutes={props.setMinutes}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  )}
                  {projects.length > 3 && (
                    <Grid container spacing={2} className="projects">
                      {projects.map((sub) => {
                        return (
                          <Grid item xs={12} sm={6}>
                            <SubjectDetail
                            setIsFocusing={props.setIsFocusing}
                              sub={sub}
                              scrollToTop={props.scrollToTop}
                              isStopping={props.isStopping}
                              setUserId={props.setUserId}
                              setFocusTime={props.setFocusTime}
                              setIsStopping={props.setIsStopping}
                              setMinutes={props.setMinutes}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  )}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className={classes.root}>
              <Grid container spacing={2} className="server-down">
                <Grid item xs={12}>
                  <Paper className={classes.loading}>
                    <Loader
                      className="loading"
                      type="ThreeDots"
                      color="#00BFFF"
                      height={250}
                      width={250}
                      // timeout={3000} //3 secs
                    />
                    <h1 className="loading">It's Loading...</h1>
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
