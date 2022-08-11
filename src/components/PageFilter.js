// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

// MUI
import { useTheme, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
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
    backgroundColor: theme.palette.primary.main,
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

const PageFilter = ({ categories }) => {
  const router = useRouter();
  console.log(router);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const { t } = useTranslation("common");

  const [expandedItem, setExpandedItem] = useState("category");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedItem(isExpanded ? panel : false);
  };

  const handleCategorySelect = (uniqueName) => {
    const isExist = router.asPath.split("/").includes(uniqueName);
    if (isExist) {
      router.push(
        router.asPath
          .split("/")
          .filter((el) => el !== uniqueName)
          .join("/")
      );
    } else {
      router.push(`${router.asPath}/${uniqueName}`);
    }
  };

  return (
    <Grid item md="auto">
      <Paper
        variant="outlined"
        sx={{ width: 300, overflow: "hidden", position: "sticky", top: 80 }}
      >
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
                        {/* <ListItem
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
                                    router.query.category === item.uniqueName
                                  }
                                  icon={<CheckBoxOutlineBlankOutlinedIcon />}
                                  checkedIcon={<CheckBoxTwoToneIcon />}
                                  sx={{ p: 0 }}
                                  color="secondary"
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={t("all")}
                                sx={{ textTransform: "capitalize" }}
                              />
                            </ListItemButton>
                          </NextLink>
                        </ListItem> */}
                        {item?.children?.map((el) => (
                          <ListItem
                            key={el.id}
                            disablePadding
                            className={
                              router.query.category === "all-categories"
                                ? "active"
                                : ""
                            }
                          >
                            <NextLink
                              href={`/${item.uniqueName}/${el.uniqueName}`}
                              passHref
                            >
                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                  <Checkbox
                                    checked={
                                      router?.query?.category ===
                                        "all-categories" ||
                                      router?.query?.category === item.uniqueName
                                    }
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
                            </NextLink>
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
    </Grid>
  );
};

export default PageFilter;
