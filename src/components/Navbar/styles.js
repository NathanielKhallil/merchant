import { makeStyles, alpha } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 10,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },

  navBar: {
    display: "flex",
    fontFamily: "",
    flexGrow: 9,
    flexDirection: "row",
  },

  navUl: {
    display: "inline",
    padding: "0",
    width: "16rem",
    listStyle: "none",
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
      // transform: "scale(1.1)",
    },
  },

  link: {
    fontSize: "105%",
    width: "50px",
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#e60000",
    },
  },

  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  icon: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));
