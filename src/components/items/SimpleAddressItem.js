// Internals
import { useRouter } from "next/router";
// MUI
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Externals
import useTranslation from "next-translate/useTranslation";
// Components
import MuiTooltip from "../shared/MuiTooltip";
import CustomRadio from "../shared/CustomRadio";
// Data
import data from "../../utils/data";

const SimpleAddressItem = ({ item, usedId, handleChangeinUsedId }) => {
  const { id, country, city, area, detailedAddress, userPhone } =
    item;

  const { locale } = useRouter();
  const { t } = useTranslation("shipping");

  const countryLocation =
    country &&
    data.countries.find((el) => el.uniqueName === country)[`name_${locale}`];
  const cityLocation =
    city && data.cities.find((el) => el.uniqueName === city)[`name_${locale}`];
  const areaLocation =
    area && data.areas.find((el) => el.uniqueName === area)[`name_${locale}`];

  const handleDefaultAddressChange = () => {
    
  }

  return (
    <Paper sx={{ p: 1, flexGrow: 1 }} elevation={6}>
      <Grid container spacing={1}>
        <Grid item xs="auto" alignSelf="center">
          <MuiTooltip
            title={t("selectAddress")}
            arrow
            placement="top"
          >
            <div>
              <CustomRadio
                checked={usedId === id}
                name="userAddresses"
                onChange={() => handleChangeinUsedId(id)}
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
      </Grid>
    </Paper>
  );
};

export default SimpleAddressItem;
