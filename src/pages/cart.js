// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useEffect } from "react";
import Image from "next/image";
// MUI
import {
  styled , 
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Paper,
  List,
  TextField,
  ListItem,
  Divider,
  Link,
  InputAdornment,
} from "@mui/material";
// Components
import Layout from "../modules/layout/Layout";
import CartItems from "../components/items/CartItems/CartItems";
import { withSessionSsr } from "../lib/withSession";
// Externals
import { useSelector, useDispatch } from "react-redux";
import { getCookie, hasCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";
// Data
import { clearCart, createCart } from "../redux/features/cart/cartSlice";
import calcItemsTotalPrice from "../utils/utils";

const FixedMobileButton = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
  position: "fixed",
  zIndex: 50,
  left: 0,
  right: 0,
  bottom: 56,
  width: "100%",
  backgroundColor: theme.palette.common.white,
  alignItems: "center",
  padding: "0.5rem 1rem",
  gap: theme.spacing(3),
}));

const Cart = ({ user }) => {
  const router = useRouter();
  const { locale } = useRouter();

  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const handleClear = () => {
    dispatch(clearCart(cart));
  };

  useEffect(() => {
    if (hasCookie("cart")) {
      dispatch(createCart(JSON.parse(getCookie("cart"))));
    }
  }, [dispatch]);

  const groceryItems = cart.filter((el) => el.weight < 1);
  const houseHoldItems = cart.filter((el) => el.weight > 1);

  const vat = 100;
  const groceryPrice = () => {
    const price = groceryItems.reduce((acc, item) => {
      const productPrice =
        acc + parseFloat(item.discount ? item.priceAfterDiscount : item.Price);
      return productPrice * item.quantity;
    }, 0);
    return price;
  };

  const houseHold = () => {
    const price = houseHoldItems.reduce((acc, item) => {
      const productPrice =
        acc + parseFloat(item.discount ? item.priceAfterDiscount : item.Price);
      return productPrice * item.quantity;
    }, 0);

    return price;
  };

  const totalPrice = () => {
    return groceryPrice() + houseHold() + vat;
  };

  const handleCheckoutItems = (e) => {
    e.preventDefault();
    router.push("/checkout/shipping");
  };

  return (
    <Layout
      title="Cart"
      elevationOption={true}
      footerOtherStyle={{ marginBottom: { xs: "112px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 120, md: 16 } }}
      BottomNavigationValue={3}
    >
      <Container sx={{ py: 3 }}>
        {cart.length !== 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md>
              <Stack direction="row" justifyContent="space-between" mb={3}>
                <Typography component="h1" variant="h4">
                  {t("cart")}{" "}
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ opacity: 0.7 }}
                  >
                    ({cart.length} Items)
                  </Typography>
                </Typography>
                <Button
                  color="secondary"
                  sx={{ textDecoration: "underline" }}
                  onClick={() => handleClear(cart)}
                >
                  clear cart
                </Button>
              </Stack>
              <Card
                sx={{
                  backgroundColor: "#ddd",
                  borderRadius: 1 * 2,
                  marginBottom: 2,
                }}
                elevation={0}
              >
                <NextLink href="/category" passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="/images/banner-1360x250.jpg"
                      height={100}
                      alt="section banner"
                      sx={{ objectFit: "contain" }}
                    />
                  </CardActionArea>
                </NextLink>
              </Card>

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
                {cart.map(
                  (product) =>
                    product.weight < 1 && (
                      <Card sx={{ marginTop: 5 }} key={product.id}>
                        <CartItems product={product} />
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
                {cart.map(
                  (product) =>
                    product.weight > 1 && (
                      <Card sx={{ marginTop: 2 }} key={product.id}>
                        <CartItems product={product} />
                      </Card>
                    )
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md="auto">
              <Box
                flexShrink={0}
                width={{ xs: "100%", md: 300 }}
                position={{ md: "sticky" }}
                top={80}
              >
                {user && (
                  <Paper elevation={6} sx={{ borderRadius: 2, p: 2, mb: 2 }}>
                    <Typography component="h2" variant="h5" mb={2}>
                      Coupon Code
                    </Typography>
                    <TextField
                      id="couponCode"
                      label="Coupon Code or Gift Card"
                      color="secondary"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button
                              variant="contained"
                              color="secondary"
                              size="small"
                              sx={{ mb: 1 }}
                              disableElevation
                            >
                              {t("apply")}
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </Paper>
                )}
                <Paper elevation={6} sx={{ borderRadius: 2 }}>
                  <Typography component="h2" variant="h5" px={2} pt={2}>
                    order summary
                  </Typography>
                  <List>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        Grocery Subtotal{" "}
                        <span style={{ opacity: 0.7 }}>
                          ({groceryItems.length} Item)
                        </span>
                      </Typography>
                      <Typography variant="body2">
                        {groceryPrice()} {t("egp")}
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        household Subtotal{" "}
                        <span style={{ opacity: 0.7 }}>
                          ({houseHoldItems.length} Item)
                        </span>
                      </Typography>
                      <Typography variant="body2">
                        {houseHold()} {t("egp")}
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        vat
                      </Typography>
                      <Typography variant="body2">{vat}</Typography>
                    </ListItem>
                    <Divider sx={{ my: 1 }} component="li" />
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography
                        variant="body1"
                        textTransform="capitalize"
                        fontWeight={700}
                      >
                        total
                      </Typography>
                      <Typography variant="body1" fontWeight={700}>
                        {calcItemsTotalPrice}
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: { xs: "none", md: "flex" } }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handleCheckoutItems}
                      >
                        proceed to checkout
                      </Button>
                    </ListItem>
                    <Box display={{ xs: "none", md: "block" }}>
                      <NextLink href="/" passHref>
                        <Link
                          color="secondary"
                          textAlign="center"
                          display="block"
                          width="100%"
                          textTransform="capitalize"
                        >
                          continue shopping
                        </Link>
                      </NextLink>
                    </Box>
                  </List>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Container sx={{ py: 4 }}>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              textAlign="center"
            >
              <Image
                src="/images/404.svg"
                alt="page not found"
                width={150}
                height={150}
              />
              <Typography component="h1" variant="h4" color="primary">
                The cart is empty
              </Typography>
              <NextLink href="/shop" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "fit-content" }}
                >
                  Shop now
                </Button>
              </NextLink>
            </Stack>
          </Container>
        )}
        <FixedMobileButton>
          <Box textAlign="center" flexShrink={0}>
            <Typography variant="body2" fontWeight={600}>
              Total
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {totalPrice()}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleCheckoutItems}
          >
            Checkout {cart.length} Items
          </Button>
        </FixedMobileButton>
      </Container>
    </Layout>
  );
};

export default Cart;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const user = req.session.user || null;

  return {
    props: { user },
  };
});
