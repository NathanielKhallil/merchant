import { makeStyles } from "@material-ui/core/styles";
import remyGhost from "../../../assets/remyGhost.webp";
import remyStyledShirt from "../../../assets/remyStyledShirt.webp";
import remyHero3 from "../../../assets/remyHero3.webp";

export default makeStyles((theme) => ({
  root: {
    minWidth: "12.5rem",
    maxWidth: "12rem",
    minHeight: "19.5rem",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      minHeight: "19rem",
      maxHeight: "24rem",
      width: "12rem",
    },
  },

  gridPosition: {
    marginLeft: "0",
  },

  backgroundContainer: {
    marginTop: "0",
    paddingTop: "4rem",
    display: "block",
    minHeight: "100vh",
    backgroundImage: `url(${remyStyledShirt})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${remyGhost})`,
      minHeight: "100vh",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${remyHero3})`,
      minHeight: "100vh",
    },
  },

  media: {
    height: "4rem",
    paddingTop: "56.25%", // 16:9
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      padding: "0 8px",
    },
  },

  cardContent: {
    color: "black",
  },
  muiTypographyOverride: {
    width: "44rem",
    fontSize: "4rem",
    [theme.breakpoints.down("lg")]: {
      width: "44rem",
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "28rem",
      fontSize: "2.5rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));
