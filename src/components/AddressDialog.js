// Internals
import { useState, forwardRef, useEffect } from "react";
import { useRouter } from "next/router";
// MUI
import { grey } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Externals
import useTranslation from "next-translate/useTranslation";
// Data
import data from "../utils/data";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddressDialog = (props) => {
  const { showAddressDialog, handleToggleAddressDialog, title, initialValues } =
    props;
  const { countries, cities, areas } = data;

  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const [addressDetails, setAddressDetails] = useState(initialValues);
  const [availableCountries, setAvailableCountries] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [availableAreas, setAvailableAreas] = useState([]);

  useEffect(() => {
    setAvailableCountries(countries);
  }, [countries]);

  useEffect(() => {
    const specificCities = addressDetails.country
      ? cities.filter((el) => el.countryUniqueName === addressDetails.country)
      : [];

    setAvailableCities(specificCities);
  }, [cities, addressDetails.country]);

  useEffect(() => {
    const specificAreas = addressDetails.city
      ? areas.filter((el) => el.cityUniqueName === addressDetails.city)
      : [];

    setAvailableAreas(specificAreas);
  }, [areas, addressDetails.city]);

  const handleAddressChange = (e) => {
    setAddressDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancelAddress = (e) => {
    e.preventDefault();

    setAddressDetails(initialValues);

    handleToggleAddressDialog();
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };

  return (
    <Dialog
      open={showAddressDialog}
      TransitionComponent={Transition}
      onClose={handleCancelAddress}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "capitalize",
          backgroundColor: grey[200],
        }}
        variant="h6"
      >
        <span>{title}</span>
        <IconButton onClick={handleToggleAddressDialog}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: "1rem" }}>
        <form onSubmit={handleAddressSubmit} autoComplete="off">
          <List>
            <ListItem>
              <FormControl fullWidth required>
                <InputLabel id="selectCountryLabel">{t("country")}</InputLabel>
                <Select
                  labelId="selectCountryLabel"
                  id="selectCountry"
                  name="country"
                  value={addressDetails.country}
                  label={t("country")}
                  onChange={handleAddressChange}
                  color="secondary"
                  MenuProps={MenuProps}
                >
                  {availableCountries?.length !== 0 ? (
                    availableCountries?.map((el) => (
                      <MenuItem
                        key={el.id}
                        value={el.uniqueName}
                        sx={{ whiteSpace: "initial" }}
                      >
                        {el[`name_${locale}`]}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">
                      <CircularProgress size={20} />
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl
                fullWidth
                required
                disabled={!Boolean(addressDetails.country)}
              >
                <InputLabel id="selectCityLabel">City</InputLabel>
                <Select
                  labelId="selectCityLabel"
                  id="selectCity"
                  name="city"
                  value={addressDetails.city}
                  label="City"
                  onChange={handleAddressChange}
                  color="secondary"
                  MenuProps={MenuProps}
                >
                  {availableCities?.length !== 0 ? (
                    availableCities?.map((el) => (
                      <MenuItem
                        key={el.id}
                        value={el.uniqueName}
                        sx={{ whiteSpace: "initial" }}
                      >
                        {el[`name_${locale}`]}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">
                      <CircularProgress size={20} />
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl
                fullWidth
                required
                disabled={!Boolean(addressDetails.city)}
              >
                <InputLabel id="selectAreaLabel">Area</InputLabel>
                <Select
                  labelId="selectAreaLabel"
                  id="selectArea"
                  name="area"
                  value={addressDetails.area}
                  label="Area"
                  onChange={handleAddressChange}
                  color="secondary"
                  MenuProps={MenuProps}
                >
                  {availableAreas?.length !== 0 ? (
                    availableAreas?.map((el) => (
                      <MenuItem
                        key={el.id}
                        value={el.uniqueName}
                        sx={{ whiteSpace: "initial" }}
                      >
                        {el[`name_${locale}`]}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">
                      <CircularProgress size={20} />
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <TextField
                id="detailedAddress"
                name="detailedAddress"
                label="Deatiled Address"
                variant="outlined"
                value={addressDetails.detailedAddress}
                onChange={handleAddressChange}
                fullWidth
              />
            </ListItem>
            <ListItem>
              <Grid container spacing={1} justifyContent="flex-end">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCancelAddress}
                  >
                    {t("cancel")}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    {t("save")}
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressDialog;
