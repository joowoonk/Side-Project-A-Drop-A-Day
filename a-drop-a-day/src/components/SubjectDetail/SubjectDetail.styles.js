import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // borderRadius: 10,
    // marginTop: 15,
    marginRight: "1%",
    marginLeft: "1%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "97%",
    // color: "red",
    marginTop: 10,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    background: "floralwhite",
    boxShadow: "0 1px 3px 1px black",
    color: theme.palette.text.secondary,
    color: "black",

    // paddingRight: "120%",
  },
}));
export const styles = {
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
    margin: "0 4% 0 0",
    // color: "red",
    // height: 48,
    // padding: "0 30px",

    // marginRight: ,
    // marginBottom: 10,
  },
};
