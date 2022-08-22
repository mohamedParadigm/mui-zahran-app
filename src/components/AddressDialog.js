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
import FormHelperText from "@mui/material/FormHelperText";
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "react-redux";
import { updateLocation } from "../redux/features/location/locationSlice";
import { toast } from "react-toastify";
import { updateAddresses } from "../redux/features/userAddresses/userAddressesSlice";
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
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddressDialog = (props) => {
  const {
    showAddressDialog,
    handleToggleAddressDialog,
    title,
    initialValues,
    type,
  } = props;
  const { countries, cities, areas } = data;

  const dispatch = useDispatch();

  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues({ ...initialValues });
  }, [initialValues]);

  const [errors, setErrors] = useState({
    country: "",
    city: "",
    area: "",
  });

  const [availableCountries, setAvailableCountries] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [availableAreas, setAvailableAreas] = useState([]);

  useEffect(() => {
    setAvailableCountries(countries);
  }, [countries]);

  useEffect(() => {
    const specificCities = values.country
      ? cities.filter((el) => el.countryUniqueName === values.country)
      : [];

    setAvailableCities(specificCities);
  }, [cities, values.country]);

  useEffect(() => {
    const specificAreas = values.city
      ? areas.filter((el) => el.cityUniqueName === values.city)
      : [];

    setAvailableAreas(specificAreas);
  }, [areas, values.city]);

  const handleCancelAddress = (e) => {
    e.preventDefault();
    setValues({ ...initialValues });
    handleToggleAddressDialog();
  };

  const validate = (selectValues = values) => {
    const temp = { ...errors };

    "country" in selectValues &&
      (temp.country = selectValues.country ? "" : t("reqField"));

    "city" in selectValues &&
      (temp.city = selectValues.city ? "" : t("reqField"));

    "area" in selectValues &&
      (temp.area = selectValues.area ? "" : t("reqField"));

    "userPhone" in selectValues &&
      (temp.userPhone = selectValues.userPhone ? "" : t("reqField"));

    setErrors({ ...temp });

    if (selectValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleCountryChange = (e) => {
    setValues((prev) => ({
      ...prev,
      city: "",
      area: "",
      country: e.target.value,
    }));

    validate({ country: e.target.value });
  };

  const handleCityChange = (e) => {
    setValues((prev) => ({
      ...prev,
      area: "",
      city: e.target.value,
    }));

    validate({ city: e.target.value });
  };

  const handleAreaChange = (e) => {
    setValues((prev) => ({
      ...prev,
      area: e.target.value,
    }));

    validate({ area: e.target.value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (JSON.stringify(values) === JSON.stringify(initialValues)) {
        handleToggleAddressDialog();
        return;
      }
      if (type === "location") {
        dispatch(updateLocation(values));
        handleToggleAddressDialog();
        toast.success(
          initialValues.country ? t("updateAddressSucc") : t("addAddress")
        );
      }
      if (type === "userAddress") {
        dispatch(updateAddresses(values));
        handleToggleAddressDialog();
        toast.success(
          initialValues.country ? t("updateAddressSucc") : t("addAddress")
        );
      }
      setValues(initialValues);
    }
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
            <ListItem sx={{ px: 0 }}>
              <FormControl fullWidth error={Boolean(errors.country)}>
                <InputLabel id="selectCountryLabel">{t("country")}</InputLabel>
                <Select
                  labelId="selectCountryLabel"
                  id="selectCountry"
                  name="country"
                  label={t("country")}
                  color="secondary"
                  MenuProps={MenuProps}
                  value={values.country}
                  onChange={handleCountryChange}
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
                {errors.country && (
                  <FormHelperText>{errors.country}</FormHelperText>
                )}
              </FormControl>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <FormControl
                fullWidth
                error={Boolean(errors.city)}
                disabled={!Boolean(values.country)}
              >
                <InputLabel id="selectCityLabel">{t("city")}</InputLabel>
                <Select
                  labelId="selectCityLabel"
                  id="selectCity"
                  name="city"
                  label={t("city")}
                  color="secondary"
                  MenuProps={MenuProps}
                  value={values.city}
                  onChange={handleCityChange}
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
                {errors.city && (
                  <FormHelperText>{errors.city}</FormHelperText>
                )}
              </FormControl>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <FormControl
                fullWidth
                error={Boolean(errors.area)}
                disabled={!Boolean(values.city)}
              >
                <InputLabel id="selectAreaLabel">{t("area")}</InputLabel>
                <Select
                  labelId="selectAreaLabel"
                  id="selectArea"
                  name="area"
                  label={t("area")}
                  color="secondary"
                  MenuProps={MenuProps}
                  value={values.area}
                  onChange={handleAreaChange}
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
                {errors.area && (
                  <FormHelperText>{errors.area}</FormHelperText>
                )}
              </FormControl>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <TextField
                id="detailedAddress"
                name="detailedAddress"
                label={t("detailedAddress")}
                variant="outlined"
                fullWidth
                color="secondary"
                value={values.detailedAddress}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    detailedAddress: e.target.value,
                  }))
                }
              />
            </ListItem>
            {type === "userAddress" && (
              <ListItem sx={{ px: 0 }}>
                <TextField
                  id="userPhone"
                  name="userPhone"
                  label={t("userPhone")}
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  value={values.userPhone}
                  onChange={(e) => {
                    setValues((prev) => ({
                      ...prev,
                      userPhone: e.target.value,
                    }));
                    validate({ userPhone: e.target.value });
                  }}
                  error={Boolean(errors.userPhone)}
                  helperText={errors.userPhone ? t("reqField") : ""}
                />
              </ListItem>
            )}
            <ListItem sx={{ px: 0 }}>
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
