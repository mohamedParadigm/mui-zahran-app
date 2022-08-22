// Intenrals
import { useRouter } from "next/router";
// MUI
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const steps = [
  {
    label_en: "shipping address",
    label_ar: "عنوان الشحن",
  },
  {
    label_en: "cart items",
    label_ar: "عناصر العربة",
  },
  { label_en: "payment", label_ar: "الدفع" },
  { label_en: "order placed", label_ar: "اتمام الطلب" },
];

const CurrentProgressLabel = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CheckoutCircularStepper = ({ activeStep = 0 }) => {
  const { locale } = useRouter();

  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item xs="auto">
        <Box position="relative" width={50} height={50}>
          <CircularProgress
            variant="determinate"
            size={50}
            value={((activeStep + 1) / steps.length) * 100}
            sx={{ borderRadius: "50%", backgroundColor: grey[200] }}
          />
          <CurrentProgressLabel>
            <Typography variant="caption">
              {activeStep + 1} / {steps.length}
            </Typography>
          </CurrentProgressLabel>
        </Box>
      </Grid>
      <Grid item xs="auto">
        <Typography
          component="h2"
          variant="h4"
          textTransform="capitalize"
          mb={1}
        >
          {steps[activeStep][`label_${locale}`]}
        </Typography>
        {activeStep + 1 < steps.length && (
          <Typography variant="body2" textTransform="capitalize">
            {locale === "ar" ? "القادم:" : "Next:"} {steps[activeStep + 1][`label_${locale}`]}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default CheckoutCircularStepper;
