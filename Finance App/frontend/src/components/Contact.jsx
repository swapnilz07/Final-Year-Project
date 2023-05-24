import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function Contact() {
  return (
    <>
      <Box>
        <Typography variant="h4" mt="30px" align="center">
          Contact Us
        </Typography>
        <Divider sx={{ bgcolor: "primary.dark", mt: 2 }} />
        <CardMedia
          component="img"
          height="500"
          width="300"
          image="images/IndiaMap.jpg"
        />
        <Grid container sx={{ justifyContent: "space-around", mt: 5 }}>
          <Grid item>
            <Typography variant="h6" mt="15px" ml="20px">
              <FmdGoodIcon /> Headquarters
            </Typography>
            <Typography variant="body1" ml="12px">
              Metro station, C54, 2nd Floor,
              <br /> Near Priya Gold Building, near Sector 15,
              <br />
              Bangalore, Karnataka 201301
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" mt="15px" ml="20px">
              <EmailIcon /> Email Us :
            </Typography>
            <Typography variant="body1" ml="15px">
              SwapFinance@gmail.com
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" mt="15px" ml="20px">
              <CallIcon /> Contact Us:
            </Typography>
            <Typography variant="body1" ml="15px">
              Bangalore : 987-654-321 <br /> Mumbai : 789-456-123 <br />
              Customer Service : 123-456-789
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
