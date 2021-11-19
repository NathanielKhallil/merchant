import { makeStyles } from "@material-ui/core/styles";
import remyWhiteShirt from "../../assets/remyWhiteShirt.webp";

export default makeStyles((theme) => ({
  container: {
    marginTop: "0",
    display: "block",
    background: "black",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    width: "100%",
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
