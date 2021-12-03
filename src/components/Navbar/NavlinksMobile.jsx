import React from 'react';
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import useStyles from "./styles";

const NavlinksMobile = (props) => {
    const classes = useStyles();
    



    return (
      <nav className={classes.mobileNavigation}>
        <Toolbar
        className={classes.navBar}
      >
        <ul className={classes.navUlMobile}>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/" onClick={() => props.closeLinks(false)}>
              Home
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/products" onClick={() => props.closeLinks(false)}>
              Merch
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/contact" onClick={() => props.closeLinks(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </Toolbar>
      </nav>
    )
}

export default NavlinksMobile;
