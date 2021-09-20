import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

function Cart({ cart }) {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography varient="subtitle1" style={{ color: "white" }}>
      You have no items in your cart. Add some merch!
    </Typography>
  );

  const FilledCart = () => (
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>
              {" "}
              <CartItem item={item} />
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" style={{ color: "white" }}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );

  if (!cart.line_items) return "...loading";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography
        className={classes.title}
        variant="h3"
        style={{ color: "white" }}
        gutterBottom
      >
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
