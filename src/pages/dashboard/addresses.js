// Internals
import { useState } from "react";
// MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// Components
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import CustomRadio from "../../components/shared/CustomRadio";
import MuiTooltip from "../../components/shared/MuiTooltip";
import AddressDialog from "../../components/AddressDialog";

const addressInitialDetails = {
  country: "",
  city: "",
  area: "",
  detailedAddress: "",
};

let addressDialogTitle;

const Addresses = () => {
  const [showAddressDialog, setShowAddressDialog] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState("address_1");

  const handleToggleAddressDialog = () => setShowAddressDialog((prev) => !prev);

  const handleDefaultAddressChange = (e) => {
    setDefaultAddress(e.target.value);
  };

  return (
    <DashboardLayout
      title="Addresses"
      elevationOption={false}
      activeTab={2}
      maxWidth={700}
    >
      <Box mb={3}>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          your Addresses
        </Typography>
        <Typography variant="body1" mb={2}>
          Manage your saved addresses for fast and easy checkout across our
          marketplaces
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleToggleAddressDialog();
            addressDialogTitle = "add new address";
          }}
        >
          add new address
        </Button>
        <AddressDialog
          showAddressDialog={showAddressDialog}
          handleToggleAddressDialog={handleToggleAddressDialog}
          title={addressDialogTitle}
          initialValues={addressInitialDetails}
        />
      </Box>
      <Box>
        {/* <Typography
          variant="h5"
          component="h3"
          textTransform="capitalize"
          textAlign="center"
        >
          No addresses to view
        </Typography> */}
        <Paper sx={{ p: 1, mb: 2 }} elevation={6}>
          <Grid container spacing={1}>
            <Grid item xs="auto" alignSelf="center">
              <MuiTooltip
                title={
                  defaultAddress === "address_1"
                    ? "Default Address"
                    : "Make Default"
                }
                arrow
                placement="top"
              >
                <div>
                  <CustomRadio
                    checked={defaultAddress === "address_1"}
                    name="userAddresses"
                    value="address_1"
                    onChange={handleDefaultAddressChange}
                    inputProps={{ "aria-label": "Address 1" }}
                  />
                </div>
              </MuiTooltip>
            </Grid>
            <Grid item xs>
              <Grid container spacing={1} mb={1}>
                <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.5 }}>
                    Address
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body2">
                    El Raml, 6XQ3+P8 - El Raml 1 - Alexandria Governorate
                    Alexandria, Egypt
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.5 }}>
                    Phone
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body2">+20-11-57735762</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm="auto"
              display="flex"
              justifyContent="space-between"
              alignSelf="center"
            >
              <MuiTooltip title="Delete Address" arrow placement="top">
                <IconButton aria-label="delete address" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </MuiTooltip>
              <MuiTooltip title="Edit Address" arrow placement="top">
                <IconButton
                  aria-label="edit address"
                  color="secondary"
                  onClick={() => {
                    handleToggleAddressDialog();
                    addressDialogTitle = "edit current address";
                  }}
                >
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
              </MuiTooltip>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 1 }} elevation={6}>
          <Grid container spacing={1}>
            <Grid item xs="auto" alignSelf="center">
              <MuiTooltip
                title={
                  defaultAddress === "address_2"
                    ? "Default Address"
                    : "Make Default"
                }
                arrow
                placement="top"
              >
                <div>
                  <CustomRadio
                    checked={defaultAddress === "address_2"}
                    name="userAddresses"
                    value="address_2"
                    onChange={handleDefaultAddressChange}
                    inputProps={{ "aria-label": "Address 2" }}
                  />
                </div>
              </MuiTooltip>
            </Grid>
            <Grid item xs>
              <Grid container spacing={1} mb={1}>
                <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.5 }}>
                    Address
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body2">
                    El Raml, 6XQ3+P8 - El Raml 1 - Alexandria Governorate
                    Alexandria, Egypt
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.5 }}>
                    Phone
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body2">+20-11-57735762</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm="auto"
              display="flex"
              justifyContent="space-between"
              alignSelf="center"
            >
              <MuiTooltip title="Delete Address" arrow placement="top">
                <IconButton aria-label="delete address" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </MuiTooltip>
              <MuiTooltip title="Edit Address" arrow placement="top">
                <IconButton
                  aria-label="edit address"
                  color="secondary"
                  onClick={() => {
                    handleToggleAddressDialog();
                    addressDialogTitle = "edit current address";
                  }}
                >
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
              </MuiTooltip>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </DashboardLayout>
  );
};

export default Addresses;
