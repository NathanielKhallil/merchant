import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import NavlinksDesktop from "./NavlinksDesktop";
import NavlinksMobile from "./NavlinksMobile";

import { FaStream } from "react-icons/fa"
import { CgCloseO } from "react-icons/cg"
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/remyLogo.png";
import useStyles from "./styles";
import { useState } from 'react';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <FaStream className={classes.hamburger} onClick={()=> setOpen(!open)}
  />
  const closeIcon = <CgCloseO className={classes.hamburger} onClick={()=> setOpen(!open)}
  />

   

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
              <div className={classes.grow} />
             <NavlinksDesktop/>
             
             {open ? closeIcon : hamburgerIcon}
             {open && <NavlinksMobile closeLinks={links => setOpen(links)}/>}
             <div className={classes.growMobile} />
              
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
