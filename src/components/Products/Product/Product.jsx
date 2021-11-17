import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,

} from "@material-ui/core";
import { Link } from 'react-router-dom';

import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/merchitem/${product.id}`} className={classes.link}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
        
      />
      <CardContent style={{ paddingBottom: "0%" }}>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom style={{fontWeight: "bold"}}> 
            {product.name}
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>


      </CardContent>
   
      </Link>
    </Card>
  );
};

export default Product;
