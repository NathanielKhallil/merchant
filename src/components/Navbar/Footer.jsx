import React from "react";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import {
  FaInstagram,
  FaTiktok,
} from "../../../node_modules/react-icons/fa/index";

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      
      <div
        style={{ 
          position: "absolute",
          color: "white",
          background: "#000",
          bottom: "0",
          left: "0",
          right: "0",
          minHeight: "1rem",
          padding: ".5rem 0",
          justifyContent: "center",
        }}
      >
        <Container maxWidth={false} className={classes.footerBar}>
         
            <div color="inherit">
              <p className={classes.footerText}>Follow me on Instagram and Twitter!{" "}
              <FaInstagram
                className={classes.icon}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/ephemeral_remy/?hl=en",
                    "_blank"
                  )
                }
              />{" "}
              <FaTiktok
                className={classes.icon}
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/@ephemeral_remy?lang=en",
                    "_blank"
                  )
                }
              /></p>
            </div>
        
        </Container>
      </div>
    </div>
  );
};

export default Footer;
