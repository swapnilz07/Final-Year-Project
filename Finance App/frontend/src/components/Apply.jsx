import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import {
  Select,
  FormHelperText,
  TextField,
  FormControlLabel,
} from "@mui/material";
import {
  Checkbox,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
} from "@material-ui/core";

const theme = createTheme();

function Apply() {
  const [gender, setGender] = useState();
  const [empstss, setEmpsts] = useState("");
  const [rdoc, setRdoc] = useState("");

  const handlerChange = (e) => {
    console.log(e.target.value);
    setEmpsts(e.target.value);
    setGender(e.target.value);
  };

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    age: "",
    address: "",
    email: "",
    contact: "",
    salaryslip: "",
    bankstatement: "",
    cibilscore: "",
    aadhar: "",
    pan: "",
    voterid: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const Apply = () => {
    console.log("ahahahha");
    const { fname, lname, age, adress, email, contact, aadhar, pan, voterid } =
      user;
    if (
      fname &&
      lname &&
      age &&
      adress &&
      email &&
      contact &&
      aadhar &&
      pan &&
      voterid
    ) {
      axios.post("/apply", user).then((res) => console.log(res));
    } else {
      alert("Please Enter all the details");
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
              <CreditScoreIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Application for Loan
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
                    inputProps={Number}
                    label="Enter Your Age"
                    name="age"
                    value={user.age}
                    autoComplete="age"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel id="gender-radio">Gender</FormLabel>
                  <RadioGroup row name="gender" aria-labelledby="gender-radio">
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      onChange={handlerChange}
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      onChange={handlerChange}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                      onChange={handlerChange}
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-flexible"
                    required
                    fullWidth
                    label="Address"
                    name="address"
                    value={user.adress}
                    autoComplete="address"
                    multiline
                    maxRows={4}
                    onChange={handleChange}
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
                    inputProps={Number}
                    label="Enter Your Contact number"
                    name="contact"
                    value={user.contact}
                    autoComplete="contact"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    value={empstss}
                    displayEmpty
                    style={{ width: "100%" }}
                    onChange={handlerChange}
                  >
                    <MenuItem value="" disabled>
                      Select Employee Status
                    </MenuItem>
                    <MenuItem value={1}>Salaried</MenuItem>
                    <MenuItem value={2}>Self-Employed</MenuItem>
                  </Select>
                  <FormHelperText>You have to choose one</FormHelperText>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="resume-file">
                    <Input
                      accept="doc/*"
                      id="resume-file"
                      type="file"
                      onChange={(e) => {
                        setRdoc(e.target.files[0]);
                      }}
                      style={{ width: "100%" }}
                    />
                    <Button variant="contained" component="span">
                      Upload Salary Slip here
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="resume-file">
                    <Input
                      accept="doc/*"
                      id="resume-file"
                      type="file"
                      onChange={(e) => {
                        setRdoc(e.target.files[0]);
                      }}
                      style={{ width: "100%" }}
                    />
                    <Button variant="contained" component="span">
                      upload latest 3 months bank Statement
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="resume-file">
                    <Input
                      accept="doc/*"
                      id="resume-file"
                      type="file"
                      onChange={(e) => {
                        setRdoc(e.target.files[0]);
                      }}
                      style={{ width: "100%" }}
                    />
                    <Button variant="contained" component="span">
                      Upload Aadhar
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="resume-file">
                    <Input
                      accept="doc/*"
                      id="resume-file"
                      type="file"
                      onChange={(e) => {
                        setRdoc(e.target.files[0]);
                      }}
                      style={{ width: "100%" }}
                    />
                    <Button variant="contained" component="span">
                      Upload Pan
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="resume-file">
                    <Input
                      accept="doc/*"
                      id="resume-file"
                      type="file"
                      onChange={(e) => {
                        setRdoc(e.target.files[0]);
                      }}
                      style={{ width: "100%" }}
                    />
                    <Button variant="contained" component="span">
                      Upload voter id
                    </Button>
                  </label>
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
                onClick={Apply}
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Apply;
