// Internals
import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Stack from "@mui/material/Stack";
// Icons
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
import { hasCookie, getCookie } from "cookies-next";
// Components
import AddressDialog from "../../../../components/AddressDialog";
import LanguageChanger from "../../../../components/LanguageChanger";
import { updateLocation } from "../../../../redux/features/location/locationSlice";
// Data
import data from "../../../../utils/data";
import MobileMenu from "../../../../components/MobileMenu";
import { toggleMobileDrawer } from "../../../../redux/features/global/globalSlice";

const BrandSectionStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: `calc(${theme.spacing(1)} * 1.5)`,
  flexShrink: 0,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const LocationTriggerStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    textAlign: "center",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "space-between",
}));

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

const BrandSection = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");

  // const [menuDrawerAnchor, setMenuDrawerAnchor] = useState(false);

  const { user } = useSelector((state) => state);
  const { location } = useSelector((state) => state);
  const  {mobileDrawer} = useSelector((state) => state.global);
  console.log(mobileDrawer)
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasCookie("location")) {
      dispatch(updateLocation(JSON.parse(getCookie("location"))));
    }
  }, [dispatch]);

  const countryLocation =
    location.country &&
    data.countries.find((el) => el.uniqueName === location.country)[
      `name_${locale}`
    ];
  const cityLocation =
    location.city &&
    data.cities.find((el) => el.uniqueName === location.city)[`name_${locale}`];
  const areaLocation =
    location.area &&
    data.areas.find((el) => el.uniqueName === location.area)[`name_${locale}`];
    
//   const toggleMenuDrawer = (event , states) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
// dispatch(toggleMobileDrawer(states))
//     // setMenuDrawerAnchor((prev) => !prev);
//   };

  const handleRedirectToAccount = (url) => {
    router.push(url, undefined, { locale });
  };

  const [showAddressDialog, setShowAddressDialog] = useState(false);

  const handleToggleAddressDialog = () => setShowAddressDialog((prev) => !prev);
 

  return (
    <BrandSectionStyle>
      <IconButton
        color="inherit"
        aria-label="open menu drawer"
        // onClick={toggleMenuDrawser}
        sx={{ display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={mobileDrawer}
        onClose={() => dispatch(toggleMobileDrawer(false))}
        onOpen={() => dispatch(toggleMobileDrawer(true))}
        // open={menuDrawerAnchor}
        // onClose={toggleMenuDrawer}
        // onOpen={toggleMenuDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <DrawerHeader
          sx={{
            p: 1,
            color: (theme) => theme.palette.common.white,
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
        >
          <Stack direction="row" spacing={2} flexGrow={1}>
            <NextLink href="/" passHref>
              <Link underline="none" display="flex">
                <Image
                  src="/images/logo/logo-horizontal.webp"
                  alt="zahran logo"
                  width={80}
                  height={34}
                />
              </Link>
            </NextLink>
            <Box flexGrow={1}>
              <Typography
                textTransform="capitalize"
                variant="subtitle2"
                component="p"
                gutterBottom
              >
                {user
                  ? t("welcome", { name: user.firstName })
                  : t("welcomeToZ")}
              </Typography>
              {!user && (
                <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
                  <Button
                    variant="outlined"
                    color="inherit"
                    disableElevation
                    component="a"
                    size="small"
                    onClick={() => handleRedirectToAccount("/account/register")}
                  >
                    {t("signup")}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    component="a"
                    size="small"
                    onClick={() => handleRedirectToAccount("/account/login")}
                  >
                    {t("signin")}
                  </Button>
                </Box>
              )}
              {user && (
                <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
                  <Button
                    variant="outlined"
                    color="inherit"
                    disableElevation
                    component="a"
                    size="small"
                    onClick={() => handleRedirectToAccount("/account/orders")}
                  >
                    {t("orders")}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    component="a"
                    size="small"
                    onClick={() => handleRedirectToAccount("/dashboard/profile")}
                  >
                    {t("profile")}
                  </Button>
                </Box>
              )}
            </Box>
          </Stack>
          <IconButton
            // onClick={toggleMenuDrawer}
            sx={{ marginLeft: "auto" }}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <MobileMenu  />
      </SwipeableDrawer>
      <NextLink href="/" passHref>
        <Link display="flex">
          <Image
            src="/images/logo/logo-horizontal.webp"
            alt="zahran logo"
            width={100}
            height={34}
            priority
          />
        </Link>
      </NextLink>
      <LanguageChanger sx={{ display: { md: "none" } }} />
      <LocationTriggerStyle>
        <Button
          color="inherit"
          sx={{ padding: 0, maxWidth: "100%" }}
          startIcon={<AddLocationAltOutlinedIcon />}
          onClick={handleToggleAddressDialog}
        >
          <Typography
            sx={{ maxWidth: { md: 200 } }}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            textTransform="capitalize"
          >
            {location.country
              ? `${countryLocation} - ${cityLocation} - ${areaLocation}`
              : t("newAddress")}
          </Typography>
        </Button>
        <AddressDialog
          showAddressDialog={showAddressDialog}
          handleToggleAddressDialog={handleToggleAddressDialog}
          title={location.country ? t("updateAddress") : t("newAddress")}
          initialValues={location}
          type="location"
        />
      </LocationTriggerStyle>
    </BrandSectionStyle>
  );
};

export default BrandSection;
