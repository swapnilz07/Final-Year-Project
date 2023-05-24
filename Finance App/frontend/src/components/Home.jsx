import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import EastIcon from "@mui/icons-material/East";
import { NavLink } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  { label: "All Loan Under One Roof", imgPath: "./images/image6.jpg" },
  { label: "Home Loan - Quick and Easy", imgPath: "./images/image8.jpg" },
  {
    label: "A Personal Loan for whatever you need",
    imgPath: "./images/image1.jpg",
  },
  {
    label: "Get Business Loan at lowest interest rates",
    imgPath: "./images/image2.jpg",
  },
  { label: "Buy a Health Insurance Policy", imgPath: "./images/image5.jpg" },
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="slider">
        <Typography
          variant="h4"
          align="center"
          marginTop={4}
          sx={{ fontWeight: "bold" }}
        >
          Choose Your Best Bank & NBFC's
        </Typography>
        <Typography
          variant="h6"
          align="center"
          marginTop={1}
          sx={{ fontWeight: "bold", fontSize: 25 }}
        >
          Choose SwapFinance for your Loan with low interest rates and enjoy the
          savings
        </Typography>
        <Box sx={{ maxWidth: 900, flexGrow: 1, mx: "auto" }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
              mx: "auto",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {" "}
              {images[activeStep].label}
            </Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 500,
                      display: "block",
                      maxWidth: 900,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {" "}
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}{" "}
                Back
              </Button>
            }
          />
          <Box mt={2} align="center">
            <Button
              variant="outlined"
              size="large"
              endIcon={<EastIcon />}
              sx={{ borderRadius: 5, mt: 3 }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/signin"
              >
                {" "}
                Get Started{" "}
              </NavLink>
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default Home;
