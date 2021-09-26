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
        maxHeight: "22rem",
        margin: "0 auto",
      }}
    >
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent
        className={classes.CardContent}
        style={{ minWidth: "9.9rem" }}
      >
        <Typography variant="h7">{item.name}</Typography>
        <Typography variant="h7">
          {item.selected_options[0].option_name}
        </Typography>

        <Typography variant="h7">
          <br></br>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions} />
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
