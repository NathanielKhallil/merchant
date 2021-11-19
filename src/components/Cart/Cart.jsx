import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,

} from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1" style={{ color: "white" }}>
      You have no items in your cart.
      <Link to="/products" className={classes.link}>
        Add some merch
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <div>
      <Grid container spacing={3} className={classes.positionContent}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={8} md={4} key={uuidv4()}>
            <div className={classes.itemContainer}>
              <CartItem 
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5" style={{ color: "white" }}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="checkout"
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

  if (!cart.line_items) return (
    
    <div>"...loading"</div>
  );
  return (
    <div className={classes.backgroundContainer}> 
      <Container>
        <div className={classes.toolbar}/>
        <Typography
          className={classes.title}
          variant="h4"
      
          gutterBottom
        >
          Review your cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        <div style={{ paddingBottom: "5rem" }} />
      </Container>
    </div>
  );
}

export default Cart;
