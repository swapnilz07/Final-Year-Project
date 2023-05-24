import React from "react";

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
import { NavLink } from "react-router-dom";

function Unsecure() {
  const images = [
    {
      name: "Business Loan",
      desc: "A business loan loan is borrowed money that businesses use to cover costs they can't afford on their own in the short term. Loans are not provided without charge. As the cost of borrowing the money, lenders charge interest on loans.",
      imgPath: "./loanimages/businessloan.jpg",
      title: "Business Loan",
    },
    {
      name: "Personal Loan",
      desc: "A personal loan is a loan that does not require collateral or security and is offered with minimal documentation. You can use the funds from this loan for any legitimate financial need. Like any other loan, you must repay it accordance to the agreed terms with the bank.",
      imgPath: "./loanimages/personalloan.jpg",
      title: "Personal Loan",
    },
    {
      name: "Education Loan",
      desc: "An education loan is a sum of money borrowed to finance post-secondary education or higher education-related expenses. Education loans are intended to cover the cost of tuition, books and supplies, and living expenses while the borrower is in the process of pursuing a degree.",
      imgPath: "./loanimages/educationloan.jpg",
      title: "Education Loan",
    },
    {
      name: "Car Loan",
      desc: "A Vehicle Loan is a loan that allows you to purchase two and four wheelers for personal use. Typically, the lender loans the money (making a direct payment to the dealer on the buyer's behalf) while the buyer must repay the loan in Equated Monthly Instalments (EMIs) over a specific tenure at a specific interest rate.",
      imgPath: "./loanimages/vehicleloan.jpg",
      title: " Vehicle Loan",
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

export default Unsecure;
