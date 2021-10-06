import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import {commerce} from "../../lib/commerce";



const Review = ({ checkoutToken }) => {
  const [tokenUpdate, setTokenUpdate] = useState([])
  
  const updateToken = () => {
    commerce.checkout.getLocationFromIP(checkoutToken).then((result) => commerce.checkout.setTaxZone(checkoutToken.id, {
    country: result.country_code,
    region: result.region_code,
    postal_zip_code: result.postal_zip_code,
    }).then(commerce.checkout.getLive(checkoutToken.id).then((response) => setTokenUpdate(response))))
  }
  useEffect(() => {
    let mounted = true;
    if (mounted) 
      updateToken()
      mounted = false;
  }, [setTokenUpdate]);
  console.log(tokenUpdate.line_items)

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
      {!tokenUpdate &&
        <Typography variant="h6" gutterBottom>
          Loading....
          </Typography>}
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
        {checkoutToken.live.tax.amount.formatted_with_symbol}
      </Typography>
      </ListItem>
        
        

        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutToken.live.total_with_tax.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default Review;
