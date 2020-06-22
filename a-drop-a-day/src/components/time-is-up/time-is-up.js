import React from "react";
import "./time-is-up.styles.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { styles } from "../subject/subject.styles";

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

const TimeIsUp = () => {
  const { push } = useHistory();
  return (
    <div className="introduction">
      <h1>Time is UP!</h1>
      <MyButton
        color="red"
        onClick={() => {
          push("tomatoes");
        }}
      >
        Return to page
      </MyButton>
    </div>
  );
};

export default TimeIsUp;
