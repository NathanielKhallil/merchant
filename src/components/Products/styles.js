import { makeStyles } from "@material-ui/core/styles";
import remyHero from "../../assets/remyHero.webp";
import remyHero4 from "../../assets/remyHero4.webp";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  backgroundContainer: {
    display: "block",
    backgroundImage: `url(${remyHero})`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    margin: "0",
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${remyHero})`,
      backgroundSize: "cover",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${remyHero4})`,
      backgroundSize: "cover",
    },
  },
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
  logo: {
    width: "3rem",
    height: "2rem",
  },
  icon: {
    color: "white",
    background: "orange",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
    "&:active": {
      transform: "scale(1.2)",
    },
  },

  buyerNotice: {
    position: "relative",
    color: "white",
    background: "black",
    textAlign: "justify",
    padding: ".5rem",

    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".8rem",
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
