import { makeStyles } from "@material-ui/core/styles";
import remyWhiteShirt from "../../assets/remyWhiteShirt.webp";
import remyStyledShirt from "../../assets/remyStyledShirt.webp";
import remyHero3 from "../../assets/remyHero3.webp";

export default makeStyles((theme) => ({
  backgroundContainer: {
    marginTop: "0",
    display: "block",
    minHeight: "100vh",
    backgroundImage: `url(${remyWhiteShirt})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${remyStyledShirt})`,
      minHeight: "100vh",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${remyHero3})`,
      minHeight: "100vh",
    },
  },

  toolbar: {
    minHeight: "2rem",
  },
  title: {
    marginTop: "2%",
    width: "13rem",
    margin: "0 auto 2rem auto",
    textAlign: "center",
    color: "white",
    background: "black",
    borderRadius: "1rem",

    fontSize: "1.5rem",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "4px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "5%",
    width: "100%",
    justifyContent: "space-between",
  },

  itemContainer: {
    width: "12rem",
    margin: "0 auto",
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
