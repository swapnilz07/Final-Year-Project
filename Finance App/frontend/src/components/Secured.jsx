import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";

function Secured() {
  const images = [
    {
      name: "Home Loan",
      desc: "A home loan is an amount an individual borrows from a financial institution such as a housing finance company to buy a new or a resale home, construct a home or renovate or extend an existing one.",
      imgPath: "./loanimages/homeloan.jpg",
      title: "Home Loan",
    },
    {
      name: "Loan Against Property",
      desc: "Loan against property (LAP) is a type of loan facility availed by individuals and businesses against the mortgage of a commercial or residential property.It is a Secure Loan. ",
      imgPath: "./loanimages/LAP.jpg",
      title: "Loan Against Property",
    },
    {
      name: "Gold Loan",
      desc: "Gold loan(also called loan against gold) taken by the borrower from a lender by pledging their gold articles as collateral.The loan amount provided is a certain percentage of the gold upto 80%.",
      imgPath: "./loanimages/goldloan.jpg",
      title: "Gold Loan",
    },
    {
      name: "Loan Against LIC Policies",
      desc: "Loans against insurance policies are sanctioned only when traditional policies such as money back and endowment policies are pledged.These policies savings elements that make banks acceptable.",
      imgPath: "./loanimages/insurancepolicies.jpg",
      title: "Loan Against Insurance Policies",
    },
    {
      name: "Loan Against Mutual Funds and Shares",
      desc: "Loan against securities is a loan where you pledge your shares, mutual funds or life insurance policies as collateral to the bank against your loan amount.",
      imgPath: "./loanimages/mutualfunds.jpg",
      title: "Loan Against Mutual Funds and Shares",
    },
    {
      name: "Loan Against Fixed Deposit",
      desc: "Loan against FD (Fixed Deposit) is a type of secured loan where customers can pledge their fixed deposit as security and get a loan in return. The amount of the loan depends on the FD deposit amount.",
      imgPath: "./loanimages/fixeddeposit.jpg",
      title: "Loan Against Fixed Deposit",
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue, "e", event);
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1", mt: 20 }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "90%",
              mx: "auto",
              bgcolor: "background.paper",
            }}
          >
            <TabList
              value={value}
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {images.map((loan, key) => {
                return (
                  <Tab
                    key={key}
                    // onclick={(e) => console.log(e)}

                    label={
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={loan.imgPath}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {loan.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {loan.desc}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">
                            <NavLink
                              style={{ textDecoration: "none", color: "black" }}
                              to="/apply"
                            >
                              Apply
                            </NavLink>
                          </Button>
                          <Button size="small">
                            <NavLink
                              style={{ textDecoration: "none", color: "black" }}
                              to={`/banks/${loan.name}`}
                            >
                              Know more
                            </NavLink>
                          </Button>
                        </CardActions>
                      </Card>
                    }
                    value={key}
                  />
                );
              })}
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </>
  );
}

export default Secured;
