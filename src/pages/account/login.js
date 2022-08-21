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
import Grid from "@mui/material/Grid";
// Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { toggleSubmitLoading } from "../../redux/features/global/globalSlice";
// Components
import Layout from "../../modules/layout/Layout";
import { withSessionSsr } from "../../lib/withSession";

const Wrapper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const FaceBookBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: "#3b5998",
  borderColor: "theme.palette.common.white",
  "&:hover": {
    color: "#3b5998",
    backgrounColor: "transparent",
  },
}));

const Login = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation("login");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = async (data) => {
    dispatch(toggleSubmitLoading(true));
    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/api/users/login`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const jsonRes = await res.json();

      if (res.ok) {
        dispatch(toggleSubmitLoading(false));
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
      title="Login"
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
          >
            {t("login")}
          </Typography>
          <Typography textAlign="center" variant="subtitle2" mb={3}>
            {t("noAccount")}{" "}
            <NextLink
              href={redirect ? `/account/register?redirect=${redirect}` : "/account/register"}
              passHref
            >
              <Link underline="none" variant="button">
                {t("signUp")}
              </Link>
            </NextLink>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FaceBookBtn
                variant="contained"
                color="inherit"
                startIcon={<FacebookIcon />}
                fullWidth
              >
                {t("fbLogin")}
              </FaceBookBtn>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<GoogleIcon />}
                fullWidth
              >
                {t("googleLogin")}
              </Button>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <List>
              <ListItem sx={{ px: 0 }}>
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
              <ListItem sx={{ px: 0 }}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
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
                          ? errors.password.type === "required" && t("required")
                          : ""
                      }
                      {...field}
                    />
                  )}
                />
              </ListItem>
              <ListItem sx={{ justifyContent: "center", pt: 0 }}>
                <NextLink href="/account/forgot" passHref>
                  <Link
                    underline="none"
                    mt={0}
                    textTransform="capitalize"
                    variant="subtitle2"
                  >
                    {t("forgot")}
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}
                >
                  {t("signin")}
                </Button>
              </ListItem>
            </List>
          </form>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Login;

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

