import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    paddingTop: "5rem",
    display: "block",
    background: "black",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
  },

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
