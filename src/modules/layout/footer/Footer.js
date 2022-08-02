// Internals
import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
// MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// Components
import SimpleFooter from "./SimpleFooter";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: "transparent",
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    minHeight: "auto",
  },
  "& .MuiAccordionSummary-content": {
    marginTop: "4px",
    marginBottom: "4px",
  },
  [theme.breakpoints.up("md")]: {
    "& .MuiCollapse-root": {
      height: "auto !important",
      visibility: "visible !important",
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      display: "none",
    },
    "& .MuiAccordionSummary-root": {
      pointerEvents: "none",
    },
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={props.icon} {...props} />
))({
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "inherit",
  },
});

const Footer = ({ layoutType, otherStyle }) => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  if (layoutType === "main") {
    return (
      <Box
        sx={{
          color: "#fff",
          backgroundColor: (theme) => theme.palette.primary.main,
          ...otherStyle
        }}
      >
        <Container sx={{ py: 3 }}>
          <Grid container>
            <Grid item md="auto" display={{ xs: "none", md: "flex" }}>
              <Image
                src="/images/logo/vertical-logo.webp"
                alt="zahran vertical logo"
                width={100}
                height={100}
                priority
              />
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Accordion
                expanded={expanded === "footerLinks1"}
                onChange={handleChange("footerLinks1")}
              >
                <AccordionSummary
                  aria-controls="footerLinks1d-content"
                  id="footerLinks1d-header"
                  icon={<ExpandMoreIcon />}
                >
                  <Typography component="h3" variant="h6">
                    quick links
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <NextLink href="/faqs" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          FAQs
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/recipes" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Recipes
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/contact" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Contact us
                        </Link>
                      </NextLink>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Accordion
                expanded={expanded === "footerLinks2"}
                onChange={handleChange("footerLinks2")}
              >
                <AccordionSummary
                  aria-controls="footerLinks1d-content"
                  id="footerLinks1d-header"
                  icon={<ExpandMoreIcon />}
                >
                  <Typography component="h3" variant="h6">
                    about
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <NextLink href="/faqs" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          About Zahran Market
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Our Branches
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Virtual Store
                        </Link>
                      </NextLink>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Accordion
                expanded={expanded === "footerLinks3"}
                onChange={handleChange("footerLinks3")}
              >
                <AccordionSummary
                  aria-controls="footerLinks1d-content"
                  id="footerLinks1d-header"
                  icon={<ExpandMoreIcon />}
                >
                  <Typography component="h3" variant="h6">
                    quick links
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <NextLink href="/faqs" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          FAQs
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/recipes" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Recipes
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/contact" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Contact us
                        </Link>
                      </NextLink>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Accordion
                expanded={expanded === "footerLinks4"}
                onChange={handleChange("footerLinks4")}
              >
                <AccordionSummary
                  aria-controls="footerLinks1d-content"
                  id="footerLinks1d-header"
                  icon={<ExpandMoreIcon />}
                >
                  <Typography component="h3" variant="h6">
                    quick links
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <NextLink href="/faqs" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          FAQs
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/recipes" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Recipes
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/contact" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Contact us
                        </Link>
                      </NextLink>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Accordion
                expanded={expanded === "footerLinks5"}
                onChange={handleChange("footerLinks5")}
              >
                <AccordionSummary
                  aria-controls="footerLinks1d-content"
                  id="footerLinks1d-header"
                  icon={<ExpandMoreIcon />}
                >
                  <Typography component="h3" variant="h6">
                    quick links
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <NextLink href="/faqs" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          FAQs
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/recipes" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Recipes
                        </Link>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href="/contact" passHref>
                        <Link
                          underline="none"
                          color="inherit"
                          fontSize="0.75rem"
                        >
                          Contact us
                        </Link>
                      </NextLink>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md>
              <Stack direction={{ xs: "row", md: "column" }}>
                <div style={{ paddingLeft: "1rem" }}>
                  <Typography component="h3" variant="h6">
                    Hot Line
                  </Typography>
                  <Button
                    color="inherit"
                    sx={{ py: 1, px: 0 }}
                    href="tel:19866"
                    startIcon={<PhoneInTalkOutlinedIcon />}
                  >
                    19866
                  </Button>
                </div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Typography component="h3" variant="h6">
                    Contact Us
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    component="ul"
                  >
                    <li>
                      <IconButton
                        aria-label="facebook"
                        color="inherit"
                        sx={{
                          transition: "0.3s ease-in-out",
                          "&:hover": {
                            color: "#fff",
                            backgroundColor: "#1877f2",
                          },
                        }}
                        href="https://www.facebook.com/ZahranMarketEG/"
                        target="_blank"
                        rel="noopener"
                        size="small"
                      >
                        <FacebookIcon />
                      </IconButton>
                    </li>
                    <li>
                      <IconButton
                        aria-label="Twitter"
                        color="inherit"
                        sx={{
                          transition: "0.3s ease-in-out",
                          "&:hover": {
                            color: "#fff",
                            backgroundColor: "#1da1f2",
                          },
                        }}
                        href="https://twitter.com/intent/tweet"
                        target="_blank"
                        rel="noopener"
                        size="small"
                      >
                        <TwitterIcon />
                      </IconButton>
                    </li>
                    <li>
                      <IconButton
                        aria-label="Instagram"
                        color="inherit"
                        sx={{
                          transition: "0.3s ease-in-out",
                          "&:hover": {
                            color: "#fff",
                            backgroundColor: "#f77737",
                          },
                        }}
                        href="http://www.instagram.com"
                        target="_blank"
                        rel="noopener"
                        size="small"
                      >
                        <InstagramIcon />
                      </IconButton>
                    </li>
                  </Stack>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <SimpleFooter />
      </Box>
    );
  } else {
    return <SimpleFooter />;
  }
};

export default Footer;
