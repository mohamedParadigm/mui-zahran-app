// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// Icons
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
// Componetns
import Layout from "../../../modules/layout/Layout";
import RenameOrderDialog from "../../../components/RenameOrderDialog";

const CardStyle = styled((props) => <Card {...props} />)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const renameOrderInitialValue = {
  orderName: "",
};

const OrderDetails = () => {
  const router = useRouter();

  const [showRenameOrderDialog, setShowRenameOrderDialog] = useState(false);

  const handleToggleRenamingDialog = () =>
    setShowRenameOrderDialog((prev) => !prev);

  return (
    <Layout title="Order Details" elevationOption={false}>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={1} alignItems="center" mb={3}>
          <Grid item xs="auto">
            <NextLink href="/dashboard/orders" passHref>
              <Link underline="none" display="flex">
                <ArrowBackOutlinedIcon />
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs>
            <Typography
              component="h1"
              variant="h5"
              fontWeight={700}
              gutterBottom
              mb={0}
            >
              order details
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ maxWidth: { md: "70%" }, mx: "auto" }}>
          <Paper
            sx={{ maxWidth: { md: "70%" }, mx: "auto", mb: 3 }}
            elevation={6}
          >
            <List>
              <ListItem sx={{ justifyContent: "space-between" }}>
                <Typography textTransform="capitalize">Order ID</Typography>
                <Typography textTransform="capitalize">1</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "space-between" }}>
                <Typography textTransform="capitalize">Order Date</Typography>
                <Typography textTransform="capitalize">5 JUN</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "space-between" }}>
                <Typography textTransform="capitalize">
                  Shipping Address
                </Typography>
                <Typography textTransform="capitalize">
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "space-between" }}>
                <Typography textTransform="capitalize">
                  Shipping Fees
                </Typography>
                <Typography textTransform="capitalize">50.00 EGP</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: "space-between" }}>
                <Typography
                  textTransform="capitalize"
                  component="h2"
                  variant="h5"
                >
                  total
                </Typography>
                <Typography textTransform="capitalize" variant="h5">
                  50.00 EGP
                </Typography>
              </ListItem>
            </List>
          </Paper>
          <Box mb={3}>
            <Typography component="h2" variant="h5" mb={2}>
              grocery
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={12}>
                <CardStyle elevation={4}>
                  <CardActionArea
                    onClick={() => router.push("/product")}
                    sx={{ width: "auto", flexShrink: 0 }}
                  >
                    <CardMedia
                      component="img"
                      image="/images/products/ingredient-1.jpg"
                      width={120}
                      height={120}
                    />
                  </CardActionArea>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Box flexGrow={1}>
                      <Typography component="h3" variant="h6">
                        lorem ipsum
                      </Typography>
                      <Typography variant="body2">Brand: Shana</Typography>
                      <Typography variant="body2">Quantity: 2</Typography>
                    </Box>
                    <Box flexGrow={1} sx={{ textAlign: { sm: "center" } }}>
                      <Typography component="h3" variant="h6">
                        price
                      </Typography>
                      <Typography variant="body2">60 EGP</Typography>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 1 }}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      add review
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        width: { xs: "100%", sm: "auto" },
                        marginLeft: "0 !important",
                      }}
                    >
                      buy again
                    </Button>
                  </CardActions>
                </CardStyle>
              </Grid>
              <Grid item xs={6} sm={12}>
                <CardStyle elevation={4}>
                  <CardActionArea
                    onClick={() => router.push("/product")}
                    sx={{ width: "auto", flexShrink: 0 }}
                  >
                    <CardMedia
                      component="img"
                      image="/images/products/ingredient-1.jpg"
                      width={120}
                      height={120}
                    />
                  </CardActionArea>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Box flexGrow={1}>
                      <Typography component="h3" variant="h6">
                        lorem ipsum
                      </Typography>
                      <Typography variant="body2">Brand: Shana</Typography>
                      <Typography variant="body2">Quantity: 2</Typography>
                    </Box>
                    <Box flexGrow={1} sx={{ textAlign: { sm: "center" } }}>
                      <Typography component="h3" variant="h6">
                        price
                      </Typography>
                      <Typography variant="body2">60 EGP</Typography>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 1 }}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      add review
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        width: { xs: "100%", sm: "auto" },
                        marginLeft: "0 !important",
                      }}
                    >
                      buy again
                    </Button>
                  </CardActions>
                </CardStyle>
              </Grid>
            </Grid>
          </Box>
          <Box mb={3}>
            <Typography component="h2" variant="h5" mb={2}>
              household
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={12}>
                <CardStyle elevation={4}>
                  <CardActionArea
                    onClick={() => router.push("/product")}
                    sx={{ width: "auto", flexShrink: 0 }}
                  >
                    <CardMedia
                      component="img"
                      image="/images/products/p-1.webp"
                      width={120}
                      height={120}
                    />
                  </CardActionArea>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Box flexGrow={1}>
                      <Typography component="h3" variant="h6">
                        lorem ipsum
                      </Typography>
                      <Typography variant="body2">Brand: Shana</Typography>
                      <Typography variant="body2">Quantity: 2</Typography>
                    </Box>
                    <Box flexGrow={1} sx={{ textAlign: { sm: "center" } }}>
                      <Typography component="h3" variant="h6">
                        price
                      </Typography>
                      <Typography variant="body2">60 EGP</Typography>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 1 }}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      add review
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        width: { xs: "100%", sm: "auto" },
                        marginLeft: "0 !important",
                      }}
                    >
                      buy again
                    </Button>
                  </CardActions>
                </CardStyle>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button variant="contained" color="secondary" onClick={handleToggleRenamingDialog}>
              add to favourites
            </Button>
            <RenameOrderDialog
              showRenameOrderDialog={showRenameOrderDialog}
              handleToggleRenamingDialog={handleToggleRenamingDialog}
              title="rename order"
              initialValues={renameOrderInitialValue}
            />
            <Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>
              buy all again
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default OrderDetails;
