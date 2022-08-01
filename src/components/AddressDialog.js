// Internals
import { useState, forwardRef } from "react";
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
// Icons
import CloseIcon from "@mui/icons-material/Close";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddressDialog = (props) => {
  const {
    showAddressDialog,
    handleToggleAddressDialog,
    title,
    initialValues,
  } = props;

  const [addressDetails, setAddressDetails] = useState(initialValues);

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
        <form onSubmit={handleAddressSubmit}>
          <List>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel id="selectCountryLabel">Country</InputLabel>
                <Select
                  labelId="selectCountryLabel"
                  id="selectCountry"
                  name="country"
                  value={addressDetails.country}
                  label="Country"
                  onChange={handleAddressChange}
                  color="secondary"
                >
                  <MenuItem value="egypt">Egypt</MenuItem>
                  <MenuItem value="saudi">Saudi Arabia</MenuItem>
                  <MenuItem value="emirates">Emirates</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel id="selectCityLabel">City</InputLabel>
                <Select
                  labelId="selectCityLabel"
                  id="selectCity"
                  name="city"
                  value={addressDetails.city}
                  label="City"
                  onChange={handleAddressChange}
                  color="secondary"
                >
                  <MenuItem value="cairo">Cairo</MenuItem>
                  <MenuItem value="alex">Alexandria</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel id="selectAreaLabel">Area</InputLabel>
                <Select
                  labelId="selectAreaLabel"
                  id="selectArea"
                  name="area"
                  value={addressDetails.area}
                  label="Area"
                  onChange={handleAddressChange}
                  color="secondary"
                >
                  <MenuItem value="smouha">Smouha</MenuItem>
                  <MenuItem value="mahat-elraml">Mahat El Raml</MenuItem>
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
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    add address
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
