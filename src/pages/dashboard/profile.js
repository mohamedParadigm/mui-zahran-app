// Internals
import { useEffect, useCallback } from "react";
// MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// Externals
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/features/user/userSlice";
import useTranslation from "next-translate/useTranslation";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
// Components
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import { withSessionSsr } from "../../lib/withSession";
import { toggleSubmitLoading } from "../../redux/features/global/globalSlice";

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
  } = useForm();

  const { t } = useTranslation("profile");

  const handleProfileSubmit = async (data) => {
    const currentUser = { ...user };
    const updatedData = { ...currentUser, ...data };

    dispatch(toggleSubmitLoading(true));
    try {
      const res = await fetch(
        `${process.env.PUBLIC_URL}/api/users/update?userID=${user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedData),
        }
      );

      const jsonRes = await res.json();

      if (res.ok) {
        dispatch(toggleSubmitLoading(false));
        dispatch(createUser(jsonRes));
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

  const setDefaultValues = useCallback(() => {
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("mobile", user.mobile);
    setValue("email", user.email);
  }, [user, setValue]);

  useEffect(() => {
    if (user) {
      setDefaultValues();
    }

    user && dispatch(createUser(user));
  }, [dispatch, user, setDefaultValues]);

  return (
    <DashboardLayout
      user={user}
      title={t("profile")}
      elevationOption={false}
      activeTab={0}
      BottomNavigationValue={4}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Box>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          {t("profile")}
        </Typography>
        <Typography variant="body1" mb={2}>
          {t("desc")}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(handleProfileSubmit)} autoComplete="off">
        <Grid container rowSpacing={2} columnSpacing={3}>
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
                      ? errors.firstName.type === "required" && t("required")
                      : ""
                  }
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
                      ? errors.lastName.type === "required" && t("required")
                      : ""
                  }
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
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={!isDirty && !isValid}
                  onClick={() => setDefaultValues()}
                >
                  {t("cancel")}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  disabled={!isDirty && !isValid}
                >
                  {t("saveChanges")}
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

export const getServerSideProps = withSessionSsr(async ({ req, locale }) => {
  const user = req.session.user || null;
  if (!user) {
    return {
      redirect: {
        destination: `${locale}/account/login?redirect=dashboard/profile`,
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
});
