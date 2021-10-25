import React from "react";
import { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import ReCaptchaV2 from "react-google-recaptcha";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [token, setToken] = useState(null);

  const handleToken = (token) => {
    setFormData((currentForm) => {
      setToken(token);
      setCaptchaVerified(true);
      return { ...currentForm, token };
    });
  };

  const handleExpire = () => {
    setFormData((currentForm) => {
      setToken(null);
      return { ...currentForm, token: null };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!token) setCaptchaVerified(false);

    if (token && captchaVerified)
      emailjs
        .sendForm(
          "service_9wnov1r",
          "template_sy18c7a",
          e.target,
          "user_V4iSx9ZvWTRDmS9V2iIDE"
        )
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
  };

  const CaptchaMessage = () =>
    token === null ? (
      <>
        <Typography gutterBottom style={{ color: "red" }}>
          {" "}
          Please verify you are human
        </Typography>
      </>
    ) : token !== null ? (
      <>
        <Typography gutterBottom style={{ color: "green" }}>
          {" "}
          Thank you for verifying you are human!{" "}
        </Typography>
      </>
    ) : (
      <></>
    );

  return (
    <>
      <Typography gutterBottom variant="h6" align="center">
        For potential appearances, commments or inquiries, please complete the
        form below.
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Reach out to me!
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Fill out the form and I'll get back to you as soon as possible.
            </Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="firstName"
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="userEmail"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number (optional)"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    name="message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.button}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
                <ReCaptchaV2
                  style={{ display: "inline-block" }}
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={handleToken}
                  onExpired={handleExpire}
                />
              </Grid>
              <CaptchaMessage />
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ContactForm;
