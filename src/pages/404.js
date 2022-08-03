// Internals
import Image from "next/image";
import NextLink from "next/link";
// MUI
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Components
import Layout from "../modules/layout/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="404">
      <Container sx={{ py: 4 }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          textAlign="center"
        >
          <Image
            src="/images/404.svg"
            alt="page not found"
            width={150}
            height={150}
          />
          <Typography component="h1" variant="h4" color="primary">
            Sorry, Page Not Found!
          </Typography>
          <NextLink href="/" passHref>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "fit-content" }}
            >
              back to home
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
