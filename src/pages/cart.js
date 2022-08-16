// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

// Components
import Layout from "../modules/layout/Layout";

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

const Cart = () => {
  const router = useRouter();

  const handleCheckoutItems = (e) => {
    e.preventDefault();
    router.push("/shipping");
  };

  return (
    <Layout
      title="Cart"
      elevationOption={true}
      footerOtherStyle={{ marginBottom: { xs: "112px", md: 0 } }}
      scrollOffset={{bottom: {xs: 120, md: 16}}}
      BottomNavigationValue={3}
    >
      <Container sx={{ py: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md>
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography component="h1" variant="h4">
                cart{" "}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ opacity: 0.7 }}
                >
                  (2 Items)
                </Typography>
              </Typography>
              <Button color="secondary" sx={{ textDecoration: "underline" }}>
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
                  grocery
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: "underline" }}
                >
                  Shipped by zahran
                </Typography>
              </Stack>
              <Card>
                <Grid container spacing={1}>
                  <Grid item xs="auto" alignSelf="center" mx="auto">
                    <NextLink href="/product" passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image="/images/products/ingredient-1.jpg"
                          width={150}
                          height={150}
                          alt="..."
                          sx={{ objectFit: "contain" }}
                        />
                      </CardActionArea>
                    </NextLink>
                  </Grid>
                  <Grid item xs={12} sm>
                    <Box
                      py={{ sm: 2 }}
                      px={2}
                      textAlign={{ xs: "center", sm: "initial" }}
                    >
                      <CardContent sx={{ px: 0 }}>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          AL DOHA
                        </Typography>
                        <Typography component="h3" variant="h6">
                          call it spring mayetiola
                        </Typography>
                        <Typography
                          variant="caption"
                          height={20}
                          display="block"
                          overflow="hidden"
                          whiteSpace="nowrap"
                          textOverflow="ellipsis"
                        >
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent={{ xs: "center", sm: "start" }}
                        >
                          <strong>514.59 EGP</strong>
                          <del style={{ opacity: 0.7 }}>1009 EGP</del>
                        </Stack>
                        <Typography
                          color="primary"
                          textTransform="uppercase"
                          variant="body2"
                        >
                          not available
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          px: 0,
                          justifyContent: { xs: "center", sm: "start" },
                        }}
                      >
                        <Button variant="contained" color="secondary">
                          notify me
                        </Button>
                        <Button variant="outlined" color="secondary">
                          find similar
                        </Button>
                      </CardActions>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
            <Box>
              <Stack direction="row" justifyContent="space-between" mb={2}>
                <Typography
                  component="h2"
                  variant="h5"
                  textTransform="capitalize"
                >
                  household
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: "underline" }}
                >
                  Shipped by lorem ipsum
                </Typography>
              </Stack>
              <Card>
                <Grid container spacing={1}>
                  <Grid item xs="auto" alignSelf="center" mx="auto">
                    <NextLink href="/product" passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image="/images/products/p-1.webp"
                          width={150}
                          height={150}
                          alt="..."
                          sx={{ objectFit: "contain" }}
                        />
                      </CardActionArea>
                    </NextLink>
                  </Grid>
                  <Grid item xs={12} sm>
                    <Box
                      py={{ sm: 2 }}
                      px={2}
                      textAlign={{ xs: "center", sm: "initial" }}
                    >
                      <CardContent sx={{ px: 0 }}>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          AL DOHA
                        </Typography>
                        <Typography component="h3" variant="h6">
                          call it spring mayetiola
                        </Typography>
                        <Typography
                          variant="caption"
                          height={20}
                          display="block"
                          overflow="hidden"
                          whiteSpace="nowrap"
                          textOverflow="ellipsis"
                        >
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent={{ xs: "center", sm: "start" }}
                        >
                          <strong>514.59 EGP</strong>
                          <del style={{ opacity: 0.7 }}>1009 EGP</del>
                        </Stack>
                        <Typography
                          color="primary"
                          textTransform="uppercase"
                          variant="body2"
                        >
                          best offer
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          px: 0,
                          justifyContent: { xs: "center", sm: "start" },
                        }}
                      >
                        <Button variant="contained" color="secondary">
                          notify me
                        </Button>
                        <Button variant="outlined" color="secondary">
                          find similar
                        </Button>
                      </CardActions>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md="auto">
            <Box
              flexShrink={0}
              width={{ xs: "100%", md: 300 }}
              position={{ md: "sticky" }}
              top={80}
            >
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
                          Apply
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Paper>
              <Paper elevation={6} sx={{ borderRadius: 2 }}>
                <Typography component="h2" variant="h5" px={2} pt={2}>
                  order summary
                </Typography>
                <List>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      Grocery Subtotal{" "}
                      <span style={{ opacity: 0.7 }}>(1 Item)</span>
                    </Typography>
                    <Typography variant="body2">677.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      household Subtotal{" "}
                      <span style={{ opacity: 0.7 }}>(1 Item)</span>
                    </Typography>
                    <Typography variant="body2">677.79 EGP</Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      vat
                    </Typography>
                    <Typography variant="body2">94.89 EGP</Typography>
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
                      772.68 EGP
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: { xs: "none", md: "flex" } }}>
                    <Button
                      variant="contained"
                      color="primary"
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
        <FixedMobileButton>
          <Box textAlign="center" flexShrink={0}>
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
            fullWidth
            onClick={handleCheckoutItems}
          >
            Checkout 2 Items
          </Button>
        </FixedMobileButton>
      </Container>
    </Layout>
  );
};

export default Cart;
