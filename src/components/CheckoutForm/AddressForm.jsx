import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../lib/commerce";
import FormInput from "./FormInput";
import useStyles from "./Checkout/styles";

function AddressForm({ checkoutToken, next }) {
  const classes = useStyles();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const [shippingDetails, setShippingDetails] = useState([]);
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );
  const options = shippingOptions.map((s0) => ({
    id: s0.id,
    label: `${s0.description} - (${s0.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    if (checkoutToken) fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision && shippingCountry)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  useEffect(() => {
    const checkShipping = async () => {
      if (shippingCountry && shippingOption && shippingSubdivision)
        try {
          const response = await commerce.checkout.checkShippingOption(
            checkoutToken.id,
            {
              shipping_option_id: shippingOption,
              country: shippingCountry,
              region: shippingSubdivision,
            }
          );
          response &&
          shippingCountry &&
          shippingOption &&
          shippingSubdivision &&
          checkoutToken
            ? setShippingDetails(response)
            : console.log("Waiting for response..");
        } catch (error) {
          return console.log(error);
        }
    };
    let isFinished = false;
    if (!isFinished) checkShipping();
    return () => {
      isFinished = true;
    };
  }, [shippingCountry, shippingOption, shippingSubdivision]);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        {!shippingDetails ? (
          <CircularProgress className={classes.spinner} />
        ) : (
          <form
            onSubmit={methods.handleSubmit((data) =>
              next({
                ...data,
                shippingCountry,
                shippingSubdivision,
                shippingOption,
                shippingDetails,
              })
            )}
          >
            <Grid container spacing={3}>
              <FormInput required name="firstName" label="First name" />
              <FormInput required name="lastName" label="Last name" />
              <FormInput required name="address1" label="Address" />
              <FormInput required name="email" label="Email" />
              <FormInput required name="city" label="City" />
              <FormInput required name="zip" label="ZIP / Postal Code" />

              <Grid item xs={12} sm={6}>
                <InputLabel> Shipping Country </InputLabel>
                <Select
                  value={shippingCountry}
                  fullWidth
                  onChange={(e) => setShippingCountry(e.target.value)}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel> Shipping Subdivision </InputLabel>
                <Select
                  value={shippingSubdivision}
                  fullWidth
                  onChange={(e) => setShippingSubdivision(e.target.value)}
                >
                  {subdivisions.map((subdivision) => (
                    <MenuItem key={subdivision.id} value={subdivision.id}>
                      {subdivision.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel> Shipping Options </InputLabel>
                <Select
                  value={shippingOption}
                  fullWidth
                  onChange={(e) => setShippingOption(e.target.value)}
                >
                  {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button component={Link} to="/cart" variant="outlined">
                Back to Cart
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </div>
          </form>
        )}
      </FormProvider>
    </div>
  );
}

export default AddressForm;
