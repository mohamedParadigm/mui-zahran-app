// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
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
// Components
import Layout from "../modules/layout/Layout";
import CheckoutLinearStepper from "../components/CheckoutLinearStepper";
import CheckoutCircularStepper from "../components/CheckoutCircularStepper";
import RenameOrderDialog from "../components/RenameOrderDialog";

const FixedMobileButton = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    zIndex: 50,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.common.white,
    padding: "0.5rem 1rem",
  },
}));

const renameOrderInitialValue = {
  orderName: "",
};

const PlaceOrder = () => {
  const router = useRouter();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [showRenameOrderDialog, setShowRenameOrderDialog] = useState(false);

  const handleToggleRenamingDialog = () =>
    setShowRenameOrderDialog((prev) => !prev);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    router.push("/track-order");
  };

  return (
    <Layout
      layoutType="alt"
      title="Place Order"
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={70}
    >
      <Container sx={{ py: 4 }}>
        <Box mb={3}>
          {matches ? (
            <CheckoutLinearStepper activeStep={3} />
          ) : (
            <CheckoutCircularStepper activeStep={3} />
          )}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md>
            <Box mb={3}>
              <Typography
                id="selectOrderTypeLabel"
                component="h1"
                variant="h4"
                mb={1}
                textAlign="center"
              >
                thank you
              </Typography>
              <Typography variant="body2" mb={1} textAlign="center">
                we will get in touch with you soon..
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ borderRadius: 2 }}>
                  <Typography component="h2" variant="h5" px={2} pt={2}>
                    Your Information
                  </Typography>
                  <List>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        Name:
                      </Typography>
                      <Typography variant="body2">Lorem Ipsum</Typography>
                    </ListItem>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        Email:
                      </Typography>
                      <Typography variant="body2">test@test.com</Typography>
                    </ListItem>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        Phone:
                      </Typography>
                      <Typography variant="body2">0123456789</Typography>
                    </ListItem>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        Address:
                      </Typography>
                      <Typography variant="body2">
                        Cairo Abd El Moty El Kholy
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        Order Type:
                      </Typography>
                      <Typography variant="body2">Delivery</Typography>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ borderRadius: 2 }}>
                  <Typography component="h2" variant="h5" px={2} pt={2}>
                    Items
                  </Typography>
                  <List>
                    <ListItem sx={{ gap: 1, py: 0.5 }}>
                      <Image
                        src="/images/products/ingredient-1.jpg"
                        alt="..."
                        width={100}
                        height={100}
                      />
                      <div>
                        <Typography variant="body2">Lorem Ipsum</Typography>
                        <Typography variant="body2">Quantity: 2</Typography>
                      </div>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ gap: 1, py: 0.5 }}>
                      <Image
                        src="/images/products/ingredient-1.jpg"
                        alt="..."
                        width={100}
                        height={100}
                      />
                      <div>
                        <Typography variant="body2">Lorem Ipsum</Typography>
                        <Typography variant="body2">Quantity: 2</Typography>
                      </div>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
                  <Typography component="h2" variant="h5">
                    Payment Method
                  </Typography>
                  <Typography variant="body2">
                    Credit Card
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md="auto">
            <Box
              flexShrink={0}
              width={{ xs: "100%", md: 300 }}
              position={{ md: "sticky" }}
              top={10}
            >
              <Paper elevation={6} sx={{ borderRadius: 2, mb: 2 }}>
                <Typography variant="h4" px={2} pt={2}>
                  order summary
                </Typography>
                <List>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Generic Beard Shaving
                    </Typography>
                    <Typography variant="body2">80.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      CLOROX Multi-Purpose
                    </Typography>
                    <Typography variant="body2">80.79 EGP</Typography>
                  </ListItem>
                  <Divider sx={{ my: 1 }} />
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Subtotal <span style={{ opacity: 0.7 }}>(2 Item)</span>
                    </Typography>
                    <Typography variant="body2">677.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Grocery Delivery Fees
                    </Typography>
                    <Typography variant="body2">80.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Household Delivery Fees
                    </Typography>
                    <Typography variant="body2">80.79 EGP</Typography>
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

              <FixedMobileButton>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ flexGrow: 1 }}
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
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ flexGrow: 1 }}
                  onClick={() => router.push("/track-order")}
                >
                  track order
                </Button>
              </FixedMobileButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PlaceOrder;
