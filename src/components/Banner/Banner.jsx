import React from "react";
import useStyles from "./styles";
import bannerImage from "../../assets/Ghostpine_Banner.webp";

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <img className={classes.bannerImage}
        src={bannerImage}
        alt="banner"
        />
    </div>
  );
}

export default Banner;
