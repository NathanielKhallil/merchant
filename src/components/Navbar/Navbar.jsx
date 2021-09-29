import React from "react";
import { Link, useLocation } from 'react-router-dom';
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
          <div style={{justifyContent: 'space-between'}}>
            <Link to="/">Home</Link>
            <Link to="/products">Merch</Link>
          </div>
          

          <div className={classes.grow} />
          {location.pathname !== '/cart' && (
          <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>)}
        </Toolbar>
      </AppBar>
    </div>
           
  );
};
           
export default Navbar;
