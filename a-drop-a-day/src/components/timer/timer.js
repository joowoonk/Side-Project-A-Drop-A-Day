import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Subject from "../subject/subject.component";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./timer.styles.scss";
import Button from "@material-ui/core/Button";
import Helmet from "react-helmet";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: theme.spacing(3),
    // width: "50ch",
    // margin: "4% auto",
  },
  paper: {
    padding: 150,
    textAlign: "center",
    boxShadow: "0 1px 3px 1px black",
    background: "floralwhite",
    // marginLeft: ,
    // marginRight: -250,
    // color: theme.palette.text.secondary,
  },
}));

export default function Timer({
  setBreakTime,
  setMinutes,
  setIsStopping,
  Minutes,
  isStopping,
  breakTime,
  coffee,
  styles,
  formattedNumber,
  setUserId,
  focusTime,
  setFocusTime,
}) {
  const classes = useStyles();

  let warning = "Are you about that?";
  return (
    <div>
      {!focusTime && <Helmet title={`A Drop A Day`}></Helmet>}
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="container">
            <Paper className={classes.paper}>
              {" "}
              {breakTime ? (
                <div className="icon">
                  <i style={coffee} className="fas fa-coffee fa-10x" />
                  {breakTime ? (
                    <>
                      <br />
                      <h5>Coffee Time Is On...</h5>
                      {breakTime && <Helmet title={`break..`}></Helmet>}
                    </>
                  ) : (
                    <>
                      <br />
                      <h5>PAUSED</h5>
                    </>
                  )}
                </div>
              ) : (
                <div>
                  <i style={styles} className="fas fa-apple-alt fa-10x" />
                  {!isStopping ? (
                    <>
                      <br />
                      <h5> FOCUSING TIME...</h5>
                      {!isStopping ? (
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            // className="controller"
                            // className="play-pause"
                            onClick={() => {
                              setIsStopping(!isStopping);
                              setFocusTime(false);
                            }}
                          >
                            <i className="fa fa-pause fa-2x" />
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            // className="controller"
                            onClick={() => setMinutes(Minutes + 1)}
                          >
                            <i className="fa fa-plus fa-2x" />
                          </Button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      <br />
                      <h5>PAUSED</h5>
                    </>
                  )}
                </div>
              )}
              <h5 className="time">{formattedNumber} Minutes</h5>
              <Button
                variant="contained"
                color="primary"
                className="controller"
                onClick={() => {
                  setBreakTime(true);
                  setMinutes(5);
                  setIsStopping(false);
                  setUserId();
                }}
              >
                Short Break
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="controller"
                onClick={() => {
                  setBreakTime(true);
                  setMinutes(15);
                  setIsStopping(false);
                  setUserId();
                }}
              >
                Long Break
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="controller lastButton"
                onClick={() => {
                  setBreakTime(false);
                  setFocusTime(false);
                  setIsStopping(true);
                  setMinutes(25);
                }}
              >
                Focus Time
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
