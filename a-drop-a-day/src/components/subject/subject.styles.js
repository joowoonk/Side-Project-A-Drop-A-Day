import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // borderRadius: 10,
    // marginLeft: 10,
    // marginTop: 25,
    // marginRight: 20,
    // padding: 10,
    width: "100%",
    margin: "2% 2%",
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    background: "floralwhite",
    boxShadow: "0 1px 3px 1px black",
    color: theme.palette.text.secondary,
    margin: "2% 2%",
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
    // color: "blue",
    // height: 48,
    margin: "0 2% 0 0",
    // marginRight: 50,
    // marginBottom: 10,
  },
};
