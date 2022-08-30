// Internals
import { useRouter } from "next/router";
// MUI
import { useTheme, styled } from "@mui/material/styles";
import {
  useMediaQuery,
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
  Button,
  Stack,
  Card,
} from "@mui/material";
// Components
import Layout from "../../modules/layout/Layout";
import CheckoutLinearStepper from "../../components/CheckoutLinearStepper";
import CheckoutCircularStepper from "../../components/CheckoutCircularStepper";
import CartItems from "../../components/items/CartItems/CartItems";
// Externals
import { getCookie, hasCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";
// Data
import { calcItemsTotalPrice } from "../../utils/utils";

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
    gap: theme.spacing(2),
  },
}));

const CheckoutItems = (props) => {
  const { cartItems, branch  } = props;

  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleNextStep = () => {
    router.push("/checkout/payment", undefined, { locale });
  };

  const existBranch = branch.unavial.map((item) => item.productUniqueName);

  const existItems = cartItems?.filter((item) => {
    return item.uniqueName === existBranch[0];
  });


  return (
    <Layout
      layoutType="alt"
      title="Checkout Items"
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      showBottomNav={false}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Container sx={{ py: 4 }}>
        <Box mb={3}>
          {matches ? (
            <CheckoutLinearStepper activeStep={1} />
          ) : (
            <CheckoutCircularStepper activeStep={1} />
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
                confirm items
              </Typography>

              <Box mb={3}>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                  <Typography
                    component="h2"
                    variant="h5"
                    textTransform="capitalize"
                  >
                    {t("grocery")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "underline" }}
                  >
                    {t("shippedBy")} Zahran
                  </Typography>
                </Stack>
                {cartItems.map(
                  (product) =>
                    product.weight < 1 && (
                      <Card sx={{ marginTop: 5 }} key={product.id}>
                        <CartItems
                          product={product}
                          pageType="checkout"
                          exist={existItems}
                        />
                      </Card>
                    )
                )}
              </Box>

              <Box>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                  <Typography
                    component="h2"
                    variant="h5"
                    textTransform="capitalize"
                  >
                    {t("household")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "underline" }}
                  >
                    {t("shippedBy")} lorem ipsum
                  </Typography>
                </Stack>
                {cartItems.map(
                  (product) =>
                    product.weight > 1 && (
                      <Card sx={{ marginTop: 2 }} key={product.id}>
                        <CartItems
                          product={product}
                          pageType="checkout"
                          exist={existItems}
                        />
                      </Card>
                    )
                )}
              </Box>
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
                  {calcItemsTotalPrice(cartItems)}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ flexGrow: { xs: 1, md: 0 } }}
                onClick={() =>
                  router.push("/checkout/shipping", undefined, { locale })
                }
              >
                back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ flexGrow: { xs: 1, md: 0 } }}
                onClick={handleNextStep}
              >
                next
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
              <Paper elevation={6} sx={{ borderRadius: 2 }}>
                <Typography variant="h4" px={2} pt={2}>
                  order summary
                </Typography>
                <List>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Subtotal <span style={{ opacity: 0.7 }}>(2 Item)</span>
                    </Typography>
                    <Typography variant="body2"></Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Grocery Delivery Fees
                    </Typography>
                    <Typography variant="body2">677.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Household Delivery Fees
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default CheckoutItems;

export const getServerSideProps = async ({ req, res, locale }) => {

  const cartItems = hasCookie("cart", { req, res })
      ? JSON.parse(getCookie("cart", { req, res }))
      : [];

  if (!hasCookie("cart", { req, res }) || cartItems?.length === 0) {
    return {
      redirect: {
        destination: `/${locale}/cart`,
        permanent: false,
      },
    };
  }

  const branch =
    hasCookie("branch", { req, res }) &&
    JSON.parse(getCookie("branch", { req, res }));


  return {
    props: {
      cartItems,
      branch,
    },
  };
};
