// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// Components
import Layout from "../modules/layout/Layout";
import { toggleSubmitLoading } from "../redux/features/global/globalSlice";
import { createUser } from "../redux/features/user/userSlice";
import { withSessionSsr } from "../lib/withSession";

const Wrapper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Register = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation("register");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterSubmit = async (data) => {
    dispatch(toggleSubmitLoading(true));
    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/api/users/register`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const jsonRes = await res.json();

      if (res.ok) {
        dispatch(toggleSubmitLoading(false));
        dispatch(createUser(jsonRes));
        router.replace(redirect ? `/${redirect}` : "/dashboard/profile");
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

  return (
    <Layout
      title="Register"
      elevationOption={false}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Container sx={{ py: 3 }}>
        <Wrapper sx={{ p: 3 }} elevation={4}>
          <Typography
            component="h1"
            variant="h5"
            fontWeight={700}
            gutterBottom
            textAlign="center"
            textTransform="capitalize"
          >
            {t("createAccount")}
          </Typography>
          <Typography textAlign="center" variant="subtitle2" mb={1}>
            {t("haveAccount")}{" "}
            <NextLink
              href={redirect ? `/login?redirect=${redirect}` : "/login"}
              passHref
            >
              <Link underline="none" variant="button">
                {t("signin")}
              </Link>
            </NextLink>
          </Typography>
          <form onSubmit={handleSubmit(handleRegisterSubmit)}>
            <List>
              <ListItem>
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
                      {...field}
                    />
                  )}
                />
              </ListItem>
              <ListItem>
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
              </ListItem>
              <ListItem>
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
              </ListItem>
              <ListItem>
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
              </ListItem>
              <ListItem>
                <Controller
                  name="password"
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
                      id="password"
                      label={t("pass")}
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ),
                      }}
                      error={Boolean(errors.password)}
                      helperText={
                        errors.password
                          ? errors.password.type === "minLength"
                            ? t("passLength")
                            : t("required")
                          : ""
                      }
                      {...field}
                    />
                  )}
                />
              </ListItem>
              <ListItem>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}
                >
                  {t("signUp")}
                </Button>
              </ListItem>
            </List>
          </form>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Register;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const user = req.session.user;
  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
});
