import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LoginIcon from "@mui/icons-material/Login";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CompareIcon from "@mui/icons-material/Compare";
import ApprovalIcon from "@mui/icons-material/Approval";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Services() {
  const [spacing, setSpacing] = React.useState(2);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          mt: 5,
        }}
      >
        <Typography variant="h3" gutterBottom align="center">
          Our Services <VolunteerActivismIcon />
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "primary.dark" }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={spacing}
            sx={{
              width: "100%",
              height: "60%",
              justifyContent: "space-around",
              mt: 4,
            }}
          >
            <Grid item>
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  mt: 5,

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    Login For free <LoginIcon />
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    LogIn
                  </Typography>
                  <Typography variant="body2">
                    Now You can login for free
                    <br />
                    {
                      '"Login Your Account for free through Email and know about Loan information in detail."'
                    }
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  mt: 5,

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid item>
                  <Paper
                    sx={{
                      height: 200,
                      width: 300,
                      mt: 5,

                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="div">
                        We provide Loans <CurrencyRupeeIcon />
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Loan
                      </Typography>
                      <Typography variant="body2">
                        You can get a Loan
                        <br />
                        {
                          '"Now You can get a loan of your choice with lower interest rates with fast disbursal processs."'
                        }
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  mt: 5,

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid item>
                  <Paper
                    sx={{
                      height: 200,
                      width: 300,
                      mt: 5,

                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Banks and NBFC's <AccountBalanceIcon />
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Banks
                      </Typography>
                      <Typography variant="body2">
                        You can choose Bank & NBFC's
                        <br />
                        {
                          '"Now You can get a loan of your choice from your choice of bank and NBFC"S that suits your budget."'
                        }
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={spacing}
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "space-around",
            }}
          >
            <Grid item>
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  mt: 5,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    Compare Loans <CompareIcon />
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Compare
                  </Typography>
                  <Typography variant="body2">
                    Now You can Compare
                    <br />
                    {
                      '"Now You can compare loan details of different banks and NBFCs and you can select a bank for your required loan  ."'
                    }
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  mt: 5,

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid item>
                  <Paper
                    sx={{
                      height: 200,
                      width: 300,
                      mt: 5,

                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="div">
                        We provide Support <HelpCenterIcon />
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Support
                      </Typography>
                      <Typography variant="body2">
                        You can ask for support
                        <br />
                        {
                          '"Now You can call us any time to solve your queries about any loan type and Loan Providers such as Banks and NBFCs."'
                        }
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  mt: 5,

                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid item>
                  <Paper
                    sx={{
                      height: 200,
                      width: 300,
                      mt: 5,

                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Apply For Loan <ApprovalIcon />
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Apply
                      </Typography>
                      <Typography variant="body2">
                        You can Apply for Loan
                        <br />
                        {
                          '"Now You can apply for a loan from our application just click on apply button choose your loan type and bank and you will get a call from our loan providers. ."'
                        }
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
