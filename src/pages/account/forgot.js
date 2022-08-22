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
// Externals
import useTranslation from "next-translate/useTranslation";
import { useForm, Controller } from "react-hook-form";
// Components
import Layout from "../../modules/layout/Layout";
import { withSessionSsr } from "../../lib/withSession";

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation("forgot");

  const handleForgotSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout
      title={t("title")}
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
            {t("back")}
          </Button>
          <Typography
            component="h1"
            variant="h5"
            fontWeight={700}
            gutterBottom
            textAlign="center"
          >
            {t("title")}
          </Typography>
          <Typography textAlign="center" variant="subtitle2" mb={3}>
            {t("desc")}
          </Typography>
          <form onSubmit={handleSubmit(handleForgotSubmit)}>
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}
                >
                  {t("submit")}
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
