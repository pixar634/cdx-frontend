import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';

function getSteps() {
  return [
  <b style={{color:'purple'}}>Enter Project Details</b>, 
  <b style={{color:'purple'}}>Manage Access</b>, 
  <b style={{color:'purple'}}>Additional Details</b>
];
}



function getStepContent(step=0) {
  switch (step) {
    case 0:
      return (
        <div className="pb-2">
        <form class="form-group">
       
        <TextField
          id="project-name"
          label="Name"
          variant="standard"
        />
        <br></br>
       
        <TextField
          id="project-description"
          label="Description"
          variant="standard"
          
        />
        </form>
        </div>
       
      );
    case 1:
      return (
        <div className="pb-2">
            <form class="form-group">
                
                <TextField
                    id="project-user-access"
                    label="Select User"
                    variant="standard"
                    
                  />
                  <br></br>

            </form>
        </div>
        
      );
    case 2:
      return (
        <div className="pb-2">

            <form class="form-group">
            <div className="pb-1">
            <TextField
                    id="extra-information"
                    label="Add Notes"
                    variant="standard"
                    className="pb-2"
                    
                  />
            </div>
           
                  <br></br>
            <Input
                    id="extra-information"
                    label="Add Notes"
                    type="file"
                    variant="standard"
                    
                  />
            </form>
        </div>
       
      );
    default:
      return 'Unknown step';
  }
}

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
    console.log("Submitted form")
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
     <div>
      <h1 className="pb-2 bg-purple-700 rounded-md p-2 text-bold text-white">CREATE NEW PROJECT</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div >
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                   
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                   
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} style={{padding:'10px'}}>
          <Typography className="pb-2">Great work! Let's move ahead or edit details.</Typography>
          <Button onClick={handleSubmit}  variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={handleReset}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
    </Box>
  );
}