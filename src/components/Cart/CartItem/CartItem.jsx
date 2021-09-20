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

function CartItem({ item }) {
  const classes = useStyles();
  return (
    <Card
      style={{
        minWidth: "10.8rem",
        maxWidth: "15rem",
        maxHeight: "18rem",
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
          <br></br>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions} />
    </Card>
  );
}

export default CartItem;
