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
// Externals
import useTranslation from "next-translate/useTranslation";
import { getCookie, hasCookie } from "cookies-next";
// Components
import Layout from "../../modules/layout/Layout";
import CheckoutLinearStepper from "../../components/CheckoutLinearStepper";
import CheckoutCircularStepper from "../../components/CheckoutCircularStepper";
import RenameOrderDialog from "../../components/RenameOrderDialog";
import { withSessionSsr } from "../../lib/withSession";
// Data
import data from "../../utils/data";

const FixedMobileButton = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  flexWrap: "wrap",
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

const PlaceOrder = (props) => {
  const { user, guest, cartItems, userLocation, paymentMethod, orderType } =
    props;
  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation("placeorder");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [showRenameOrderDialog, setShowRenameOrderDialog] = useState(false);

  const handleToggleRenamingDialog = () =>
    setShowRenameOrderDialog((prev) => !prev);

  return (
    <Layout
      layoutType="alt"
      title={t("title")}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      showBottomNav={false}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
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
                {t("thankyou")}
              </Typography>
              <Typography variant="body2" mb={1} textAlign="center">
                {t("desc")}
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {user ||
                (guest && (
                  <Grid item xs={12}>
                    <Paper elevation={3} sx={{ borderRadius: 2 }}>
                      <Typography component="h2" variant="h5" px={2} pt={2}>
                        {t("info")}
                      </Typography>
                      <List>
                        <ListItem
                          sx={{
                            justifyContent: "space-between",
                            py: 0.5,
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                          >
                            {t("name")}
                          </Typography>
                          <Typography variant="body2">
                            {user
                              ? `${user.firstName} ${user.lastName}`
                              : `${guest.firstName} ${guest.lastName}`}
                          </Typography>
                        </ListItem>
                        <ListItem
                          sx={{
                            justifyContent: "space-between",
                            py: 0.5,
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                          >
                            {t("email")}
                          </Typography>
                          <Typography variant="body2">
                            {user ? user.email : guest.email}
                          </Typography>
                        </ListItem>
                        <ListItem
                          sx={{
                            justifyContent: "space-between",
                            py: 0.5,
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                          >
                            {t("phone")}
                          </Typography>
                          <Typography variant="body2">
                            {user ? user.mobile : guest.mobile}
                          </Typography>
                        </ListItem>
                        <ListItem
                          sx={{
                            justifyContent: "space-between",
                            py: 0.5,
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                          >
                            {t("address")}
                          </Typography>
                          <Typography variant="body2">
                            {`${userLocation.country} - ${userLocation.city} - ${userLocation.area}`}
                          </Typography>
                        </ListItem>
                        <ListItem
                          sx={{
                            justifyContent: "space-between",
                            py: 0.5,
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                          >
                            {t("orderType")}
                          </Typography>
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                          >
                            {orderType}
                          </Typography>
                        </ListItem>
                      </List>
                    </Paper>
                  </Grid>
                ))}
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ borderRadius: 2 }}>
                  <Typography component="h2" variant="h5" px={2} pt={2}>
                    {t("items")}
                  </Typography>
                  <div>
                    {cartItems?.map((item, index) => (
                      <div key={item.id}>
                        <ListItem sx={{ gap: 1, py: 0.5 }} component="div">
                          <Image
                            src={item.images[0].imageAcutal}
                            alt={item[`name_${locale}`]}
                            width={100}
                            height={100}
                          />
                          <div>
                            <Typography variant="body2">
                              {item[`name_${locale}`]}
                            </Typography>
                            <Typography variant="body2">
                              {t("quantity", { count: item.quantity })}
                            </Typography>
                          </div>
                        </ListItem>
                        {index + 1 !== cartItems.length && (
                          <Divider sx={{ width: "100%" }} />
                        )}
                      </div>
                    ))}
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
                  <Typography component="h2" variant="h5">
                    {t("paymentMethod")}
                  </Typography>
                  <Typography variant="body2">{paymentMethod}</Typography>
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
                  <Divider sx={{ my: 1 }} component="li" />
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

              <FixedMobileButton>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ flexGrow: 1, width: { md: "100%" } }}
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
                  sx={{ flexGrow: 1, width: { md: "100%" } }}
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

export const getServerSideProps = withSessionSsr(
  async ({ req, res, locale }) => {
    const user = req.session.user || null;

    const guest =
      hasCookie("guest", { req, res }) &&
      JSON.parse(getCookie("guest", { req, res }));

    if (!user && !guest) {
      return {
        redirect: {
          destination: `/${locale}/checkout/shipping`,
          permanent: false,
        },
      };
    }

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

    const cartProducts =
      cartItems &&
      cartItems?.map((el) => {
        const items = data?.products?.find(
          (product) => product.uniqueName === el.uniqueName
        );
        return { ...items, quantity: el.quantity };
      });

    const userLocation =
      hasCookie("location", { req, res }) &&
      JSON.parse(getCookie("location", { req, res }));

    if (!userLocation) {
      return {
        redirect: {
          destination: `/${locale}/checkout/shipping`,
          permanent: false,
        },
      };
    }

    const paymentMethod =
      hasCookie("paymentMethod", { req, res }) &&
      getCookie("paymentMethod", { req, res });

    if (!paymentMethod) {
      return {
        redirect: {
          destination: `/${locale}/checkout/payment`,
          permanent: false,
        },
      };
    }

    const orderType =
      hasCookie("orderType", { req, res }) &&
      getCookie("orderType", { req, res });

    if (!orderType) {
      return {
        redirect: {
          destination: `/${locale}/checkout/shipping`,
          permanent: false,
        },
      };
    }

    return {
      props: {
        user,
        guest,
        cartItems: cartProducts,
        userLocation,
        paymentMethod,
        orderType,
      },
    };
  }
);
