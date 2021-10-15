import React from "react";
import { Typography, List, ListItem, ListItemText, CircularProgress } from "@material-ui/core";

const Review = ({ checkoutToken, tokenUpdate, shippingData }) => {
  console.log(tokenUpdate);
  
  return (
    <div>
      {!shippingData || tokenUpdate === null ? (
      <CircularProgress/>
      ) : (
      <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}

        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Tax" />
          <Typography variant="body2">
            {tokenUpdate.tax.amount.formatted_with_symbol}
          </Typography>
        </ListItem>

        <ListItem style={{ padding: "10px 0" }}>
            <ListItemText
              primary={` ${shippingData.shippingDetails.description} Shipping`}
            />
        <Typography variant="body2">
          {shippingData.shippingDetails.price.formatted_with_symbol}
        </Typography>
          </ListItem>

        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {tokenUpdate.total_with_tax.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>

      </>)}
    </div>
  )
};

export default Review;
