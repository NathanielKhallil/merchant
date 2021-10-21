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
import ReCaptchaV2 from 'react-google-recaptcha';




const ContactForm = () => {
    const classes = useStyles();
    const [formVerified, setFormVerified] = useState();

    const handleToken = (token) => {
        setFormVerified((currentForm) => {
         return {...currentForm, token }
        })
      }
    
      const handleExpire = () => {
        setFormVerified((currentForm) => {
         return {...currentForm, token: null }
        })
      }

      const onSubmit = (e) => {
          e.preventDefault();
        if (formVerified)
        setFormVerified((currentForm) => {
         return {...currentForm, token: null }
        })
      }

      console.log(formVerified);


        return (
            <div className="App"> 
            <Typography gutterBottom variant="h6" align="center">
            For potential appearances, commments or inquiries, please complete the form below.
            </Typography>
            <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    Connect with me!
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    Fill out the form and I'll get back to you as soon as possible.
                </Typography> 
                <form onSubmit={onSubmit}>
                    <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                        <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required id='firstName'/>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required id='lastName' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required id='email'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="number" placeholder="Enter phone number (optional)" label="Phone" variant="outlined" fullWidth id='phone'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required id='message'/>
                    </Grid>
                    <Grid item xs={12}>
                        
                        <Button type="submit" variant="contained" className={classes.button} fullWidth>
                        Submit</Button>
                    </Grid>
                    <ReCaptchaV2  style={{ display: "inline-block" }} sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleToken} onExpired={handleExpire}/>
                    </Grid>
                </form>
                </CardContent>
            </Card>
            </Grid>

        </div>
        );
    };

export default ContactForm;