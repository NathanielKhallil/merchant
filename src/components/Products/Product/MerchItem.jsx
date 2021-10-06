import React from "react";
import { Grid, Button, Typography, Container } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../../lib/commerce";
import { Select, MenuItem } from "@material-ui/core";

import { useState, useEffect } from "react";

const createMarkup = (text) => {
  return { __html: text };
};

const MerchItem = ({ handleAddToCart }) => {
  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [sizeOption, setSizeOption] = useState([]);
  const [variantGroup, setVariantGroup] = useState();

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    console.log(response);
    const { name, price, media, quantity, description, variant_groups } =
      response;

    setProduct({
      id,
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
      variant_groups: variant_groups,
    });
  };
  console.log(product)
  const getVariants = async (id) => {
    const data = await commerce.products.retrieve(id);

    let option = data.variant_groups[0].options.map((element) => ({
      id: element.id,
      name: element.name,
    }));
    setVariant(option);
  };

  const completeVariant = async (id, size) => {
    let variantGroup = {};
    const data = await commerce.products.retrieve(id);
    variantGroup[data.variant_groups[0].id] = size;

    setVariantGroup(variantGroup);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
    getVariants(id[2]);
  }, []);

  useEffect(() => {
    const id = window.location.pathname.split("/");
    if (sizeOption) completeVariant(id[2], sizeOption);
  }, [sizeOption]);

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
            <table variant="h6" style={{ textAlign: "justify" }}>
              <caption colSpan="5" style={{ textAlign: "left" }}>
                Select your size at checkout!
              </caption>
              <thead variant="caption">
                <tr style={{ textAlign: "center" }}>
                  <th style={{ textAlign: "left", width: "4rem" }}>
                    {" "}
                    Size(In):
                  </th>
                  <th variant="h6" style={{ width: "4rem" }}>
                    S
                  </th>
                  <th variant="h6">M</th>
                  <th variant="h6">L</th>
                  <th variant="h6">XL</th>
                </tr>
              </thead>

              <tbody>
                <tr style={{ textAlign: "center", fontSize: "1rem" }}>
                  <td style={{ textAlign: "left" }}>
                    <strong>width:</strong>
                  </td>
                  <td>18</td>
                  <td>20</td>
                  <td>22</td>
                  <td>24</td>
                </tr>

                <tr style={{ textAlign: "center", fontSize: "1rem" }}>
                  <td style={{ textAlign: "left" }}>
                    {" "}
                    <strong>height:</strong>{" "}
                  </td>
                  <td> 28 </td>
                  <td>
                    {" "}
                    29 <sup>1</sup>&frasl;<sub>4</sub>{" "}
                  </td>
                  <td>
                    {" "}
                    30 <sup>1</sup>&frasl;<sub>4</sub>{" "}
                  </td>
                  <td>
                    {" "}
                    31 <sup>1</sup>&frasl;<sub>4</sub>{" "}
                  </td>
                </tr>
              </tbody>
            </table>

            <Select
              value={sizeOption}
              fullWidth
              onChange={(e) => setSizeOption(e.target.value)}
            >
              {variant.map((element) => (
                <MenuItem key={element.name} value={element.id}>
                  {element.name}
                </MenuItem>
              ))}
            </Select>
            <p></p>
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
                handleAddToCart(product.id, quantity, variantGroup);
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
