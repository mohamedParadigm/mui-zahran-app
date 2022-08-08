// Internals
import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// Icons
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Externals
import useTranslation from "next-translate/useTranslation";
// Components
import AddressDialog from "../../../../components/AddressDialog";
import LanguageChanger from "../../../../components/LanguageChanger";

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

const addressInitialDetails = {
  country: "",
  city: "",
  area: "",
  detailedAddress: "",
};

const BrandSection = () => {
  const { t } = useTranslation("common");
  const [menuDrawerAnchor, setMenuDrawerAnchor] = useState(false);

  const toggleMenuDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuDrawerAnchor((prev) => !prev);
  };

  const [showAddressDialog, setShowAddressDialog] = useState(false);

  const handleToggleAddressDialog = () => setShowAddressDialog((prev) => !prev);

  return (
    <BrandSectionStyle>
      <IconButton
        color="inherit"
        aria-label="open menu drawer"
        onClick={toggleMenuDrawer}
        sx={{ display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={menuDrawerAnchor}
        onClose={toggleMenuDrawer}
        onOpen={toggleMenuDrawer}
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
                  width={100}
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
                Welcome, To Zahran
              </Typography>
              <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
                <NextLink href="/register" passHref>
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    component="a"
                    size="small"
                  >
                    sign up
                  </Button>
                </NextLink>
                <NextLink href="/login" passHref>
                  <Button
                    variant="outlined"
                    color="inherit"
                    disableElevation
                    component="a"
                    size="small"
                  >
                    sign in
                  </Button>
                </NextLink>
              </Box>
            </Box>
          </Stack>
          <IconButton
            onClick={toggleMenuDrawer}
            sx={{ marginLeft: "auto" }}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
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
          sx={{ padding: 0 }}
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
            {t("newAddress")}
          </Typography>
        </Button>
        <AddressDialog
          showAddressDialog={showAddressDialog}
          handleToggleAddressDialog={handleToggleAddressDialog}
          title={t("newAddress")}
          initialValues={addressInitialDetails}
        />
      </LocationTriggerStyle>
    </BrandSectionStyle>
  );
};

export default BrandSection;
