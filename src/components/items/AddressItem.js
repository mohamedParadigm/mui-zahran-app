// Internals
import { useState } from "react";
import { useRouter } from "next/router";
// MUI
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// Externals
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  deleteAddress,
  makeDefault,
} from "../../redux/features/userAddresses/userAddressesSlice";
// Components
import MuiTooltip from "../shared/MuiTooltip";
import CustomRadio from "../shared/CustomRadio";
import ConfirmModal from "../ConfirmModal";
import AddressDialog from "../AddressDialog";
// Data
import data from "../../utils/data";

const AddressItem = ({ item }) => {
  const { id, country, city, area, detailedAddress, isDefault, userPhone } =
    item;

  const addressInitialDetails = {
    id,
    country,
    city,
    area,
    detailedAddress,
    userPhone,
  };

  const dispatch = useDispatch();

  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation("addresses");

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAddressDialog, setShowAddressDialog] = useState(false);

  const handleToggleAddressDialog = () => setShowAddressDialog((prev) => !prev);

  const countryLocation =
    country &&
    data.countries.find((el) => el.uniqueName === country)[`name_${locale}`];
  const cityLocation =
    city && data.cities.find((el) => el.uniqueName === city)[`name_${locale}`];
  const areaLocation =
    area && data.areas.find((el) => el.uniqueName === area)[`name_${locale}`];

  const handleDefaultAddressChange = () => {
    dispatch(makeDefault(id));
    toast.success(t("defaultUpdated"));
  };

  const handleAddressDelete = () => {
    dispatch(deleteAddress(id));
    setShowConfirmModal(false);
    toast.error(t("deletedSucc"));
  };

  return (
    <>
      <Paper sx={{ p: 1, flexGrow: 1 }} elevation={6}>
        <Grid container spacing={1}>
          <Grid item xs="auto" alignSelf="center">
            <MuiTooltip
              title={isDefault ? t("defAddress") : t("makeDef")}
              arrow
              placement="top"
            >
              <div>
                <CustomRadio
                  checked={isDefault}
                  name="userAddresses"
                  onChange={handleDefaultAddressChange}
                  inputProps={{
                    "aria-label": `${countryLocation} - ${cityLocation}`,
                  }}
                />
              </div>
            </MuiTooltip>
          </Grid>
          <Grid item xs>
            <Grid container spacing={1} mb={1} alignItems="center">
              <Grid item xs="auto">
                <Typography
                  variant="subtitle2"
                  sx={{ opacity: 0.5, minWidth: 60 }}
                >
                  {t("address")}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2">
                  {`${countryLocation} - ${cityLocation} - ${areaLocation}`}
                </Typography>
                {detailedAddress && (
                  <Typography variant="body2">{detailedAddress}</Typography>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs="auto">
                <Typography
                  variant="subtitle2"
                  sx={{ opacity: 0.5, minWidth: 60 }}
                >
                  {t("phone")}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2">{userPhone}</Typography>
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
              <MuiTooltip title={t("deleteAddress")} arrow placement="top">
                <IconButton
                  aria-label={t("deleteAddress")}
                  color="secondary"
                  onClick={() => setShowConfirmModal(true)}
                >
                  <DeleteIcon />
                </IconButton>
              </MuiTooltip>
              <MuiTooltip title={t("editAddress")} arrow placement="top">
                <IconButton
                  aria-label={t("editAddress")}
                  color="secondary"
                  onClick={handleToggleAddressDialog}
                >
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
              </MuiTooltip>
              <AddressDialog
                showAddressDialog={showAddressDialog}
                handleToggleAddressDialog={handleToggleAddressDialog}
                title={t("editAddress")}
                initialValues={addressInitialDetails}
                type="userAddress"
              />
            </Grid>
        </Grid>
      </Paper>
        <ConfirmModal
          open={showConfirmModal}
          content={t("confirmDelete")}
          handleConfirm={handleAddressDelete}
          handleCancel={() => setShowConfirmModal(false)}
        />
    </>
  );
};

export default AddressItem;
