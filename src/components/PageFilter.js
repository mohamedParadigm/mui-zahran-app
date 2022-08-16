// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

// MUI
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
// Externals
import useTranslation from "next-translate/useTranslation";

const AccordionStyle = styled(Accordion)(({ theme }) => ({
  flexGrow: 1,
  "& .MuiAccordionSummary-root:not(.active).Mui-expanded": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  "& .MuiAccordionSummary-root.active.Mui-expanded, .MuiAccordionSummary-root.active":
    {
      color: theme.palette.primary.main,
    },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "inherit",
  },
  "& .MuiListItem-root:hover, .MuiListItem-root.active": {
    color: theme.palette.primary.main,
  },
  "& .MuiPaper-root.MuiAccordion-root": {
    boxShadow: "none",
  },
}));

const PageFilter = (props) => {
  const {
    categories,
    min,
    max,
    maxWidth = "100%",
    handleCloseFilterMenu,
  } = props;
  const router = useRouter();

  const { t } = useTranslation("common");

  const [expandedItem, setExpandedItem] = useState("category");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedItem(isExpanded ? panel : false);
  };

  const validateSubCategoryExist = (uniqueName) => {
    const isExist = router?.query?.subCategory?.split(",") || [];

    return isExist.indexOf(uniqueName) !== -1;
  };

  const handleCategorySelect = (catUni, subCatUni) => {
    const isExist = router?.query?.subCategory?.split(",") || [];
    let subCategoryPath;
    if (validateSubCategoryExist(subCatUni)) {
      subCategoryPath = isExist.filter((el) => el !== subCatUni).join(",");
    } else {
      subCategoryPath = [...isExist, subCatUni].join(",");
    }

    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.category = catUni;
    currentQuery.subCategory = subCategoryPath;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const [priceValues, setPriceValues] = useState([min, max]);

  const handlePriceSliderChange = (event, newValue) => {
    setPriceValues(newValue);
  };

  const handleSubmitPriceRange = () => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery["minP"] = priceValues[0];
    currentQuery["maxP"] = priceValues[1];

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });

    if (handleCloseFilterMenu) {
      handleCloseFilterMenu();
    }
  };

  return (
    <Grid item md="auto">
      <Box width={maxWidth} position="sticky" top={80}>
        <Paper variant="outlined" sx={{ mb: 1, overflow: "hidden" }}>
          <AccordionStyle
            expanded={expandedItem === "category"}
            onChange={handleAccordionChange("category")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="categories-filter-content"
              id="categories-filter-header"
            >
              <Typography component="h3" variant="h6">
                {t("categories")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <List>
                <ListItem
                  disablePadding
                  className={
                    router.query.category === "all-categories" ? "active" : ""
                  }
                >
                  <NextLink href="/all-categories" passHref>
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <Checkbox
                          checked={router.query.category === "all-categories"}
                          icon={<CheckBoxOutlineBlankOutlinedIcon />}
                          checkedIcon={<CheckBoxTwoToneIcon />}
                          sx={{ p: 0 }}
                          color="secondary"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={t("allCategories")}
                        sx={{ textTransform: "capitalize" }}
                      />
                    </ListItemButton>
                  </NextLink>
                </ListItem>
                {categories?.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <AccordionStyle key={item.id} square>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${item.uniqueName}-filter-content`}
                        id={`${item.uniqueName}-filter-header`}
                        className={
                          router.query?.category === item.uniqueName ||
                          router.query.category === "all-categories"
                            ? "active"
                            : ""
                        }
                      >
                        <Typography>{item[`name_${router.locale}`]}</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        <List>
                          <ListItem
                            disablePadding
                            className={
                              router.query?.category === item.uniqueName ||
                              router.query.category === "all-categories"
                                ? "active"
                                : ""
                            }
                          >
                            <NextLink href={`/${item.uniqueName}`}>
                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                  <Checkbox
                                    checked={
                                      router.query?.category ===
                                        item.uniqueName ||
                                      router.query.category === "all-categories"
                                    }
                                    icon={<CheckBoxOutlineBlankOutlinedIcon />}
                                    checkedIcon={<CheckBoxTwoToneIcon />}
                                    sx={{ p: 0 }}
                                    color="secondary"
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={item[`name_${router.locale}`]}
                                  sx={{ textTransform: "capitalize" }}
                                />
                              </ListItemButton>
                            </NextLink>
                          </ListItem>
                          {item?.children?.map((el) => (
                            <ListItem
                              key={el.id}
                              disablePadding
                              className={
                                validateSubCategoryExist(el.uniqueName)
                                  ? "active"
                                  : ""
                              }
                            >
                              <ListItemButton
                                onClick={() =>
                                  handleCategorySelect(item.uniqueName, el.uniqueName)
                                }
                              >
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                  <Checkbox
                                    checked={validateSubCategoryExist(
                                      el.uniqueName
                                    )}
                                    icon={<CheckBoxOutlineBlankOutlinedIcon />}
                                    checkedIcon={<CheckBoxTwoToneIcon />}
                                    sx={{ p: 0 }}
                                    color="secondary"
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={el[`name_${router.locale}`]}
                                  sx={{ textTransform: "capitalize" }}
                                />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </AccordionStyle>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </AccordionStyle>
          <AccordionStyle
            expanded={expandedItem === "brand"}
            onChange={handleAccordionChange("brand")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="brands-filter-content"
              id="brands-filter-header"
            >
              <Typography component="h3" variant="h6">
                {t("brands")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </AccordionStyle>
        </Paper>
        <Box p={2}>
          <Typography component="h3" variant="h5" mb={1} fontWeight={600}>
            {t("price")}
          </Typography>
          <Box p={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Typography variant="body2">
                {t("from")}:{" "}
                <strong>
                  {priceValues[0]} {t("egp")}
                </strong>
              </Typography>
              <Typography variant="body2">
                {t("to")}:{" "}
                <strong>
                  {priceValues[1]} {t("egp")}
                </strong>
              </Typography>
            </Stack>
            <Slider
              getAriaLabel={() => "Filter by price range"}
              value={priceValues}
              onChange={handlePriceSliderChange}
              min={min}
              max={max}
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSubmitPriceRange}
          >
            {t("apply")}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default PageFilter;
