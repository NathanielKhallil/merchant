import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  bannerContainer: {
    position: "relative",
    display: "flex",
  },
  bannerImage: {
    width: "100%",
    maxHeight: "24vh",
    [theme.breakpoints.up("xs")]: {
      marginTop: "4.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-2rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-2rem",
    },
  },
}));
