// Internals
import NextLink from "next/link";
import Image from "next/image";
// MUI
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
// Icons
import DeleteIcon from "@mui/icons-material/Delete";
// Components
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import MuiTooltip from "../../components/shared/MuiTooltip";

const SoldOut = styled("span")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.secondary.main, 0.75),
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
}));

const Wishlist = () => {
  return (
    <DashboardLayout
      title="Wishlist"
      elevationOption={false}
      activeTab={4}
      BottomNavigationValue={4}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Box mb={3}>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          Wishlist
        </Typography>
        <Typography variant="body1" mb={2}>
          Show your wishlist items
        </Typography>
      </Box>
      <Box>
        {/* <Typography
          variant="h5"
          component="h3"
          textTransform="capitalize"
          textAlign="center"
        >
          No Items to view
        </Typography> */}
        <Paper sx={{ p: 1, mb: 2 }} elevation={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <MuiTooltip title="Delete Address" arrow placement="top">
                <IconButton aria-label="delete address" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </MuiTooltip>
            </Grid>
            <Grid item xs={12} sm="auto" alignSelf="center">
              <Box position="relative" width="fit-content" mx="auto">
                <NextLink href="/product" passHref>
                  <Link display="flex" underline="none">
                    <Image
                      src="/images/products/ingredient-1.jpg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </Link>
                </NextLink>
                <SoldOut>Sold out</SoldOut>
              </Box>
            </Grid>
            <Grid item xs textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                fontSize="1rem"
                fontWeight="700"
                textTransform="capitalize"
              >
                Product title
              </Typography>
              <Typography variant="body2" minHeight="20px">
                lorem ipsum dolor amet.
              </Typography>
              <Typography variant="subtitle2">20 EGP</Typography>
            </Grid>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <Button variant="outlined" color="secondary">
                find similar
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 1 }} elevation={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <MuiTooltip title="Delete Address" arrow placement="top">
                <IconButton aria-label="delete address" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </MuiTooltip>
            </Grid>
            <Grid item xs={12} sm="auto" alignSelf="center">
              <Box position="relative" width="fit-content" mx="auto">
                <NextLink href="/product" passHref>
                  <Link display="flex" underline="none">
                    <Image
                      src="/images/products/ingredient-1.jpg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </Link>
                </NextLink>
              </Box>
            </Grid>
            <Grid item xs textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                fontSize="1rem"
                fontWeight="700"
                textTransform="capitalize"
              >
                Product title
              </Typography>
              <Typography variant="body2" minHeight="20px">
                lorem ipsum dolor amet.
              </Typography>
              <Typography variant="subtitle2">20 EGP</Typography>
            </Grid>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              {/* <Button variant="outlined" color="secondary">
                find similar
              </Button> */}
              <Button
                variant="contained"
                color="secondary"
                // sx={{ marginLeft: 1 }}
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </DashboardLayout>
  );
};

export default Wishlist;
