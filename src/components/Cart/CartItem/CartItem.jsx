import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
  const classes = useStyles();
  return (
    <Card
      style={{
        minWidth: "10.8rem",
        maxWidth: "21rem",
        maxHeight: "29rem",
        margin: "0 auto",
      }}
    >
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent
        className={classes.CardContent}
        style={{ minWidth: "9.9rem" }}
      >
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">{item.variant.description}</Typography>

        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.CartActions} />
      <div className={classes.buttons}>
        <Button
          type="button"
          size="small"
          onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
        >
          -
        </Button>
        <Typography>{item.quantity}</Typography>
        <Button
          type="button"
          size="small"
          onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
        >
          {" "}
          +
        </Button>
      </div>
      <Button
        variant="contained"
        type="button"
        color="secondary"
        onClick={() => onRemoveFromCart(item.id)}
      >
        Remove
      </Button>
    </Card>
  );
}

export default CartItem;
