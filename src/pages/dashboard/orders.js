// Internals
import { useState } from "react";
import { useRouter } from "next/router";
// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
// Icons
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// Components
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import MuiTooltip from "../../components/shared/MuiTooltip";
import RenameOrderDialog from "../../components/RenameOrderDialog";

const renameOrderInitialValue = {
  orderName: "",
};

const Orders = () => {
  const router = useRouter();

  const [showRenameOrderDialog, setShowRenameOrderDialog] = useState(false);

  const handleToggleRenamingDialog = () =>
    setShowRenameOrderDialog((prev) => !prev);

  return (
    <DashboardLayout
      title="Orders"
      elevationOption={false}
      activeTab={3}
      maxWidth={700}
    >
      <Box mb={3}>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          Orders
        </Typography>
        <Typography variant="body1" mb={2}>
          Show your orders.
        </Typography>
      </Box>
      <Box mb={2}>
        {/* <Typography
          variant="h5"
          component="h3"
          textTransform="capitalize"
          textAlign="center"
        >
          No Orders to view
        </Typography> */}
        <Paper sx={{ p: 1, mb: 2 }} elevation={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <MuiTooltip title="Add To Favourite" arrow placement="top">
                <IconButton aria-label="add to favourites" color="secondary">
                  <StarBorderOutlinedIcon />
                </IconButton>
              </MuiTooltip>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                order id
              </Typography>
              <Typography variant="body2">1</Typography>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                order date
              </Typography>
              <Typography variant="body2">3 March</Typography>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                items
              </Typography>
              <Typography variant="body2">3</Typography>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                order status
              </Typography>
              <Typography variant="body2">delivered</Typography>
            </Grid>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => router.push("/dashboard/order-details/1")}
              >
                Details
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 1 }} elevation={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <MuiTooltip title="Add To Favourite" arrow placement="top">
                <IconButton aria-label="add to favourites" color="secondary">
                  <StarBorderOutlinedIcon />
                </IconButton>
              </MuiTooltip>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                order id
              </Typography>
              <Typography variant="body2">1</Typography>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                order date
              </Typography>
              <Typography variant="body2">3 March</Typography>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                items
              </Typography>
              <Typography variant="body2">3</Typography>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                order status
              </Typography>
              <Typography variant="body2">delivered</Typography>
            </Grid>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => router.push("/dashboard/order-details/2")}
              >
                Details
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box mb={3} id="favourites">
        <Typography variant="h5" component="h2" textTransform="capitalize">
          Favourites
        </Typography>
        <Typography variant="body1" mb={2}>
          Show your Favourite Orders
        </Typography>
      </Box>
      <Box>
        {/* <Typography
          variant="h5"
          component="h3"
          textTransform="capitalize"
          textAlign="center"
        >
          No Favourite Orders to view
        </Typography> */}
        <Paper sx={{ p: 1 }} elevation={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm="auto" alignSelf="center" textAlign="center">
              <MuiTooltip title="Remove From Favourite" arrow placement="top">
                <IconButton aria-label="add to favourites" color="secondary">
                  <StarOutlinedIcon />
                </IconButton>
              </MuiTooltip>
              <MuiTooltip title="Edit Order Name" arrow placement="top">
                <IconButton
                  aria-label="edit address"
                  color="secondary"
                  onClick={handleToggleRenamingDialog}
                >
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
              </MuiTooltip>
              <RenameOrderDialog
                showRenameOrderDialog={showRenameOrderDialog}
                handleToggleRenamingDialog={handleToggleRenamingDialog}
                title="rename order"
                initialValues={renameOrderInitialValue}
              />
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                order name
              </Typography>
              <Typography variant="body2">lorem ipsum dolor</Typography>
            </Grid>
            <Grid item xs={12} sm textAlign="center">
              <Typography
                component="h3"
                variant="h6"
                textTransform="capitalize"
              >
                items
              </Typography>
              <Typography variant="body2">3</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm="auto"
              alignSelf="center"
              textAlign="center"
              display="flex"
              gap={1}
              flexWrap="wrap"
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => router.push("/dashboard/order-details/1")}
              >
                Details
              </Button>
              <Button variant="outlined" color="secondary">
                reorder
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </DashboardLayout>
  );
};

export default Orders;
