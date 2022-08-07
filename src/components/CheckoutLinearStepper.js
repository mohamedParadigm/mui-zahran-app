// Internals
import { useRouter } from "next/router";
// MUI
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";

const steps = [
  { id: 1, label: "shipping address", url: "/shipping" },
  { id: 2, label: "cart items", url: "/checkout-items" },
  { id: 3, label: "payment", url: "/payment" },
  { id: 4, label: "order placed" },
];

const CheckoutLinearStepper = ({ activeStep = 0 }) => {
  const router = useRouter();

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.id}>
          {activeStep + 1 > step.id ? (
            <StepButton onClick={() => router.push(step.url)} disabled={activeStep + 1 === steps.length}>
              {step.label}
            </StepButton>
          ) : (
            <StepLabel>{step.label}</StepLabel>
          )}
        </Step>
      ))}
    </Stepper>
  );
};

export default CheckoutLinearStepper;
