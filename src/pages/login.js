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
// Components
import Layout from "../modules/layout/Layout";

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

  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    router.push(redirect ? `/${redirect}` : "/dashboard/profile");
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
            Login
          </Typography>
          <Typography textAlign="center" variant="subtitle2" mb={3}>
            Don&apos;t have an account?{" "}
            <NextLink
              href={redirect ? `/register?redirect=${redirect}` : "/register"}
              passHref
            >
              <Link underline="none" variant="button">
                Sign Up
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
                login with facebook
              </FaceBookBtn>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<GoogleIcon />}
                fullWidth
              >
                Google
              </Button>
            </Grid>
          </Grid>
          <form onSubmit={handleLoginSubmit}>
            <List>
              <ListItem>
                <TextField
                  id="email"
                  label="Email:"
                  variant="standard"
                  fullWidth
                  inputProps={{ type: "email" }}
                />
              </ListItem>
              <ListItem>
                <TextField
                  id="password"
                  label="Password:"
                  variant="standard"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                        onMouseDown={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />
              </ListItem>
              <ListItem sx={{ justifyContent: "center", pt: 0 }}>
                <NextLink href="/forgot" passHref>
                  <Link
                    underline="none"
                    mt={0}
                    textTransform="capitalize"
                    variant="subtitle2"
                  >
                    forgot password ?
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
                  Sign in
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
