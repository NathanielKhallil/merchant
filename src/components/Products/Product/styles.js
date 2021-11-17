import { makeStyles } from "@material-ui/core/styles";

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
    display: "flex",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    justifyContent: "space-between",
    minWidth: "10rem",
  },

  muiCardContent: {
    root: {
      paddingBottom: "0%",
      width: "10rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));
