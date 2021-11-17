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
  const [sentMessage, setSentMessage] = useState(false);

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
      setCaptchaVerified(false);
      return { ...currentForm, token: null };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!token) setCaptchaVerified(false);

    if (token && captchaVerified)
      setSentMessage(true);
      emailjs
        .sendForm(
          process.env.EMAIL_SERVICE,
          process.env.EMAIL_TEMPLATE,
          e.target,
          process.env.EMAIL_USER
        )
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
    };

    if (sentMessage) {
        document.getElementById("contactForm").reset()
    }

  const CaptchaMessage = () =>
    token === null ? (
      <>
        <Typography gutterBottom style={{ color: "red" }}>
          {" "}
          Please verify you are human
        </Typography>
      </>
    ) : (token !== null && !sentMessage) ? (
      <>
        <Typography gutterBottom style={{ color: "green" }}>
          {" "}
          Thank you for verifying you are human!{" "}
        </Typography>
      </>
    ) : (sentMessage && token) ? (
        <>
        <Typography gutterBottom style={{ color: "green" }}>
          {" "}
          Message sent!!{" "}
        </Typography>
      </>) : (
      <></>
    );

  return (
    <>
       <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h6">
            For potential appearances, comments or inquiries, please complete the
        form below.
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Fill out the form and I'll get back to you as soon as possible.
            </Typography>
            <form onSubmit={onSubmit} id="contactForm">
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
                    label="Phone (optional)"
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
                  className={classes.reCaptcha}
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
