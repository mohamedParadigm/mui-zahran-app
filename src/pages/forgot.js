// Internals
import { useRouter } from "next/router";
// MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
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

const ForgotPassword = () => {
  const router = useRouter();

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    console.log("yes");
  };

  return (
    <Layout
      title="Forgot Password"
      elevationOption={false}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Container sx={{ py: 3 }}>
        <Wrapper sx={{ p: 3 }} elevation={4}>
          <Button
            color="secondary"
            startIcon={<ChevronLeftIcon />}
            onClick={() => router.push("/login")}
          >
            back
          </Button>
          <Typography
            component="h1"
            variant="h5"
            fontWeight={700}
            gutterBottom
            textAlign="center"
          >
            Forgot Password
          </Typography>
          <Typography textAlign="center" variant="subtitle2" mb={3}>
            Enter your email address and we&apos;ll send you a link to reset
            your password
          </Typography>
          <form onSubmit={handleForgotSubmit}>
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
            </List>
            <List>
              <ListItem>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}
                >
                  submit email
                </Button>
              </ListItem>
            </List>
          </form>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default ForgotPassword;
