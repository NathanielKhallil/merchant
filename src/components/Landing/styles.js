import { makeStyles } from "@material-ui/core/styles";
import remyHero from "../../assets/remyHero.webp";
import remyGhost from "../../assets/remyGhost.webp";

export default makeStyles((theme) => ({
  coverPhoto: {
    display: "block",
    backgroundImage: `url(${remyHero})`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    margin: "0",

    [theme.breakpoints.down("md")]: {
      marginTop: "0",
      backgroundImage: `url(${remyGhost})`,
    },
  },
}));
