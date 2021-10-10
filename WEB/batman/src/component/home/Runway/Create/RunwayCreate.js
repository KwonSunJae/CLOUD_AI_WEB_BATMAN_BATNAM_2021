import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LinearStepper = ({ steps, activeStep, setActiveStep, renderList }) => {
  const handleNext = () => {
    if (activeStep !== steps.length) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          //   if (isStepOptional(index)) {
          //     labelProps.optional = (
          //       <Typography variant="caption">Optional</Typography>
          //     );
          //   }
          //   if (isStepSkipped(index)) {
          //     stepProps.completed = false;
          //   }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Button disabled={activeStep === 0} onClick={handleBack}>
        Back
      </Button>
      {renderList[activeStep]()}
      <Button disabled={activeStep === steps.length} onClick={handleNext}>
        {activeStep >= steps.length - 1 ? "Finish" : "Next"}
      </Button>
    </Box>
  );
};

export default LinearStepper;
