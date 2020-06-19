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
}) {
  const classes = useStyles();

  let warning = "Are you about that?";
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} className="container">
            <Paper className={classes.paper}>
              {" "}
              {breakTime ? (
                <div className="icon">
                  <i style={coffee} className="fas fa-coffee fa-10x" />
                  {breakTime ? (
                    <>
                      <br />
                      Coffee Time Is On...
                    </>
                  ) : (
                    <>
                      <br />
                      PAUSED
                    </>
                  )}
                </div>
              ) : (
                <div>
                  <i style={styles} className="fas fa-apple-alt fa-10x" />
                  {!isStopping ? (
                    <>
                      <br />
                      <p> FOCUSING TIME...</p>
                      {!isStopping ? (
                        <div>
                          <button
                            className="play-pause"
                            onClick={() => {
                              setIsStopping(!isStopping);
                            }}
                          >
                            <i className="fa fa-pause fa-2x" />
                          </button>
                          <button onClick={() => setMinutes(Minutes + 1)}>
                            <i className="fa fa-plus fa-2x" />
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      <br />
                      <p>PAUSED</p>
                    </>
                  )}
                </div>
              )}
              <div className="time">{formattedNumber} Minutes</div>
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
