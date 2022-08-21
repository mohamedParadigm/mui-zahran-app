// Internals
import { useEffect, useState } from "react";
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
// Externals
import { toast } from "react-toastify";
import useTranslation from "next-translate/useTranslation";
import { useForm, Controller } from "react-hook-form";
import bcrypt from "bcryptjs";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/features/user/userSlice";
// Components
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import { withSessionSsr } from "../../lib/withSession";
import { toggleSubmitLoading } from "../../redux/features/global/globalSlice";

const ChangePassword = ({ user }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const { t } = useTranslation("password");

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const dispatch = useDispatch();

  const handlePasswordSubmit = async (data) => {
    dispatch(toggleSubmitLoading(true));
    try {
      const res = await fetch(
        `${process.env.PUBLIC_URL}/api/users/update?userID=${user.id}`,
        {
          body: JSON.stringify({
            password: data.newPassword,
            currentPassword: data.currentPassword,
          }),
          method: "PUT",
        }
      );

      const jsonRes = await res.json();

      if (res.ok) {
        dispatch(toggleSubmitLoading(false));
        dispatch(createUser(jsonRes));
        setValue("currentPassword", "");
        setValue("newPassword", "");
        setValue("confirmNewPassword", "");
        toast.success(t("updateSuccess"), {
          autoClose: 2000,
          position: "top-center",
        });
      } else {
        dispatch(toggleSubmitLoading(false));
        toast.error(jsonRes.message, {
          autoClose: 2000,
          position: "top-center",
        });
      }
    } catch (err) {
      dispatch(toggleSubmitLoading(false));
      toast.error(t("connectionFail"), {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    user && dispatch(createUser(user));
  }, [dispatch, user]);

  return (
    <DashboardLayout
      user={user}
      title={t("title")}
      elevationOption={false}
      activeTab={1}
      BottomNavigationValue={4}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Box>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          {t("title")}
        </Typography>
        <Typography variant="body1" mb={2}>
          {t("desc")}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(handlePasswordSubmit)}>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12}>
            <Controller
              name="currentPassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
                // validate: (value) => bcrypt.compareSync(value, user.hash),
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  id="currentPassword"
                  label={t("current")}
                  type={showCurrentPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowCurrentPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showCurrentPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    ),
                  }}
                  error={Boolean(errors.currentPassword)}
                  helperText={
                    errors.currentPassword
                      ? errors.currentPassword.type === "minLength"
                        ? t("passLength")
                        : t("required")
                      : ""
                  }
                  // helperText={
                  //   errors.currentPassword
                  //     ? errors.currentPassword.type === "validate"
                  //       ? t("wrongPass")
                  //       : errors.currentPassword.type === "minLength"
                  //       ? t("passLength")
                  //       : t("required")
                  //     : ""
                  // }
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  id="newPassword"
                  label={t("new")}
                  type={showNewPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  error={Boolean(errors.newPassword)}
                  helperText={
                    errors.newPassword
                      ? errors.newPassword.type === "minLength"
                        ? t("passLength")
                        : t("required")
                      : ""
                  }
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="confirmNewPassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                validate: (value) => value === getValues("newPassword"),
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  id="confirmNewPassword"
                  label={t("confirm")}
                  type={showConfirmNewPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setShowConfirmNewPassword((prev) => !prev)
                        }
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showConfirmNewPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    ),
                  }}
                  error={Boolean(errors.confirmNewPassword)}
                  helperText={
                    errors.confirmNewPassword
                      ? errors.confirmNewPassword.type === "validate"
                        ? t("notEqual")
                        : t("required")
                      : ""
                  }
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" color="primary">
              {t("save")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </DashboardLayout>
  );
};

export default ChangePassword;

export const getServerSideProps = withSessionSsr(async ({ req, locale }) => {
  const user = req.session.user;
  if (!user) {
    return {
      redirect: {
        destination: `${locale}/account/login?redirect=dashboard/password`,
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
});
