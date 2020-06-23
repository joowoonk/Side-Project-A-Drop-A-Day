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
    project: "Example. your project can be added above on tomatoes tab",
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

  const classes = useStyles();

  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);

  useEffect(() => {
    dispatch(fetchTomatoes());
  }, []);

  const finishedOneTask = () => {
    props.setIsStopping(false);
  };
  if (props.minutes <= 0) {
    dispatch(finishingOneTomatoes(props.userId));
    props.setMinutes(25);
    props.setBreakTime(false);
    props.setFocusTime(false);
    props.setIsStopping(true);
    window.open("https://side-project-a-drop-a-day.vercel.app/timeisup");
    // window.close("https://side-project-a-drop-a-day.vercel.app/tomatoes");
    //add dipatch here to add a block with color
  }

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
                    <Grid container spacing={3} className="projects smaller">
                      {projects.map((sub) => {
                        return (
                          <Grid item xs={12}>
                            {sub.project.length < 25 && (
                              <SubjectDetail
                                sub={sub}
                                isStopping={props.isStopping}
                                setUserId={props.setUserId}
                                setFocusTime={props.setFocusTime}
                                setIsStopping={props.setIsStopping}
                                setMinutes={props.setMinutes}
                              />
                            )}
                            {sub.project.length >= 25 && (
                              <SubjectDetail
                                sub={sub}
                                isStopping={props.isStopping}
                                setUserId={props.setUserId}
                                setFocusTime={props.setFocusTime}
                                setIsStopping={props.setIsStopping}
                                setMinutes={props.setMinutes}
                              />
                            )}
                          </Grid>
                        );
                      })}
                    </Grid>
                  )}
                  {projects.length === 2 && (
                    <Grid container spacing={3} className="projects">
                      {projects.map((sub) => {
                        return (
                          <Grid item xs={12}>
                            <SubjectDetail
                              sub={sub}
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
                  {projects.length > 2 && (
                    <Grid container spacing={1} className="projects">
                      {projects.map((sub) => {
                        return (
                          <Grid item xs={12} sm={6}>
                            <SubjectDetail
                              sub={sub}
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
