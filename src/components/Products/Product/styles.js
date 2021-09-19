import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 60,

    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "22rem",
  },

  muiCardContent: {
    root: {
      paddingBottom: "0%",
    },
  },
}));
