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
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateLocation } from "../redux/features/location/locationSlice";
import { toast } from "react-toastify";
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
  const { showAddressDialog, handleToggleAddressDialog, title, initialValues } =
    props;
  const { countries, cities, areas } = data;

  const dispatch = useDispatch();

  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const watchCountry = watch("country");
  const watchCity = watch("city");

  const [availableCountries, setAvailableCountries] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [availableAreas, setAvailableAreas] = useState([]);

  useEffect(() => {
    setValue("country", initialValues.country);
    setValue("city", initialValues.city);
    setValue("area", initialValues.area);
    setValue("detailedAddress", initialValues.detailedAddress);
  }, [initialValues, setValue]);

  useEffect(() => {
    setAvailableCountries(countries);
  }, [countries]);

  useEffect(() => {
    const specificCities = watchCountry
      ? cities.filter((el) => el.countryUniqueName === watchCountry)
      : [];

    setAvailableCities(specificCities);
  }, [cities, watchCountry]);

  useEffect(() => {
    const specificAreas = watchCity
      ? areas.filter((el) => el.cityUniqueName === watchCity)
      : [];

    setAvailableAreas(specificAreas);
  }, [areas, watchCity]);

  const handleCancelAddress = (e) => {
    e.preventDefault();
    reset(initialValues);
    handleToggleAddressDialog();
  };

  const handleAddressSubmit = (data) => {
    if (JSON.stringify(data) === JSON.stringify(initialValues)) {
      handleToggleAddressDialog();
      return;
    }
    dispatch(updateLocation(data));
    handleToggleAddressDialog();
    toast.success(
      initialValues.country ? t("updateAddressSucc") : t("addAddress")
    );
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
        <form onSubmit={handleSubmit(handleAddressSubmit)} autoComplete="off">
          <List>
            <ListItem>
              <FormControl fullWidth error={Boolean(errors.country)}>
                <InputLabel id="selectCountryLabel">{t("country")}</InputLabel>
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      labelId="selectCountryLabel"
                      id="selectCountry"
                      label={t("country")}
                      color="secondary"
                      MenuProps={MenuProps}
                      {...field}
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
                  )}
                />
                {errors.country && (
                  <FormHelperText>{t("reqField")}</FormHelperText>
                )}
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl
                fullWidth
                error={Boolean(errors.city)}
                disabled={!Boolean(watchCountry)}
              >
                <InputLabel id="selectCityLabel">{t("city")}</InputLabel>
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      labelId="selectCityLabel"
                      id="selectCity"
                      label={t("city")}
                      color="secondary"
                      MenuProps={MenuProps}
                      {...field}
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
                  )}
                />
                {errors.city && (
                  <FormHelperText>{t("reqField")}</FormHelperText>
                )}
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl
                fullWidth
                error={Boolean(errors.area)}
                disabled={!Boolean(watchCity)}
              >
                <InputLabel id="selectAreaLabel">{t("area")}</InputLabel>
                <Controller
                  name="area"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      labelId="selectAreaLabel"
                      id="selectArea"
                      label={t("area")}
                      color="secondary"
                      MenuProps={MenuProps}
                      {...field}
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
                  )}
                />
                {errors.area && (
                  <FormHelperText>{t("reqField")}</FormHelperText>
                )}
              </FormControl>
            </ListItem>
            <ListItem>
              <Controller
                name="detailedAddress"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="detailedAddress"
                    label={t("detailedAddress")}
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    {...field}
                  />
                )}
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
