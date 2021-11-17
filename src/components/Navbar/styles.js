import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up("xs")]: {
      display: "block",
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  title: {
    flexGrow: 10,
    fontWeight: "bold",
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      margin: "1rem 0 0 2.2rem",
      fontSize: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "1rem 1rem 0rem 3rem",
      fontSize: "100%",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 0 0 1rem",
      fontSize: "105%",
      justifyContent: "flex-start",
    },
  },

  navBar: {
    position: "relative",
    display: "flex",
    fontFamily: "",
    flexGrow: 9,
    flexDirection: "row",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
  },

  navUl: {
    display: "flex",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    padding: "0 1rem 0 0",
    width: "16rem",
    listStyle: "none",
    [theme.breakpoints.up("xs")]: {
      width: "14rem",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "100%",
    },
  },

  listItem: {
    display: "inline-block",
    fontWeight: "bold",
    marginLeft: "10px",
    padding: "0 11px",
    backgroundColor: "white",
    "&:active": {
      transform: "scale(1.1)",
    },
    "&:hover": {
      color: "#e60000",
    },
    [theme.breakpoints.up("xs")]: {
      padding: "0 11px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0 11px",
    },
  },

  link: {
    fontSize: "100%",
    width: "50px",
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#e60000",
    },
    [theme.breakpoints.up("xs")]: {
      width: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30px",
    },
  },

  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },

  icon: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },

  footerBar: {
    display: "flex",
    position: "relative",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    minHeight: "6vh",
    width: "100%",
    alignItems: "center",
    marginTop: "auto",
  },
  footerText: {
    [theme.breakpoints.up("xs")]: {
      margin: "0",
      fontSize: "88%",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "100%",
    },
  },
}));
