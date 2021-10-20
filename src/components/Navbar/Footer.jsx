import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
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
      <AppBar
        style={{
          position: "fixed",
          background: "#000",
          marginTop: "94vh",
          justifyContent: "left",
        }}
      >
        <Container maxWidth={false}>
          <Toolbar>
            <Typography variant="body1" color="inherit">
              Follow me on Instagram and Twitter!{" "}
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
              />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
