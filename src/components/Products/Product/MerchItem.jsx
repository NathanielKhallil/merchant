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
  const [products, setProducts] = useState([]);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    console.log(response.variant_groups[0].options[0].name);
    console.log(response.variant_groups[0].options[0].id);
    const { name, price, media, quantity, description, variant_groups } =
      response;

    setProduct({
      id,
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
      variant_groups: variant_groups[0].options[0],
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
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
          <Typography variant="h2">{product.name}</Typography>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h6">
            size: {product.variant_groups.name}
          </Typography>

          <Typography variant="h3"> Price: {product.price}</Typography>
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
            <Typography variant="h3">Quantity: {quantity}</Typography>
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
