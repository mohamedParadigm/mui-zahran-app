// Internals
import { useState } from "react";
import NextLink from "next/link";
// MUI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// Icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
// Components
import Layout from "../../modules/layout/Layout";
import RecipesFilter from "../../components/RecipesFilter";
import RecipeItem from "../../components/items/RecipeItem";

const recipesCategories = [
  { id: "recipesCategories_1", label: "All", value: "all" },
  { id: "recipesCategories_2", label: "easy assembly", value: "easy-assembly" },
  { id: "recipesCategories_3", label: "Appetizers", value: "appetizers" },
  { id: "recipesCategories_4", label: "Mains", value: "mains" },
  { id: "recipesCategories_5", label: "sides", value: "sides" },
  { id: "recipesCategories_6", label: "Desserts", value: "desserts" },
];

const Recipes = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [filterBy, setFilterBy] = useState([]);

  const handleFilterChange = (item) => {
    const isExist = filterBy.find((el) => el.value === item.value);

    if (isExist) {
      setFilterBy((prev) => prev.filter((el) => el.value !== item.value));
    } else {
      setFilterBy((prev) => [...prev, item]);
    }
  };

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleToggleFilterDrawer = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setShowMobileFilter((prev) => !prev);
  };

  return (
    <Layout
      title="Recipes"
      footerOtherStyle={{ marginBottom: { xs: "58px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 120, md: 16 } }}
    >
      <Container sx={{ py: 4 }}>
        <Breadcrumbs
          aria-label="recipes breadcrumb"
          separator={<ChevronRightOutlinedIcon />}
          sx={{ mb: 2 }}
        >
          <NextLink href="/" passHref>
            <Link color="inherit" underline="hover" textTransform="capitalize">
              Home
            </Link>
          </NextLink>
          <Typography color="primary" textTransform="capitalize">Recipes</Typography>
        </Breadcrumbs>
        <Typography
          component="h1"
          variant="h4"
          textTransform="capitalize"
          mb={1}
        >
          Recipes
        </Typography>
        <Typography variant="body2" mb={2} width={{md: "50%"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          mollitia tenetur eum, excepturi reprehenderit corrupti expedita.
        </Typography>
        <Grid container spacing={3}>
          {matches && (
            <Grid item md="auto">
              <Paper variant="outlined" sx={{ width: 300, overflow: "hidden", position: "sticky", top: 80 }}>
                <Typography
                  p={2}
                  color="white"
                  fontWeight={700}
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                  }}
                >
                  Recipes Categories
                </Typography>
                <RecipesFilter
                  recipesCategories={recipesCategories}
                  filterBy={filterBy}
                  handleFilterChange={(item) => handleFilterChange(item)}
                />
              </Paper>
            </Grid>
          )}
          <Grid item xs={12} md>
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
                <Grid item xs={6} md={4} key={el}>
                  <RecipeItem />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FilterAltOutlinedIcon />}
          onClick={handleToggleFilterDrawer}
          sx={{
            position: "fixed",
            bottom: "5rem",
            left: 0,
            right: 0,
            mx: "auto",
            width: "fit-content",
            zIndex: 100,
            display: { md: "none" },
          }}
        >
          Filter
        </Button>
        <Drawer
          anchor="left"
          open={showMobileFilter}
          onClose={handleToggleFilterDrawer}
        >
          <Box
            color="white"
            p={2}
            sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            display="flex"
            gap={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight={700}>Recipes Categories</Typography>
            <IconButton
              aria-label="close filter drawer"
              color="inherit"
              onClick={handleToggleFilterDrawer}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <RecipesFilter
            recipesCategories={recipesCategories}
            filterBy={filterBy}
            handleFilterChange={(item) => handleFilterChange(item)}
          />
        </Drawer>
      </Container>
    </Layout>
  );
};

export default Recipes;
