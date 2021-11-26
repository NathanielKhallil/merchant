import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
import { Typography } from '@material-ui/core';
import ghostpineEtsyLogo from "../../assets/ghostpineEtsyLogo.webp";
import { FaEtsy } from "../../../node_modules/react-icons/fa/index";

const Products = ({ products}) => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundContainer}>
      <Typography variant="h5" className={classes.buyerNotice}>
      <img 
           className={classes.logo}
           src={ghostpineEtsyLogo}
           alt="Ghostpineco shop logo"
           /> *Currently, it's only possible to place and ship domestic orders within Canada through this website.
        International orders can be made through the Ghostpineco Etsy shop at no additional!           <FaEtsy className={classes.icon}
                
                onClick={() =>
                  window.open(
                    "https://www.etsy.com/ca/shop/Ghostpineco",
                    "_blank"
                  )
                }/>
        </Typography>

      <div className={classes.contentContainer} style={{minHeight:"100vh"}}>
         <div className={classes.toolbar} />
          <Grid container className={classes.positionContent}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={8} md={4} lg={4} >
                <Product product={product}/>
              </Grid>
            ))}
          </Grid>
           <div style={{marginTop: "3rem"}}>
        </div>
      </div>
    </div>
  );
};

export default Products;
