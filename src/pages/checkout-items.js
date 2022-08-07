// Internals
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
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
// Components
import Layout from "../modules/layout/Layout";
import CheckoutLinearStepper from "../components/CheckoutLinearStepper";
import CheckoutCircularStepper from "../components/CheckoutCircularStepper";

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

const CheckoutItems = () => {
  const router = useRouter();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout
      layoutType="alt"
      title="Checkout Items"
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      showBottomNav={false}
      scrollOffset={{bottom: {xs: 70, md: 16}}}
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
                          <Typography>Quantity: 2kg</Typography>
                          <Typography
                            color="primary"
                            textTransform="uppercase"
                            variant="body2"
                          >
                            not available
                          </Typography>
                          <NextLink href="/shipping" passHref>
                            <Link color="secondary">
                              <Typography
                                variant="caption"
                                textTransform="capitalize"
                                mt={1}
                              >
                                Choose Another Location
                              </Typography>
                            </Link>
                          </NextLink>
                        </CardContent>
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
                          <Typography>Quantity: 2</Typography>
                          <Typography
                            color="primary"
                            textTransform="uppercase"
                            variant="body2"
                          >
                            best offer
                          </Typography>
                        </CardContent>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
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
                  772.68 EGP
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ flexGrow: { xs: 1, md: 0 } }}
                onClick={() => router.push("/shipping")}
              >
                back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ flexGrow: { xs: 1, md: 0 } }}
                onClick={() => router.push("/payment")}
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
                    <Typography variant="body2">677.79 EGP</Typography>
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

export default CheckoutItems;
