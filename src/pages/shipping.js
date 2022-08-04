// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import { useTheme, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Components
import Layout from "../modules/layout/Layout";
import CheckoutLinearStepper from "../components/CheckoutLinearStepper";
import CheckoutCircularStepper from "../components/CheckoutCircularStepper";
import CustomRadio from "../components/shared/CustomRadio";

const addressInitialDetails = {
  country: "",
  city: "",
  area: "",
  detailedAddress: "",
};

const FixedMobileButton = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    zIndex: 50,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.common.white,
    alignItems: "center",
    padding: "0.5rem 1rem",
    gap: theme.spacing(2),
  },
}));

const ShippingAddress = () => {
  const router = useRouter();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [orderTypeValue, setOrderTypeValue] = useState("delivery");

  const [addressDetails, setAddressDetails] = useState(addressInitialDetails);

  const handleAddressChange = (e) => {
    setAddressDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddressFormSubmit = (e) => {
    e.preventDefault();

    router.push("/checkout-items");
  }

  return (
    <Layout
      layoutType="alt"
      title="Shipping Address"
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      showBottomNav={false}
      scrollOffset={{bottom: {xs: 70, md: 16}}}
    >
      <Container sx={{ py: 4 }}>
        <Box mb={3}>
          {matches ? (
            <CheckoutLinearStepper activeStep={0} />
          ) : (
            <CheckoutCircularStepper activeStep={0} />
          )}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md>
            <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs>
                  <Typography>
                    Please login to your account to use your saved Data
                  </Typography>
                </Grid>
                <Grid item xs="auto">
                  <NextLink href="/login?redirect=shipping">
                    <Button
                      variant="contained"
                      color="secondary"
                      disableElevation
                    >
                      login
                    </Button>
                  </NextLink>
                </Grid>
              </Grid>
            </Paper>
            <form id="shippingAddressForm" onSubmit={handleAddressFormSubmit}>
              <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                <Typography
                  id="selectOrderTypeLabel"
                  component="h2"
                  variant="h4"
                  mb={1}
                >
                  order type
                </Typography>
                <FormControl fullWidth>
                  <RadioGroup
                    row
                    aria-labelledby="selectOrderTypeLabel"
                    name="selectOrderType"
                    value={orderTypeValue}
                    onChange={(e) => setOrderTypeValue(e.target.value)}
                  >
                    <FormControlLabel
                      value="delivery"
                      control={<CustomRadio />}
                      label="Delivery"
                      sx={{ flexGrow: 1, textTransform: "capitalize" }}
                    />
                    <FormControlLabel
                      value="pickup"
                      control={<CustomRadio />}
                      label="Pick up"
                      sx={{ flexGrow: 1, textTransform: "capitalize" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
              <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                <Typography
                  id="selectOrderTypeLabel"
                  component="h2"
                  variant="h4"
                  mb={3}
                >
                  continue as a guest
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstName"
                      label="First Name:"
                      variant="outlined"
                      fullWidth
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="lastName"
                      label="Last Name:"
                      variant="outlined"
                      fullWidth
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="mobile"
                      label="Mobile:"
                      variant="outlined"
                      fullWidth
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="email"
                      label="Email Address:"
                      variant="outlined"
                      fullWidth
                      color="secondary"
                      inputProps={{ type: "email" }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                <Typography
                  id="selectOrderTypeLabel"
                  component="h2"
                  variant="h4"
                  mb={3}
                >
                  get your address
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="selectCountryLabel">Country</InputLabel>
                      <Select
                        labelId="selectCountryLabel"
                        id="selectCountry"
                        name="country"
                        value={addressDetails.country}
                        label="Country"
                        onChange={handleAddressChange}
                        color="secondary"
                      >
                        <MenuItem value="egypt">Egypt</MenuItem>
                        <MenuItem value="saudi">Saudi Arabia</MenuItem>
                        <MenuItem value="emirates">Emirates</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="selectCityLabel">City</InputLabel>
                      <Select
                        labelId="selectCityLabel"
                        id="selectCity"
                        name="city"
                        value={addressDetails.city}
                        label="City"
                        onChange={handleAddressChange}
                        color="secondary"
                      >
                        <MenuItem value="cairo">Cairo</MenuItem>
                        <MenuItem value="alex">Alexandria</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="selectAreaLabel">Area</InputLabel>
                      <Select
                        labelId="selectAreaLabel"
                        id="selectArea"
                        name="area"
                        value={addressDetails.area}
                        label="Area"
                        onChange={handleAddressChange}
                        color="secondary"
                      >
                        <MenuItem value="smouha">Smouha</MenuItem>
                        <MenuItem value="mahat-elraml">Mahat El Raml</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="detailedAddress"
                      name="detailedAddress"
                      label="Deatiled Address"
                      variant="outlined"
                      value={addressDetails.detailedAddress}
                      onChange={handleAddressChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Paper>
              <FixedMobileButton>
                <Box
                  textAlign="center"
                  flexShrink={0}
                  sx={{ display: { md: "none" } }}
                >
                  <Typography variant="body2" fontWeight={600}>
                    Total
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    772.68 EGP
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  form="shippingAddressForm"
                  sx={{ flexGrow: { xs: 1, md: 0 } }}
                >
                  next
                </Button>
              </FixedMobileButton>
            </form>
          </Grid>
          <Grid item xs={12} md="auto">
            <Box
              flexShrink={0}
              width={{ xs: "100%", md: 300 }}
              position={{ md: "sticky" }}
              top={10}
            >
              <Paper elevation={6} sx={{ borderRadius: 2 }}>
                <Typography variant="h4" px={2} pt={2}>
                  order summary
                </Typography>
                <List>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Subtotal <span style={{ opacity: 0.7 }}>(3 Item)</span>
                    </Typography>
                    <Typography variant="body2">677.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      vat
                    </Typography>
                    <Typography variant="body2">80.79 EGP</Typography>
                  </ListItem>
                  <Divider sx={{ my: 1 }} />
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography
                      variant="body1"
                      textTransform="capitalize"
                      fontWeight={700}
                    >
                      total{" "}
                      <span style={{ opacity: 0.7, fontSize: "0.7rem" }}>
                        (Inclusive of VAT)
                      </span>
                    </Typography>
                    <Typography variant="body1" fontWeight={700}>
                      772.68 EGP
                    </Typography>
                  </ListItem>
                </List>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ShippingAddress;
