// Internals
import { useState } from "react";
// MUI
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// Components
import DashboardLayout from "../../modules/layout/DashboardLayout";

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    console.log("password submitted");
  };

  return (
    <DashboardLayout
      title="Change Password"
      elevationOption={false}
      activeTab={1}
    >
      <Box>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          change password
        </Typography>
        <Typography variant="body1" mb={2}>
          Update your password.
        </Typography>
      </Box>
      <form onSubmit={handlePasswordSubmit}>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12}>
            <TextField
              id="currentPassword"
              label="Current Password:"
              variant="standard"
              fullWidth
              type={showCurrentPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowCurrentPassword((prev) => !prev)}
                    onMouseDown={() => setShowCurrentPassword((prev) => !prev)}
                  >
                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="newPassword"
              label="New Password:"
              variant="standard"
              fullWidth
              type={showNewPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    onMouseDown={() => setShowNewPassword((prev) => !prev)}
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmPassword"
              label="Confirm Password:"
              variant="standard"
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    onMouseDown={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
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

export default ChangePassword;
