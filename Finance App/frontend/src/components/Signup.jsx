import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function Signup() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    contact: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ email: data.get("email"), password: data.get("password") });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const register = () => {
    console.log("ahahahha");
    try {
      const { fname, lname, contact, email, password, reEnterPassword } = user;
      if (
        !fname ||
        !lname ||
        !contact ||
        !email ||
        !password ||
        !(password === reEnterPassword)
      )
        toast.error("Invalid details");
      const res = axios.post("/register", user).then((res) => console.log(res));
      toast.success(res.data || "Your Registration has been successfull");
      navigate("/signin");
    } catch (err) {
      console.log({ err });
      toast.error(err.message);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {" "}
              <LockOutlinedIcon />{" "}
            </Avatar>
            <Typography component="h1" variant="h5">
              {" "}
              Sign up{" "}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="fname"
                    value={user.fname}
                    label="First Name"
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    name="lname"
                    value={user.lname}
                    autoComplete="lastname"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Contact Number"
                    name="contact"
                    value={user.contact}
                    autoComplete="contact_number"
                    onChange={handleChange}
                    InputProps={{
                      inputProps: { pattern: "^(0|91)?[6-9][0-9]{9}$" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={user.email}
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    value={user.password}
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    label="Re-enter Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={register}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink
                    className="link"
                    to="/signin"
                    style={{
                      color: "#2979ff",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
export default Signup;
