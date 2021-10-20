import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";

import { commerce } from "../../../lib/commerce";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Shipping address", "Payment details"];
function Checkout({ cart, order, handleCaptureCheckout, error }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [tokenUpdate, setTokenUpdate] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        history.push("/");
      }
    };

    generateToken();
  }, [cart, history]);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  useEffect(() => {
    const updateToken = async () => {
      if (shippingData && checkoutToken) {
        const token2 = await commerce.checkout
          .getLocationFromIP(checkoutToken)
          .then((result) =>
            commerce.checkout
              .setTaxZone(checkoutToken.id, {
                country: result.country_code,
                region: result.region_code,
                postal_zip_code: result.postal_zip_code,
              })
              .then(commerce.checkout.getLive(checkoutToken.id))
          );

        if (token2) setTokenUpdate(token2.live);
      }
    };

    updateToken(shippingData);
  }, [checkoutToken, shippingData]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  const Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference} ref
          </Typography>
        </div>
        <br />
        <Button variant="outline" type="button" component={Link} to="/">
          Back to Home
        </Button>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button variant="outline" type="button" component={Link} to="/">
          Back to Home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
      <Button variant="outline" type="button" component={Link} to="/">
        Back to Home
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        tokenUpdate={tokenUpdate}
        nextStep={nextStep}
        backStep={backStep}
        handleCaptureCheckout={handleCaptureCheckout}
        timeout={timeout}
      />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            {" "}
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
        <divider />
      </main>
    </>
  );
}

export default Checkout;
