// MUI
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const steps = ["shipping address", "cart items", "payment", "order placed"];

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
  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item xs="auto">
        <Box position="relative" width={50} height={50}>
          <CircularProgress
            variant="determinate"
            size={50}
            value={((activeStep + 1) / steps.length) * 100}
            sx={{borderRadius: "50%", backgroundColor: grey[200]}}
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
          {steps[activeStep]}
        </Typography>
        {activeStep + 1 < steps.length && (
          <Typography variant="body2" textTransform="capitalize">
            Next: {steps[activeStep + 1]}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default CheckoutCircularStepper;
