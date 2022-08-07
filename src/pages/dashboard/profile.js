// MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// Components
import DashboardLayout from "../../modules/dashboard/DashboardLayout";

const Profile = () => {
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile");
  };

  return (
    <DashboardLayout
      title="Profile"
      elevationOption={false}
      activeTab={0}
      BottomNavigationValue={4}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={{bottom: {xs: 70, md: 16}}}
    >
      <Box>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          Profile
        </Typography>
        <Typography variant="body1" mb={2}>
          Update your personal informaiton.
        </Typography>
      </Box>
      <form onSubmit={handleProfileSubmit} autoComplete="off">
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First Name:"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              label="Last Name:"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="mobile"
              label="Mobile:"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email:"
              variant="standard"
              fullWidth
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" fullWidth>
                  cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                >
                  save changes
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </DashboardLayout>
  );
};

export default Profile;
