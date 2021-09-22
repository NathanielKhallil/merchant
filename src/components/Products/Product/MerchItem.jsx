import React from "react";
import { Grid, Button, Typography, Container } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../../lib/commerce";

import { useState, useEffect } from "react";

const createMarkup = (text) => {
  return { __html: text };
};

const MerchItem = ({ handleAddToCart }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, media, quantity, description, variant_groups } =
      response;

    setProduct({
      id,
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
      variant_groups: [variant_groups],
    });
    console.log(variant_groups);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

   
  const handleQuantity = (param) => {
    if (param === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (param === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <img
            onLoad={() => {
              // setLoading(false);
            }}
            src={product.src}
            alt={product.name}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography
            variant="body2"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h6">
            <table variant='h6' style={{textAlign: "justify"}}>
            <caption colSpan="5" style={{textAlign: "left"}}>Select your size at checkout!</caption>
                <thead variant="caption">
                    <tr style={{textAlign: "center"}}>
                    <th style={{textAlign: "left", width:'4rem'}}> Size(In):</th>
                    <th variant='h7' style={{width: "4rem"}}>S</th> 
                    <th variant='h7' >M</th>
                    <th variant='h7' >L</th>
                    <th variant='h7' >XL</th>
                    </tr>
                </thead>
                   
                <tbody>
                    <tr style={{textAlign: "center", fontSize:'1rem'}}>
                        <td style={{textAlign: "left"}}><strong>width:</strong></td>
                        <td>18</td> 
                        <td>20</td>
                        <td>22</td>
                        <td>24</td>
                    </tr> 
                    
                    <tr style={{textAlign: "center", fontSize:'1rem'}}>
                        <td style={{textAlign: "left"}}> <strong>height:</strong> </td>
                        <td> 28 </td>
                        <td> 29 <sup>1</sup>&frasl;<sub>4</sub> </td>
                        <td> 30 <sup>1</sup>&frasl;<sub>4</sub> </td>
                        <td> 31 <sup>1</sup>&frasl;<sub>4</sub> </td>
                    </tr>
                  </tbody>                     
                </table>
          </Typography>

          <Typography variant="h6"> Price: {product.price}</Typography>
          <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                handleQuantity("increase");
              }}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Quantity: {quantity}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => {
                handleQuantity("decrease");
              }}
            >
              -
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              onClick={() => {
                handleAddToCart(product.id, quantity);
              }}
            >
              <ShoppingCart /> Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MerchItem;

