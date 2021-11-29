import React from 'react';
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import useStyles from "./styles";

const NavlinksMobile = () => {
    const classes = useStyles();
    return (
      <nav className={classes.mobileNavigation}>
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
      </nav>
    )
}

export default NavlinksMobile;
