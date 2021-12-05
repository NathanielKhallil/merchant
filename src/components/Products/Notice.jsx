import React from "react";
import { Typography } from '@material-ui/core';
import { FaEtsy } from "../../../node_modules/react-icons/fa/index";
import useStyles from "./styles";


const Notice = () => {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.buyerNotice}>
        We are Currently only accepting and shipping domestic orders within Canada through this website at this time.
        International orders can be made through the Ghostpineco Etsy shop at no additional cost! {" "}
  
        <FaEtsy className={classes.icon}
                
                onClick={() =>
                  window.open(
                    "https://www.etsy.com/ca/shop/Ghostpineco",
                    "_blank"
                  )
                }/>
        </Typography>
    );
}


export default Notice;