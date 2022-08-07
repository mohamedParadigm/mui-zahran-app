// Internals
import { useState } from "react";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
// Icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CircleIcon from "@mui/icons-material/Circle";
// Components
import Layout from "../../modules/layout/Layout";
import SocialShare from "../../components/SocialShare";

const CardWithOverLay = styled(CardActionArea)({
  position: "relative",
  "&:after": {
    content: "''",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

const CardInfoStyle = styled("div")({
  position: "absolute",
  textAlign: "center",
  color: "#fff",
  textTransform: "capitalize",
  zIndex: 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const RecipeDetails = () => {
  const [openSocialShare, setOpenSocialShare] = useState(null);

  const handleOpenShareMenu = (e) => setOpenSocialShare(e.currentTarget);

  const handleCloseShareMenu = () => setOpenSocialShare(null);

  return (
    <Layout
      title="Recipe Details"
      footerOtherStyle={{ marginBottom: { xs: "58px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 120, md: 16 } }}
    >
      <Container sx={{ py: 4 }}>
        <Breadcrumbs
          aria-label="recipe details breadcrumb"
          separator={<ChevronRightOutlinedIcon />}
          sx={{ mb: 2 }}
        >
          <NextLink href="/" passHref>
            <Link color="inherit" underline="hover" textTransform="capitalize">
              Home
            </Link>
          </NextLink>
          <NextLink href="/recipes" passHref>
            <Link color="inherit" underline="hover" textTransform="capitalize">
              Recipes
            </Link>
          </NextLink>
          <Typography color="primary" textTransform="capitalize">
            Recipes details
          </Typography>
        </Breadcrumbs>
        <Typography
          component="h1"
          variant="h4"
          textTransform="capitalize"
          mb={1}
        >
          Recipes details
        </Typography>
        <Typography variant="body2" mb={2} width={{ md: "50%" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          mollitia tenetur eum, excepturi reprehenderit corrupti expedita.
        </Typography>
        <Card sx={{ mb: 3 }}>
          <CardWithOverLay>
            <CardMedia
              component="img"
              image="/images/recipes/recipe-detail-banner.jpg"
              alt="Paella dish"
            />
            <CardInfoStyle>
              <Typography
                component="h2"
                variant="h4"
                fontSize={{ xs: "1rem", md: "1.5rem" }}
              >
                Grilled vegetable pasta salad
              </Typography>
              <Typography fontSize={{ xs: "0.7rem", md: "1rem" }}>
                Pasta | Vegetables | Risotto
              </Typography>
            </CardInfoStyle>
          </CardWithOverLay>
          <CardContent sx={{ "&.MuiCardContent-root": { p: 1 } }}>
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                py: 0,
              }}
            >
              <ListItem>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <AlarmOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="35 min"
                  sx={{
                    my: 0,
                    whiteSpace: "nowrap",
                    textTransform: "capitalize",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <PieChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="4 Serves"
                  sx={{
                    my: 0,
                    whiteSpace: "nowrap",
                    textTransform: "capitalize",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemButton component="button" sx={{ p: 0 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <FavoriteBorderOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Add to Favourites"
                    sx={{
                      my: 0,
                      whiteSpace: "nowrap",
                      textTransform: "capitalize",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  component="button"
                  sx={{ p: 0 }}
                  onClick={handleOpenShareMenu}
                  id="social-share-button"
                  aria-controls={
                    Boolean(openSocialShare) ? "social-share-button" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={Boolean(openSocialShare) ? "true" : undefined}
                >
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <ShareOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="share"
                    sx={{
                      my: 0,
                      whiteSpace: "nowrap",
                      textTransform: "capitalize",
                    }}
                  />
                </ListItemButton>
                <SocialShare
                  openSocialShare={openSocialShare}
                  closeSocialShare={handleCloseShareMenu}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography component="h3" variant="h5">
            Ingredients
          </Typography>
          <List>
            <ListItem sx={{ py: 0.25, opacity: 0.85, gap: 1 }}>
              <CircleIcon sx={{ width: "8px", height: "8px" }} />1 kilo Beef
              Sirloin Steak - 1kg
            </ListItem>
            <ListItem sx={{ py: 0.25, opacity: 0.85, gap: 1 }}>
              <CircleIcon sx={{ width: "8px", height: "8px" }} />5 crushed
              cloves Fresh Garlic Local - 1kg
            </ListItem>
            <ListItem sx={{ py: 0.25, opacity: 0.85, gap: 1 }}>
              <CircleIcon sx={{ width: "8px", height: "8px" }} />3 tablespoons
              Crystal Sunflower Oil - 800ml
            </ListItem>
            <ListItem sx={{ py: 0.25, opacity: 0.85, gap: 1 }}>
              <CircleIcon sx={{ width: "8px", height: "8px" }} />2 teaspoons
              Isis Salt - 70g
            </ListItem>
            <ListItem sx={{ py: 0.25, opacity: 0.85, gap: 1 }}>
              <CircleIcon sx={{ width: "8px", height: "8px" }} />1 teaspoon Isis
              Red Hot Pepper 30g
            </ListItem>
          </List>
          <Typography component="h3" variant="h5">
            How to Make It
          </Typography>
          <div>
            <Typography component="h4" variant="h6">
              Step 1
            </Typography>
            <Typography variant="body2">
              Mix garlic, salt, cayenne pepper and black pepper in a small bowl.
            </Typography>
          </div>
          <div>
            <Typography component="h4" variant="h6">
              Step 2
            </Typography>
            <Typography variant="body2">
              Rub the steak with this mixture to absorb it and put it in the
              refrigerator for several hours.{" "}
            </Typography>
          </div>
          <div>
            <Typography component="h4" variant="h6">
              Step 3
            </Typography>
            <Typography variant="body2">
              Heat the grill, then put the steak inside and press it down a
              little.
            </Typography>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
};

export default RecipeDetails;
