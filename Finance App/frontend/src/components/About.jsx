import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <>
      <Box
        sx={{
          height: "50%",
          width: "100%",
          mt: 4,
        }}
      >
        <Typography variant="h4" align="center" color="primary.dark">
          About US
        </Typography>
        <CardMedia
          component="img"
          height="600"
          width="400"
          image="images/About.jpg"
        />
        <Typography variant="h4" align="center" mt="5px" color="primary.dark">
          What We Provide ?
        </Typography>
        <Typography variant="h5" align="center" color="primary" mt="5px">
          We make personal finance easy, convenient & transparent
        </Typography>
        <Typography variant="h6" ml="20px" mr="20px" mt="10px">
          Using data and technology innovations, we help you choose the
          most-suited financial products. Our algorithm-based technology
          platform provides you with access to multiple personal credit offers,
          ease of comparison of multiple offers available and unbiased advice.
        </Typography>
        <Typography variant="h4" align="center" mt="5px" color="primary.dark">
          What Makes Us Different ?
        </Typography>
        <Typography variant="h5" align="center" color="primary" mt="5px">
          We Provide Different types of loans as per the customers requirement
        </Typography>
        <Typography variant="h6" ml="20px" mr="20px" mt="10px">
          We Suggest Customers to Many Banks and NBFCs Loan details so that they
          can choose their Loan provider as per their requirements and suitable
          budget. Our team always ready to solve Customers queries and our goal
          is to help customers to find best Bank and NBFCs to complete their
          requirements and goals.
        </Typography>
      </Box>
    </>
  );
}

export default About;
