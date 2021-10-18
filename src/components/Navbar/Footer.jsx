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

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        style={{
          position: "fixed",
          background: "#000",
          marginTop: "92.5vh",
        }}
      >
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              Follow me on my official social media accounts!
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
