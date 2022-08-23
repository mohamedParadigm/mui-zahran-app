// Internals
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
// Externals
import { getCookie, hasCookie, setCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";
// Components
import Layout from "../../modules/layout/Layout";
import CheckoutLinearStepper from "../../components/CheckoutLinearStepper";
import CheckoutCircularStepper from "../../components/CheckoutCircularStepper";
import CustomRadio from "../../components/shared/CustomRadio";
import { cookieExpireDate } from "../../utils/utils";

const FixedMobileButton = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
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
    gap: theme.spacing(1),
  },
}));

const Payment = () => {
  const router = useRouter();
  const { locale } = router;

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);

    setCookie("paymentMethod", e.target.value, {
      expires: cookieExpireDate(13),
    });
  };

  const { t } = useTranslation("payment");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const pay = hasCookie("paymentMethod")
      ? getCookie("paymentMethod")
      : "Credit Card";

    setPaymentMethod(pay);

    setCookie("paymentMethod", pay, {
      expires: cookieExpireDate(13),
    });
  }, []);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    router.push("/checkout/placeorder", undefined, { locale });
  };

  return (
    <Layout
      layoutType="alt"
      title="Payment"
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      showBottomNav={false}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Container sx={{ py: 4 }}>
        <Box mb={3}>
          {matches ? (
            <CheckoutLinearStepper activeStep={2} />
          ) : (
            <CheckoutCircularStepper activeStep={2} />
          )}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md>
            <Paper sx={{ borderRadius: 2, p: 2, mb: 4 }}>
              <Typography
                id="selectOrderTypeLabel"
                component="h1"
                variant="h4"
                mb={1}
              >
                {t("title")}
              </Typography>
              <Typography variant="body2" mb={1}>
                {t("desc")}
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="selectOrderTypeLabel"
                  name="selectOrderType"
                  value={paymentMethod}
                  onChange={handlePaymentChange}
                >
                  <FormControlLabel
                    value="Credit Card"
                    control={<CustomRadio />}
                    label={t("credit")}
                    sx={{ textTransform: "capitalize" }}
                  />
                  <FormControlLabel
                    value="Cash On Delivery"
                    control={<CustomRadio />}
                    label={t("cash")}
                    sx={{ textTransform: "capitalize" }}
                  />
                  <FormControlLabel
                    value="Credit On Delivery"
                    control={<CustomRadio />}
                    label={t("creditDel")}
                    sx={{ textTransform: "capitalize" }}
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
            <FixedMobileButton>
              <Box
                textAlign="center"
                flexShrink={0}
                sx={{ display: { md: "none" } }}
              >
                <Typography variant="body2" fontWeight={600}>
                  {t("total")}
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  772.68 {t("egp")}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ flexGrow: { xs: 1, md: 0 } }}
                onClick={() =>
                  router.push("/checkout/checkout-items", undefined, { locale })
                }
              >
                {t("back")}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ flexGrow: { xs: 1, md: 0 }, display: { md: "none" } }}
                onClick={handlePaymentSubmit}
              >
                {t("placeOrder")}
              </Button>
            </FixedMobileButton>
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
                      Subtotal <span style={{ opacity: 0.7 }}>(2 Item)</span>
                    </Typography>
                    <Typography variant="body2">677.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      vat
                    </Typography>
                    <Typography variant="body2">80.79 EGP</Typography>
                  </ListItem>
                  <Divider sx={{ my: 1 }} component="li" />
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
              {matches && (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={handlePaymentSubmit}
                >
                  place order
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Payment;

export const getServerSideProps = async ({ req, res, locale }) => {
  const cartItems = hasCookie("cart", { req, res });

  if (!cartItems) {
    return {
      redirect: {
        destination: `/${locale}/cart`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
