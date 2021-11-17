import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/remyLogo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Ephemeral Remy
          </Typography>
      
            <Typography
              component={"span"}
              variant="body1"
              className={classes.navBar}
            >
              <Toolbar
                className={classes.navBar}
              >
                <ul className={classes.navUl}>
                  <li className={classes.listItem}>
                    <Link className={classes.link} to="/">
                      Home
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link className={classes.link} to="/products">
                      Merch
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link className={classes.link} to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </Toolbar>
              <div className={classes.grow} />
            {location.pathname !== "/cart" && (
              <div className={classes.button}>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
            </Typography>
            
      
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
