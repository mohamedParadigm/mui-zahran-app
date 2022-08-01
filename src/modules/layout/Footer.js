// Internals
import NextLink from "next/link";
// MUI
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = ({ layoutType }) => {
  if (layoutType === "main") {
    return <></>;
  } else {
    return (
      <Paper square sx={{ py: "4px" }} variant="outlined">
        <Container>
          <Grid
            container
            spacing={0}
            textAlign={{ xs: "center", sm: "start" }}
            direction={{ xs: "column", sm: "row" }}
          >
            <Grid item xs>
              <Typography variant="caption">
                &copy; 2022 All rights reserved to{" "}
                <Link
                  underline="none"
                  color="primary"
                  href="https://psdigital.me/"
                  rel="noopener"
                  target="_blank"
                >
                  PSdigital
                </Link>
              </Typography>
            </Grid>
            <Grid item xs sm="auto">
              <Typography variant="caption">
                <NextLink href="/terms" passHref>
                  <Link underline="none" color="inherit">
                    Terms &amp; Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
  }
};

export default Footer;
