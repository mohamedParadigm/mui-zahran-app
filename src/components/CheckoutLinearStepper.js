// Internals
import { useRouter } from "next/router";
// MUI
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";

const steps = [
  {
    id: 1,
    label_en: "shipping address",
    label_ar: "عنوان الشحن",
    url: "/checkout/shipping",
  },
  {
    id: 2,
    label_en: "cart items",
    label_ar: "عناصر العربة",
    url: "/checkout/checkout-items",
  },
  { id: 3, label_en: "payment", label_ar: "الدفع", url: "/checkout/payment" },
  { id: 4, label_en: "order placed", label_ar: "اتمام الطلب" },
];

const CheckoutLinearStepper = ({ activeStep = 0 }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.id}>
          {activeStep + 1 > step.id ? (
            <StepButton
              onClick={() => router.push(step.url, undefined, { locale })}
              disabled={activeStep + 1 === steps.length}
            >
              {step[`label_${locale}`]}
            </StepButton>
          ) : (
            <StepLabel>{step[`label_${locale}`]}</StepLabel>
          )}
        </Step>
      ))}
    </Stepper>
  );
};

export default CheckoutLinearStepper;
