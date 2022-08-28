// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
// MUI
import { grey } from "@mui/material/colors";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Switch from "@mui/material/Switch";
// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Externals
import useTranslation from "next-translate/useTranslation";
// Components
import Layout from "../modules/layout/Layout";
import RenameOrderDialog from "../components/RenameOrderDialog";

const activeStep = 2;

const initialSteps = [
  {
    label_en: "Recieved",
    label_ar: "تم استلامه",
    description_en: "We have recieved your order.",
    description_ar: "تم استلام طلبك",
    image: "/images/track-order/Order-recieved.svg",
  },
  {
    label_en: "Approved",
    label_ar: "وافق عليه",
    description_en: "Your order has been confirmed.",
    description_ar: "تمت الموافقة على الطلب",
    image: "/images/track-order/Approved.svg",
  },
  {
    label_en: "Paused",
    label_ar: "متوقف",
    description_en: "Your order has been Paused.",
    description_ar: "تم ايقاف الطلب",
    image: "/images/track-order/Order-cancel.svg",
  },
  {
    label_en: "On The Way",
    label_ar: "في الطريق",
    description_en: "Your order on its way",
    description_ar: "الطلب في الطريق اليك",
    image: "/images/track-order/Track-order.svg",
  },
  {
    label_en: "Delivered",
    label_ar: "تم ايصاله",
    description_en: "your order delivered successfully",
    description_ar: "تم توصيل الطلب بنجاح",
    image: "/images/track-order/Package-delivered.svg",
  },
];

const StepLabelStyle = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-iconContainer .MuiSvgIcon-root": {
    borderRadius: "50%",
  },
  "& .MuiStepLabel-label": {
    display: "flex",
    gap: theme.spacing(1),
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },
}));

const renameOrderInitialValue = {
  orderName: "",
};

const TrackOrder = () => {
  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation("track-order");

  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [showRenameOrderDialog, setShowRenameOrderDialog] = useState(false);

  const handleToggleRenamingDialog = () =>
    setShowRenameOrderDialog((prev) => !prev);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const steps = isPaused
    ? initialSteps
    : initialSteps.filter((el) => el.label !== "Paused");

  const [findSimilar, setFindSimilar] = useState(false);

  return (
    <Layout
      title={t("title")}
      layoutType="alt"
      showBottomNav={false}
      scrollOffset={{ bottom: 16 }}
    >
      <Box sx={{ backgroundColor: grey[200] }} py={4}>
        <Container>
          <Box textAlign="center" mb={4}>
            <Typography component="h1" variant="h4" fontWeight={400} mb={3}>
              <span style={{ fontWeight: 700 }}>{t("thank")}</span> <br />{" "}
              {t("desc")} <br /> {t("succ")}
            </Typography>
            <Typography>
              {t("orderConNum")}{" "}
              <span style={{ color: "var(--main-color)" }}>123456</span>
            </Typography>
            <Typography>{t("emailCon")}</Typography>
          </Box>
          <Paper sx={{ borderRadius: 2, p: 2, mb: 4 }} elevation={0}>
            <Grid container spacing={1}>
              <Grid item xs>
                <Box>
                  <Typography component="h2" variant="h6" mb={1}>
                    {t("estimateTime")}
                  </Typography>
                  <Typography>{t("days", { count: 4 })}</Typography>
                </Box>
              </Grid>
              <Grid item xs="auto">
                <Button
                  color={showOrderDetails ? "primary" : "secondary"}
                  sx={{ fontWeight: 700, fontSize: "1rem", p: 0, mb: 1 }}
                  endIcon={
                    <ExpandMoreIcon
                      sx={{
                        transition: "0.3s ease-in-out",
                        transform: showOrderDetails ? "rotate(180deg)" : "none",
                      }}
                    />
                  }
                  onClick={() => setShowOrderDetails((prev) => !prev)}
                >
                  {t("orderNum")}
                </Button>
                <Typography textAlign="center">123456</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Collapse in={showOrderDetails}>
            <Paper sx={{ p: 2, mb: 4 }}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography component="h3" variant="h6" mb={0.5}>
                    {t("deliverTo")}
                  </Typography>
                  <Typography variant="body2">{t("userName")}</Typography>
                  <Typography variant="body2">
                    18, Mahat El Ramal, Alexandria, Egypt
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography component="h3" variant="h6" mb={0.5}>
                    {t("paymentMethod")}
                  </Typography>
                  <Typography variant="body2">Cash on Delivery</Typography>
                  <Typography component="h3" variant="h6" mb={0.5}>
                    {t("orderType")}
                  </Typography>
                  <Typography variant="body2">Delivery</Typography>
                </Grid>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Typography component="h3" variant="h6" mb={0.5} px={1}>
                    {t("orderSum")}
                  </Typography>
                  <List>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            2 x lorem ipsum
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <div style={{ border: "1px dashed #000" }}></div>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            12 {t("egp")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            2 x lorem ipsum
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <div style={{ border: "1px dashed #000" }}></div>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            12 {t("egp")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            2 x lorem ipsum
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <div style={{ border: "1px dashed #000" }}></div>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="caption">
                            12 {t("egp")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider sx={{ my: 1 }} component="li" />
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body2">
                            {t("grocDel")}
                          </Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body2" fontWeight={600}>
                            5.00 {t("egp")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body2">{t("hosDel")}</Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body2" fontWeight={600}>
                            5.00 {t("egp")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body2">Vat</Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body2" fontWeight={600}>
                            5.00 {t("egp")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem sx={{ p: 0 }}>
                      <Grid container spacing={1} px={1} alignItems="center">
                        <Grid item xs>
                          <Typography variant="body1" fontWeight={700}>
                            {t("total")}{" "}
                            <span style={{ opacity: 0.7, fontSize: "0.75rem" }}>
                              ({t("incVat")})
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item xs="auto">
                          <Typography variant="body1" fontWeight={700}>
                            20.00 {t("egp")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Paper>
          </Collapse>
          <Box mb={4}>
            <Grid container spacing={2} alignItems="center" mb={2}>
              <Grid item xs="auto">
                <Switch
                  checked={isPaused}
                  onChange={() => setIsPaused((prev) => !prev)}
                  inputProps={{ "aria-label": "switch paused step" }}
                />
              </Grid>
              <Grid item xs>
                <Typography>
                  {isPaused ? "With Paused Step" : "Normal Steps"}
                </Typography>
              </Grid>
            </Grid>
            <Stepper
              activeStep={activeStep}
              orientation={matches ? "horizontal" : "vertical"}
              alternativeLabel={matches}
            >
              {steps?.map((el, i) => (
                <Step
                  key={i}
                  sx={{
                    "& .MuiStepLabel-iconContainer .MuiSvgIcon-root": {
                      animation:
                        activeStep === i
                          ? "pulseanime 2s infinite ease-in-out"
                          : "none",
                    },
                  }}
                >
                  <StepLabelStyle>
                    <Image
                      src={el.image}
                      alt={el[`label_${locale}`]}
                      width={35}
                      height={35}
                    />
                    <Box>
                      <Typography
                        component="span"
                        variant="body2"
                        fontWeight={600}
                        textTransform="capitalize"
                        display="block"
                      >
                        {el[`label_${locale}`]}
                      </Typography>
                      <Typography variant="caption">
                        {el[`description_${locale}`]}
                      </Typography>
                    </Box>
                  </StepLabelStyle>
                </Step>
              ))}
            </Stepper>
          </Box>
          {!isPaused && (
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs="auto">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleToggleRenamingDialog}
                >
                  {t("addToFav")}
                </Button>
                <RenameOrderDialog
                  showRenameOrderDialog={showRenameOrderDialog}
                  handleToggleRenamingDialog={handleToggleRenamingDialog}
                  title="rename order"
                  initialValues={renameOrderInitialValue}
                />
              </Grid>
              <Grid item xs="auto">
                <NextLink href="/" passHref>
                  <Button variant="contained" color="primary">
                    {t("backHome")}
                  </Button>
                </NextLink>
              </Grid>
            </Grid>
          )}
          {isPaused && (
            <>
              <Paper sx={{ borderRadius: 2, mb: 3 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  color="primary"
                  p={2}
                  fontWeight={500}
                >
                  {t("notAvail")}
                </Typography>
                <Box>
                  <Typography component="h3" variant="h5" px={2}>
                    {t("household")}
                  </Typography>
                  <List>
                    <ListItem>
                      <Grid container spacing={2}>
                        <Grid item xs="auto">
                          <Image
                            src="/images/products/p-1.webp"
                            alt="..."
                            width={120}
                            height={120}
                          />
                        </Grid>
                        <Grid item xs={12} sm>
                          <Typography component="h4" variant="h6">
                            Call It Spring Mayetiola
                          </Typography>
                          <Typography variant="body2" component="span" mr={1.5}>
                            514.59 {t("egp")}
                          </Typography>
                          <Typography variant="body2" component="del">
                            1009 {t("egp")}
                          </Typography>
                          <Typography
                            variant="body2"
                            textTransform="capitalize"
                            color="primary"
                            mb={1}
                          >
                            {t("not_avail")}
                          </Typography>
                          <Grid container spacing={1}>
                            <Grid item xs="auto">
                              <Button variant="outlined" color="secondary">
                                {t("cancel")}
                              </Button>
                            </Grid>
                            <Grid item xs="auto">
                              <Button
                                color="primary"
                                variant="outlined"
                                endIcon={
                                  <ExpandMoreIcon
                                    sx={{
                                      transition: "0.3s ease-in-out",
                                      transform: findSimilar
                                        ? "rotate(180deg)"
                                        : "none",
                                    }}
                                  />
                                }
                                onClick={() => setFindSimilar((prev) => !prev)}
                              >
                                {t("findSim")}
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                    {/* <Divider component="li" /> */}
                  </List>
                </Box>
              </Paper>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" color="secondary" fullWidth>
                    place order
                  </Button>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button
                    color="secondary"
                    sx={{ textDecoration: "underline" }}
                  >
                    {t("placeOrder")}
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default TrackOrder;
