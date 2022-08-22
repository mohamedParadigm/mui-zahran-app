// Internals
import { useEffect, useState } from "react";
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
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import FormHelperText from "@mui/material/FormHelperText";
// Externals
import { getCookie, hasCookie, setCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";
import { useForm, Controller } from "react-hook-form";
// Components
import Layout from "../../modules/layout/Layout";
import CheckoutLinearStepper from "../../components/CheckoutLinearStepper";
import CheckoutCircularStepper from "../../components/CheckoutCircularStepper";
import CustomRadio from "../../components/shared/CustomRadio";
import { withSessionSsr } from "../../lib/withSession";
// Data
import data from "../../utils/data";
import { cookieExpireDate } from "../../utils/utils";
import SimpleAddressItem from "../../components/items/SimpleAddressItem";

const addressInitialDetails = {
  country: "",
  city: "",
  area: "",
  detailedAddress: "",
};

const vat = 100;
const delivery = 100;

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

const FixedMobileButton = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
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

const ShippingAddress = (props) => {
  const { user, guest, cartItems, userLocation, defaultAddress, branch } =
    props;
  const { countries, cities, areas, branches } = data;

  const calcItemsSubTotal = (items) => {
    const prices = items.map((item) => {
      return {
        id: item.id,
        price: item.priceAfterDiscount ? item.priceAfterDiscount : item.Price,
      };
    });
    const price = prices.reduce((acc, curr) => {
      return acc + parseFloat(curr.price);
    }, 0);

    return price;
  };

  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation("shipping");

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [values, setValues] = useState(addressInitialDetails);

  const [manualErrors, setManualErrors] = useState({
    country: "",
    city: "",
    area: "",
  });

  const [availableCountries, setAvailableCountries] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [availableAreas, setAvailableAreas] = useState([]);

  const [selectedBranch, setSelectedBranch] = useState("");
  const [branchError, setBranchError] = useState("");

  const [orderTypeValue, setOrderTypeValue] = useState("");
  const handleOrderTpyeChange = (type) => {
    setOrderTypeValue(type);
    setCookie("orderType", type, cookieExpireDate(13));
  };

  const [userUsedId, setUserUsedId] = useState("");
  const handleChangeinUsedId = (id) => {
    setUserUsedId(id);

    const address = defaultAddress.find((el) => el.id === id);
    const reqFields = {
      country: address.country,
      area: address.area,
      city: address.city,
      detailedAddress: address.detailedAddress,
    };

    setCookie("location", JSON.stringify(reqFields), {
      expires: cookieExpireDate(13),
    });
  };

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

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const validate = (selectValues = values) => {
    const temp = { ...errors };

    "country" in selectValues &&
      (temp.country = selectValues.country ? "" : t("reqField"));

    "city" in selectValues &&
      (temp.city = selectValues.city ? "" : t("reqField"));

    "area" in selectValues &&
      (temp.area = selectValues.area ? "" : t("reqField"));

    setManualErrors({ ...temp });

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

  useEffect(() => {
    const currentOrderType = hasCookie("orderType")
      ? getCookie("orderType")
      : "delivery";

    setOrderTypeValue(currentOrderType);

    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("mobile", user.mobile);
      setValue("email", user.email);
    }

    if (!user && guest) {
      setValue("firstName", guest.firstName);
      setValue("lastName", guest.lastName);
      setValue("mobile", guest.mobile);
      setValue("email", guest.email);
    }

    if (currentOrderType === "delivery") {
      if (userLocation) {
        setValues({ ...userLocation });
      }

      if (!userLocation && !Array.isArray(defaultAddress)) {
        const newAddress = {
          country: defaultAddress.country,
          area: defaultAddress.area,
          city: defaultAddress.city,
          detailedAddress: defaultAddress.detailedAddress,
        };
        setValues({ ...newAddress });
      }
    } else {
      if (branch) {
        setSelectedBranch(branch.uniqueName);
      }
    }
  }, [
    user,
    guest,
    setValue,
    userLocation,
    defaultAddress,
    orderTypeValue,
    branch,
  ]);

  const handleAddressFormSubmit = (data) => {
    if (!user) {
      setCookie("guest", JSON.stringify(data), {
        expires: cookieExpireDate(13),
      });
    }
    if (orderTypeValue === "delivery") {
      if (validate()) {
        setCookie("location", JSON.stringify(values), {
          expires: cookieExpireDate(13),
        });

        const branch = branches.find((el) => el.area === values.area);

        setCookie("branch", JSON.stringify(branch), {
          expires: cookieExpireDate(13),
        });
      }
    } else {
      if (!selectedBranch) {
        setBranchError(t("required"));
      } else {
        const branch = branches.find((el) => el.uniqueName === selectedBranch);
        setCookie("branch", JSON.stringify(branch), {
          expires: cookieExpireDate(13),
        });
      }
    }

    router.push("/checkout/checkout-items", undefined, { locale });
  };

  return (
    <Layout
      layoutType="alt"
      title="Shipping Address"
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      showBottomNav={false}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Container sx={{ py: 4 }}>
        <Box mb={3}>
          {matches ? (
            <CheckoutLinearStepper activeStep={0} />
          ) : (
            <CheckoutCircularStepper activeStep={0} />
          )}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md>
            {!user && (
              <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs>
                    <Typography>{t("loginToAccount")}</Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <NextLink href="/account/login?redirect=checkout/shipping">
                      <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                      >
                        {t("login")}
                      </Button>
                    </NextLink>
                  </Grid>
                </Grid>
              </Paper>
            )}
            <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
              <Typography
                id="selectOrderTypeLabel"
                component="h2"
                variant="h4"
                mb={1}
              >
                {t("orderType")}
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  row
                  aria-labelledby="selectOrderTypeLabel"
                  name="selectOrderType"
                  value={orderTypeValue}
                  onChange={(e) => handleOrderTpyeChange(e.target.value)}
                >
                  <FormControlLabel
                    value="delivery"
                    control={<CustomRadio />}
                    label={t("delivery")}
                    sx={{ flexGrow: 1, textTransform: "capitalize" }}
                  />
                  <FormControlLabel
                    value="pickup"
                    control={<CustomRadio />}
                    label={t("pickup")}
                    sx={{ flexGrow: 1, textTransform: "capitalize" }}
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
            <form
              id="shippingAddressForm"
              onSubmit={handleSubmit(handleAddressFormSubmit)}
            >
              <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                <Typography
                  id="selectOrderTypeLabel"
                  component="h2"
                  variant="h4"
                  mb={3}
                >
                  {user ? t("welcome", { name: user?.firstName }) : t("guest")}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          variant="standard"
                          fullWidth
                          id="firstName"
                          label={t("fName")}
                          error={Boolean(errors.firstName)}
                          helperText={
                            errors.firstName
                              ? errors.firstName.type === "required" &&
                                t("required")
                              : ""
                          }
                          disabled={Boolean(user)}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          variant="standard"
                          fullWidth
                          id="lastName"
                          label={t("lName")}
                          error={Boolean(errors.lastName)}
                          helperText={
                            errors.lastName
                              ? errors.lastName.type === "required" &&
                                t("required")
                              : ""
                          }
                          disabled={Boolean(user)}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="mobile"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: /^01[0-2,5]{1}[0-9]{8}$/,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="standard"
                          fullWidth
                          id="mobile"
                          label={t("mobile")}
                          error={Boolean(errors.mobile)}
                          helperText={
                            errors.mobile
                              ? errors.mobile.type === "pattern"
                                ? t("mobileValid")
                                : t("required")
                              : ""
                          }
                          disabled={Boolean(user)}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="standard"
                          fullWidth
                          id="email"
                          label={t("email")}
                          InputProps={{ type: "email" }}
                          error={Boolean(errors.email)}
                          helperText={
                            errors.email
                              ? errors.email.type === "pattern"
                                ? t("emailValid")
                                : t("required")
                              : ""
                          }
                          disabled={Boolean(user)}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Paper>
              {orderTypeValue === "delivery" && (
                <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                  <Typography component="h2" variant="h4" mb={3}>
                    {t("getAddress")}
                  </Typography>
                  {!user ||
                  userLocation ||
                  !Array.isArray(defaultAddress) ||
                  (Array.isArray(defaultAddress) &&
                    defaultAddress.length === 0) ? (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <FormControl
                          fullWidth
                          error={Boolean(manualErrors.country)}
                          // disabled={
                          //   Boolean(userLocation) ||
                          //   !Array.isArray(defaultAddress)
                          // }
                        >
                          <InputLabel id="selectCountryLabel">
                            {t("country")}
                          </InputLabel>
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
                          {manualErrors.country && (
                            <FormHelperText>
                              {manualErrors.country}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl
                          fullWidth
                          error={Boolean(manualErrors.city)}
                          disabled={!Boolean(values.country)}
                        >
                          <InputLabel id="selectCityLabel">
                            {t("city")}
                          </InputLabel>
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
                          {manualErrors.city && (
                            <FormHelperText>{manualErrors.city}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl
                          fullWidth
                          error={Boolean(manualErrors.area)}
                          disabled={!Boolean(values.city)}
                        >
                          <InputLabel id="selectAreaLabel">
                            {t("area")}
                          </InputLabel>
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
                          {manualErrors.area && (
                            <FormHelperText>{manualErrors.area}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
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
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container spacing={3}>
                      {defaultAddress?.map((item) => (
                        <Grid key={item.id} item xs={12}>
                          <SimpleAddressItem
                            item={item}
                            usedId={userUsedId}
                            handleChangeinUsedId={(id) =>
                              handleChangeinUsedId(id)
                            }
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Paper>
              )}
              {orderTypeValue === "pickup" && (
                <Paper sx={{ borderRadius: 2, p: 2, mb: 3 }}>
                  <Typography component="h2" variant="h4" mb={3}>
                    {t("selectBranch")}
                  </Typography>
                  <FormControl fullWidth error={Boolean(branchError)}>
                    <InputLabel id="selectBranchLabel">
                      {t("branch")}
                    </InputLabel>
                    <Select
                      labelId="selectBranchLabel"
                      id="selectBranch"
                      name="branch"
                      label={t("branch")}
                      color="secondary"
                      MenuProps={MenuProps}
                      value={selectedBranch}
                      onChange={(e) => {
                        setSelectedBranch(e.target.value);
                        setBranchError("");
                      }}
                    >
                      {branches?.length !== 0 ? (
                        branches?.map((el) => (
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
                    {branchError && (
                      <FormHelperText>{branchError}</FormHelperText>
                    )}
                  </FormControl>
                </Paper>
              )}
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
                  variant="contained"
                  color="secondary"
                  type="submit"
                  form="shippingAddressForm"
                  sx={{ flexGrow: { xs: 1, md: 0 } }}
                >
                  next
                </Button>
              </FixedMobileButton>
            </form>
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
                  {t("orderSummary")}
                </Typography>
                <List>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      {t("subtotal")}{" "}
                      <span style={{ opacity: 0.7 }}>
                        ({cartItems.length} {t("item")})
                      </span>
                    </Typography>
                    <Typography variant="body2">
                      {calcItemsSubTotal(cartItems)} {t("egp")}
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography variant="body2" textTransform="capitalize">
                      {t("vat")}
                    </Typography>
                    <Typography variant="body2">
                      {vat} {t("egp")}
                    </Typography>
                  </ListItem>
                  {orderTypeValue === "delivery" && (
                    <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                      <Typography variant="body2" textTransform="capitalize">
                        {t("deliveryCharg")}
                      </Typography>
                      <Typography variant="body2">
                        {delivery} {t("egp")}
                      </Typography>
                    </ListItem>
                  )}
                  <Divider sx={{ my: 1 }} component="li" />
                  <ListItem sx={{ justifyContent: "space-between", py: 0.5 }}>
                    <Typography
                      variant="body1"
                      textTransform="capitalize"
                      fontWeight={700}
                    >
                      {t("total")}{" "}
                      <span style={{ opacity: 0.7, fontSize: "0.7rem" }}>
                        ({t("incVat")})
                      </span>
                    </Typography>
                    <Typography variant="body1" fontWeight={700}>
                      {orderTypeValue === "delivery"
                        ? calcItemsSubTotal(cartItems) + vat + delivery
                        : calcItemsSubTotal(cartItems) + vat}{" "}
                      {t("egp")}
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

export default ShippingAddress;

export const getServerSideProps = withSessionSsr(
  async ({ req, res, locale }) => {
    const user = req.session.user || null;

    const guest =
      hasCookie("guest", { req, res }) &&
      JSON.parse(getCookie("guest", { req, res }));

    const cartItems = hasCookie("cart", { req, res })
      ? JSON.parse(getCookie("cart", { req, res }))
      : [];

    if (!hasCookie("cart", { req, res }) || cartItems?.length === 0) {
      return {
        redirect: {
          destination: `/${locale}/cart`,
          permanent: false,
        },
      };
    }

    const branch =
      hasCookie("branch", { req, res }) &&
      JSON.parse(getCookie("branch", { req, res }));

    const cartProducts =
      cartItems &&
      cartItems?.map((el) => {
        const items = data?.products?.find(
          (product) => product.uniqueName === el.uniqueName
        );
        return items;
      });

    const userLocation = hasCookie("location", { req, res })
      ? JSON.parse(getCookie("location", { req, res }))
      : null;

    const userAddresses = hasCookie("userAddresses", { req, res })
      ? JSON.parse(getCookie("userAddresses", { req, res }))
      : [];

    const defaultAddress =
      userAddresses.length !== 0 && userAddresses.find((el) => el.isDefault);

    const sentUserAddress = defaultAddress ? defaultAddress : userAddresses;

    return {
      props: {
        user,
        guest,
        cartItems: cartProducts,
        userLocation,
        defaultAddress: sentUserAddress,
        branch,
      },
    };
  }
);
