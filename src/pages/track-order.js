// Internals
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
// MUI
import { grey } from "@mui/material/colors";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Switch from "@mui/material/Switch";
// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Components
import Layout from "../modules/layout/Layout";
import RenameOrderDialog from "../components/RenameOrderDialog";

const activeStep = 2;

const initialSteps = [
  {
    label: "Recieved",
    description: "We have recieved your order.",
    image: "/images/track-order/Order-recieved.svg",
  },
  {
    label: "Approved",
    description: "Your order has been confirmed.",
    image: "/images/track-order/Approved.svg",
  },
  {
    label: "Paused",
    description: "Your order has been Paused.",
    image: "/images/track-order/Order-cancel.svg",
  },
  {
    label: "On The Way",
    description: "Your order on its way",
    image: "/images/track-order/Track-order.svg",
  },
  {
    label: "Delivered",
    description: "your order delivered successfully",
    image: "/images/track-order/Package-delivered.svg",
  },
];

const StepLabelStyle = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-iconContainer .MuiSvgIcon-root": {
    borderRadius: "50%",
  },
  "& .MuiStepLabel-label": {
    display: "flex",
    gap: theme.spacing(1),
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },
}));

const renameOrderInitialValue = {
  orderName: "",
};

const TrackOrder = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [showRenameOrderDialog, setShowRenameOrderDialog] = useState(false);

  const handleToggleRenamingDialog = () =>
    setShowRenameOrderDialog((prev) => !prev);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const steps = isPaused
    ? initialSteps
    : initialSteps.filter((el) => el.label !== "Paused");

  const [findSimilar, setFindSimilar] = useState(false);

  return (
    <Layout
      title="Track Order"
      layoutType="alt"
      showBottomNav={false}
      scrollOffset={{ bottom: 16 }}
    >
      <Box sx={{ backgroundColor: grey[200] }} py={4}>
        <Container>
          <Box textAlign="center" mb={4}>
            <Typography component="h1" variant="h4" fontWeight={400} mb={3}>
              <span style={{ fontWeight: 700 }}>Thank You</span> <br /> Your
              Order Has Been Submitted <br /> Successfully
            </Typography>
            <Typography>
              Your order confirm number:{" "}
              <span style={{ color: "var(--main-color)" }}>123456</span>
            </Typography>
            <Typography>
              You will recieve an email confirmation shortly.
            </Typography>
          </Box>
          <Paper sx={{ borderRadius: 2, p: 2, mb: 4 }} elevation={0}>
            <Grid container spacing={1}>
              <Grid item xs>
                <Box>
                  <Typography component="h2" variant="h6" mb={1}>
                    Estimated Delivery Time
                  </Typography>
                  <Typography>3 Days</Typography>
                </Box>
              </Grid>
              <Grid item xs="auto">
                <Button
                  color={showOrderDetails ? "primary" : "secondary"}
                  sx={{ fontWeight: 700, fontSize: "1rem", p: 0, mb: 1 }}
                  endIcon={
                    <ExpandMoreIcon
                      sx={{
                        transition: "0.3s ease-in-out",
                        transform: showOrderDetails ? "rotate(180deg)" : "none",
                      }}
                    />
                  }
                  onClick={() => setShowOrderDetails((prev) => !prev)}
                >
                  order number
                </Button>
                <Typography textAlign="center">123456</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Collapse in={showOrderDetails}>
            <Paper sx={{ p: 2, mb: 4 }}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography component="h3" variant="h6" mb={0.5}>
                    Delivering to:
                  </Typography>
                  <Typography variant="body2">User Name</Typography>
                  <Typography variant="body2">
                    18, Mahat El Ramal, Alexandria, Egypt
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography component="h3" variant="h6" mb={0.5}>
                    Payment Method:
                  </Typography>
                  <Typography variant="body2">Cash on Delivery</Typography>
                  <Typography component="h3" variant="h6" mb={0.5}>
                    Order Type:
                  </Typography>
                  <Typography variant="body2">Delivery</Typography>
                </Grid>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Typography component="h3" variant="h6" mb={0.5} px={1}>
                    Order Summary:
                  </Typography>
                  <List>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            2 x lorem ipsum
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <div style={{ border: "1px dashed #000" }}></div>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="caption">12 EGP</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            2 x lorem ipsum
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <div style={{ border: "1px dashed #000" }}></div>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="caption">12 EGP</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            2 x lorem ipsum
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <div style={{ border: "1px dashed #000" }}></div>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="caption">12 EGP</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider sx={{ my: 1 }} component="li" />
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body2">
                            Grocery Delivery Fees
                          </Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body2" fontWeight={600}>
                            5.00 EGP
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body2">
                            Household Delivery Fees
                          </Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body2" fontWeight={600}>
                            5.00 EGP
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body2">Vat</Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body2" fontWeight={600}>
                            5.00 EGP
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body1" fontWeight={700}>
                            Total{" "}
                            <span style={{ opacity: 0.7, fontSize: "0.75rem" }}>
                              (Inclusive of VAT)
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body1" fontWeight={700}>
                            20.00 EGP
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Paper>
          </Collapse>
          <Box mb={4}>
            <Grid container spacing={2} alignItems="center" mb={2}>
              <Grid item xs="auto">
                <Switch
                  checked={isPaused}
                  onChange={() => setIsPaused((prev) => !prev)}
                  inputProps={{ "aria-label": "switch paused step" }}
                />
              </Grid>
              <Grid item xs>
                <Typography>
                  {isPaused ? "With Paused Step" : "Normal Steps"}
                </Typography>
              </Grid>
            </Grid>
            <Stepper
              activeStep={activeStep}
              orientation={matches ? "horizontal" : "vertical"}
              alternativeLabel={matches}
            >
              {steps?.map((el, i) => (
                <Step
                  key={i}
                  sx={{
                    "& .MuiStepLabel-iconContainer .MuiSvgIcon-root": {
                      animation:
                        activeStep === i
                          ? "pulseanime 2s infinite ease-in-out"
                          : "none",
                    },
                  }}
                >
                  <StepLabelStyle>
                    <Image
                      src={el.image}
                      alt={el.label}
                      width={35}
                      height={35}
                    />
                    <Box>
                      <Typography
                        component="span"
                        variant="body2"
                        fontWeight={600}
                        textTransform="capitalize"
                        display="block"
                      >
                        {el.label}
                      </Typography>
                      <Typography variant="caption">
                        {el.description}
                      </Typography>
                    </Box>
                  </StepLabelStyle>
                </Step>
              ))}
            </Stepper>
          </Box>
          {!isPaused && (
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs="auto">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleToggleRenamingDialog}
                >
                  add to favourites
                </Button>
                <RenameOrderDialog
                  showRenameOrderDialog={showRenameOrderDialog}
                  handleToggleRenamingDialog={handleToggleRenamingDialog}
                  title="rename order"
                  initialValues={renameOrderInitialValue}
                />
              </Grid>
              <Grid item xs="auto">
                <NextLink href="/" passHref>
                  <Button variant="contained" color="primary">
                    back to home
                  </Button>
                </NextLink>
              </Grid>
            </Grid>
          )}
          {isPaused && (
            <>
              <Paper sx={{ borderRadius: 2, mb: 3 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  color="primary"
                  p={2}
                  fontWeight={500}
                >
                  sorry, these items are not available
                </Typography>
                <Box>
                  <Typography component="h3" variant="h5" px={2}>
                    Household
                  </Typography>
                  <List>
                    <ListItem>
                      <Grid container spacing={2}>
                        <Grid item xs="auto">
                          <Image
                            src="/images/products/p-1.webp"
                            alt="..."
                            width={120}
                            height={120}
                          />
                        </Grid>
                        <Grid item xs={12} sm>
                          <Typography component="h4" variant="h6">
                            Call It Spring Mayetiola
                          </Typography>
                          <Typography variant="body2" component="span" mr={1.5}>
                            514.59 EGP
                          </Typography>
                          <Typography variant="body2" component="del">
                            1009 EGP
                          </Typography>
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                            color="primary"
                            mb={1}
                          >
                            not available
                          </Typography>
                          <Grid container spacing={1}>
                            <Grid item xs="auto">
                              <Button variant="outlined" color="secondary">
                                cancel
                              </Button>
                            </Grid>
                            <Grid item xs="auto">
                              <Button
                                color="primary"
                                variant="outlined"
                                endIcon={
                                  <ExpandMoreIcon
                                    sx={{
                                      transition: "0.3s ease-in-out",
                                      transform: findSimilar
                                        ? "rotate(180deg)"
                                        : "none",
                                    }}
                                  />
                                }
                                onClick={() => setFindSimilar((prev) => !prev)}
                              >
                                find similar
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                    {/* <Divider component="li" /> */}
                  </List>
                </Box>
              </Paper>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" color="secondary" fullWidth>
                    place order
                  </Button>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button
                    color="secondary"
                    sx={{ textDecoration: "underline" }}
                  >
                    cancel order
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default TrackOrder;
