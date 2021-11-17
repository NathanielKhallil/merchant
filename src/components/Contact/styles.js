import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  button: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    "&:hover": {},
  },
  reCaptcha: {
    display: "inline-block",
    marginLeft: "1rem",
    width: "80%",
  },
}));
