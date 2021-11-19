import React from "react";
import { AppBar } from "@material-ui/core";
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
      <div style={{paddingTop: '2rem', background: 'black'}}/>
      <AppBar
        style={{ 
          position: "fixed",
          background: "#000",
          
          justifyContent: "left",
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
      </AppBar>
    </div>
  );
};

export default Footer;
