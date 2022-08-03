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
// Components
import Layout from "../modules/layout/Layout";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    router.push(redirect ? `/${redirect}` : "/dashboard/profile");
  };

  return (
    <Layout title="Register" elevationOption={false}>
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
            create an account
          </Typography>
          <Typography textAlign="center" variant="subtitle2" mb={3}>
            Already have an account?{" "}
            <NextLink
              href={redirect ? `/login?redirect=${redirect}` : "/login"}
              passHref
            >
              <Link underline="none" variant="button">
                Sign in
              </Link>
            </NextLink>
          </Typography>
          <form onSubmit={handleRegisterSubmit}>
            <List>
              <ListItem>
                <TextField
                  id="firstName"
                  label="First Name:"
                  variant="standard"
                  fullWidth
                />
              </ListItem>
              <ListItem>
                <TextField
                  id="lastName"
                  label="Last Name:"
                  variant="standard"
                  fullWidth
                />
              </ListItem>
              <ListItem>
                <TextField
                  id="mobile"
                  label="Mobile:"
                  variant="standard"
                  fullWidth
                />
              </ListItem>
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
              <ListItem>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}
                >
                  Sign up
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
