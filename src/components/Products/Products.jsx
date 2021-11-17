import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";


const Products = ({ products}) => {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer}>
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
  );
};

export default Products;
