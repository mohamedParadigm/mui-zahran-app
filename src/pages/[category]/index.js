// Internals
import { useState } from "react";
import { useRouter } from "next/router";
// MUI
import { useTheme, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import ButtonGroup from "@mui/material/ButtonGroup";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// Icons
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
// Externals
import useTranslation from "next-translate/useTranslation";
// Components
import Layout from "../../modules/layout/Layout";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import PageFilter from "../../components/PageFilter";
import ProductItem from "../../components/items/product/ProductItem";
// Data
import data from "../../utils/data";
import CustomRadio from "../../components/shared/CustomRadio";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "space-between",
}));

const Category = (props) => {
  const {
    category,
    updatedProducts,
    allProductsLength,
    minPrice = 0,
    maxPrice = 1000000,
  } = props;
  const router = useRouter();
  const { locale, query, pathname } = router;
  const { t } = useTranslation("common");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [showMobileFilterDrawer, setShowMobileFilterDrawer] = useState({
    left: false,
    bottom: false,
  });

  const toggleMobileFilterDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowMobileFilterDrawer({ ...showMobileFilterDrawer, [anchor]: open });
  };

  const breadCrumbData =
    typeof category === "string"
      ? [{ uniqueName: category, name: t("allCategories") }]
      : [{ uniqueName: category.uniqueName, name: category[`name_${locale}`] }];

  const handleFilterDelete = () => {
    console.log("deleted");
  };

  const handleSortChange = (e) => {
    const currentPath = pathname;
    const currentQuery = { ...query };
    currentQuery.sortby = e.target.value;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const handleMobileSortChange = (type) => {
    const currentPath = pathname;
    const currentQuery = { ...query };
    currentQuery.sortby = type;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });

    toggleMobileFilterDrawer("bottom", false);
  };

  const displayLimit = query?.limit || 2;
  const handleDisplayLimitChange = (e) => {
    const currentPath = pathname;
    const currentQuery = { ...query };
    currentQuery.limit = e.target.value;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const page = parseInt(query?.page || "1");
  const numberOfPages = Math.ceil(allProductsLength / displayLimit);

  const handlePageChange = (event, value) => {
    const currentPath = pathname;
    const currentQuery = { ...query };
    currentQuery.page = value;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <Layout
      title={
        typeof category === "string"
          ? t("allCategories")
          : category[`name_${locale}`]
      }
      footerOtherStyle={{ marginBottom: { xs: "105px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 120, md: 16 } }}
    >
      <Container sx={{ py: 4 }}>
        <CustomBreadcrumbs
          label="Category breadcrumbs"
          data={breadCrumbData}
          sx={{ mb: 2 }}
        />
        <Grid container spacing={3}>
          {matches ? (
            <PageFilter
              categories={data.categories}
              min={minPrice}
              max={maxPrice}
              maxWidth={300}
            />
          ) : (
            <>
              <ButtonGroup
                variant="contained"
                color="secondary"
                aria-label="mobile-sort-filter"
                size="small"
                sx={{
                  position: "fixed",
                  bottom: 70,
                  zIndex: 10,
                  left: 0,
                  right: 0,
                  mx: "auto",
                  justifyContent: "center",
                  width: "fit-content",
                }}
              >
                <Button
                  endIcon={<SortOutlinedIcon />}
                  onClick={toggleMobileFilterDrawer("bottom", true)}
                >{t`common:sortBy.label`}</Button>
                <Button
                  endIcon={<FilterAltOutlinedIcon />}
                  onClick={toggleMobileFilterDrawer("left", true)}
                >
                  {t("filterBy")}
                </Button>
              </ButtonGroup>
              <Drawer
                anchor="bottom"
                open={showMobileFilterDrawer["bottom"]}
                onClose={toggleMobileFilterDrawer("bottom", false)}
                sx={{
                  "& .MuiPaper-root.MuiDrawer-paper": {
                    width: "100%",
                    borderTopLeftRadius: (theme) =>
                      theme.shape.borderRadius * 2,
                    borderTopRightRadius: (theme) =>
                      theme.shape.borderRadius * 2,
                  },
                }}
              >
                <DrawerHeader sx={{ p: 1 }}>
                  <Typography component="h3" variant="h5">
                    {t`common:sortBy.label`}
                  </Typography>
                  <IconButton
                    onClick={toggleMobileFilterDrawer("bottom", false)}
                    sx={{ marginLeft: "auto" }}
                    color="inherit"
                  >
                    <CloseIcon />
                  </IconButton>
                </DrawerHeader>
                <Box p={1}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleMobileSortChange("relevance")}
                      >
                        <ListItemIcon>
                          <CustomRadio
                            name="mobile-sort"
                            checked={
                              router.query.sortby === "relevance" || true
                            }
                          />
                        </ListItemIcon>
                        <ListItemText primary={t`common:sortBy.relevance`} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleMobileSortChange("price-htl")}>
                        <ListItemIcon>
                          <CustomRadio
                            name="mobile-sort"
                            checked={router.query.sortby === "price-htl"}
                          />
                        </ListItemIcon>
                        <ListItemText primary={t`common:sortBy.htl`} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleMobileSortChange("price-lth")}>
                        <ListItemIcon>
                          <CustomRadio
                            name="mobile-sort"
                            checked={router.query.sortby === "price-lth"}
                          />
                        </ListItemIcon>
                        <ListItemText primary={t`common:sortBy.lth`} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
              <Drawer
                anchor="left"
                open={showMobileFilterDrawer["left"]}
                onClose={toggleMobileFilterDrawer("left", false)}
              >
                <DrawerHeader sx={{ p: 1 }}>
                  <Typography component="h3" variant="h5">
                    {t("filterBy")}
                  </Typography>
                  <IconButton
                    onClick={toggleMobileFilterDrawer("left", false)}
                    sx={{ marginLeft: "auto" }}
                    color="inherit"
                  >
                    <CloseIcon />
                  </IconButton>
                </DrawerHeader>
                <Box p={1}>
                  <PageFilter
                    categories={data.categories}
                    min={minPrice}
                    max={maxPrice}
                    handleCloseFilterMenu={toggleMobileFilterDrawer(
                      "left",
                      false
                    )}
                  />
                </Box>
              </Drawer>
            </>
          )}
          <Grid item xs={12} md>
            {updatedProducts?.length === 0 && (
              <Typography>No Items Found</Typography>
            )}
            {updatedProducts?.length !== 0 && (
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Grid item xs={12} sm="auto">
                  <Typography>
                    {updatedProducts?.length}
                    {t("results")}
                    <strong>
                      &quot;
                      {typeof category === "string"
                        ? t("allCategories")
                        : category[`name_${locale}`]}
                      &quot;
                    </strong>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md="auto"
                  container
                  spacing={1}
                  alignItems="center"
                >
                  <Grid item xs="auto">
                    <Typography variant="caption" fontWeight={700}>
                      Filtered by:{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip
                        label="Deletable"
                        variant="outlined"
                        size="small"
                        onDelete={handleFilterDelete}
                      />
                      <Button>clear all</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {updatedProducts?.length !== 0 && (
              <Grid
                container
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                {matches && (
                  <Grid item xs="auto">
                    <Box minWidth={150}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="category-sortby-label"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {t`common:sortBy.label`}
                        </InputLabel>
                        <Select
                          labelId="category-sortby-label"
                          id="category-sortby"
                          value={query?.sortby || "relevance"}
                          label={t`common:sortBy.label`}
                          onChange={handleSortChange}
                          size="small"
                          color="secondary"
                        >
                          <MenuItem
                            value="relevance"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {t`common:sortBy.relevance`}
                          </MenuItem>
                          <MenuItem
                            value="price-htl"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {t`common:sortBy.htl`}
                          </MenuItem>
                          <MenuItem
                            value="price-lth"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {t`common:sortBy.lth`}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                )}
                <Grid item xs="auto">
                  <Box minWidth={120}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="display-per-page-label"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {t`common:pagesDisplay.label`}
                      </InputLabel>
                      <Select
                        labelId="display-per-page-label"
                        id="display-per-page"
                        value={displayLimit}
                        label={t`common:pagesDisplay.label`}
                        onChange={handleDisplayLimitChange}
                        size="small"
                        color="secondary"
                      >
                        <MenuItem
                          value={2}
                          sx={{ textTransform: "capitalize" }}
                        >
                          2{t`common:pagesDisplay.perPage`}
                        </MenuItem>
                        <MenuItem
                          value={4}
                          sx={{ textTransform: "capitalize" }}
                        >
                          4{t`common:pagesDisplay.perPage`}
                        </MenuItem>
                        <MenuItem
                          value={6}
                          sx={{ textTransform: "capitalize" }}
                        >
                          6{t`common:pagesDisplay.perPage`}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            )}
            <Grid
              container
              spacing={2}
              minHeight="45vh"
              mb={2}
              justifyContent="center"
            >
              {updatedProducts?.length !== 0 && (
                <>
                  {updatedProducts?.map((el) => (
                    <Grid key={el.id} item xs="auto">
                      <ProductItem />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
            {updatedProducts?.length !== 0 && numberOfPages.length !== 0 && (
              <Box display="flex" justifyContent="center">
                <Pagination
                  count={numberOfPages}
                  page={page}
                  onChange={handlePageChange}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Category;

export const getServerSideProps = (req, res) => {
  const { params, query } = req;
  const { products } = data;

  const category =
    params.category !== "all-categories"
      ? data.categories.find((cat) => cat.uniqueName === params.category)
      : "all-categories";

  const childCategory = category !== "all-categories" && category.children;
  const childCategoryUniqueNames =
    childCategory && childCategory.map((cat) => cat.uniqueName);

  if (!category) {
    return {
      notFound: true,
    };
  }

  const categoryProducts =
    category === "all-categories"
      ? products
      : products?.filter((el) => el.categoryUniqueName === category);

  const childProducts =
    childCategory &&
    products.filter(
      (product) =>
        childCategoryUniqueNames.indexOf(product.categoryUniqueName) !== -1
    );

  const allProducts = [...categoryProducts, ...childProducts];

  const minPrice = allProducts.reduce((acc, cur) => {
    return parseInt(cur.priceAfterDiscount) < acc
      ? parseInt(cur.priceAfterDiscount)
      : acc;
  }, 10000000);

  const maxPrice = allProducts.reduce((acc, cur) => {
    return parseInt(cur.priceAfterDiscount) > acc
      ? parseInt(cur.priceAfterDiscount)
      : acc;
  }, 0);

  const {
    page = 1,
    limit = 2,
    sortby = "relevance",
    brand = "all",
    minP = minPrice,
    maxP = maxPrice,
  } = query;

  let updatedProducts = allProducts
    .slice((page - 1) * limit)
    .slice(0, limit)
    .filter(
      (el) =>
        parseInt(el.priceAfterDiscount) >= minP &&
        parseInt(el.priceAfterDiscount) <= maxP
    );

  if (sortby === "price-lth") {
    updatedProducts = updatedProducts.sort(
      (a, b) => parseInt(a.priceAfterDiscount) - parseInt(b.priceAfterDiscount)
    );
  }

  if (sortby === "price-htl") {
    updatedProducts = updatedProducts.sort(
      (a, b) => parseInt(b.priceAfterDiscount) - parseInt(a.priceAfterDiscount)
    );
  }

  console.log(updatedProducts);

  return {
    props: {
      category,
      updatedProducts,
      allProductsLength: allProducts.length,
      minPrice,
      maxPrice,
    },
  };
};
