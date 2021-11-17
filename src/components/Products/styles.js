import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  contentContainer: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
      margin: "0 auto",
    },
  },

  content: {
    flexGrow: 1,
    backgroundColor: "transparrent ",
    padding: theme.spacing(4),
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  positionContent: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "left",
    },
  },
}));
