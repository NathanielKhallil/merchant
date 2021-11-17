import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
