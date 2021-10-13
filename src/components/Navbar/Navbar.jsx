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
            Remy Merch
          </Typography>
          <Typography variant="h7" className={classes.navBar}>
            <nav
              className={classes.navBar}
              style={{ justifyContent: "flex-end" }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: "inline",
                  padding: "0",
                  width: "8rem",
                }}
              >
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
              </ul>
            </nav>
          </Typography>

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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
