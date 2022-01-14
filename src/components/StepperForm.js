import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepTwo from "../components/StepTwo";
import StepOne from "../components/StepOne";
import StepThree from "../components/StepThree";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

function getSteps() {
  return [
    <b style={{ color: "purple" }}>Enter Project Details</b>,
    <b style={{ color: "purple" }}>Manage Access</b>,
    <b style={{ color: "purple" }}>Additional Details</b>,
  ];
}

function getStepContent(step = 0) {
  switch (step) {
    case 0:
      return (
        <div className="pb-2">
          <StepOne />
        </div>
      );
    case 1:
      return (
        <div className="pb-2">
          <StepTwo />
        </div>
      );
    case 2:
      return (
        <div className="pb-2">
          <StepThree />
        </div>
      );
    default:
      return "Unknown step";
  }
}

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
      projectName: "",
      projectDescription: "",
    },
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmit = () => {
    console.log("Submitted form");
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <div>
        <h1 className="pb-2 bg-purple-700 rounded-md p-2 text-bold text-white">
          CREATE NEW PROJECT
        </h1>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                      {getStepContent(index)}
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        type="submit"
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </form>
                  </FormProvider>
                </Typography>
                <div>
                  <div></div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} style={{ padding: "10px" }}>
            <Typography className="pb-2">
              Great work! Let's move ahead or edit details.
            </Typography>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </Paper>
        )}
      </div>
    </Box>
  );
}
