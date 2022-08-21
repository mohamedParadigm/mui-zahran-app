// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Externals
import useTranslation from "next-translate/useTranslation";
// Data
import data from "../utils/data";

const AllCategoryStyle = styled(ListItem)(({ theme }) => ({
  "&.active": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  "&:not(.active):hover": {
    color: theme.palette.primary.main,
  },
}));

const AccordionStyle = styled(Accordion)(({ theme }) => ({
  "& .MuiAccordionSummary-root.active": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  "& .MuiAccordionSummary-root:not(.active):hover, .MuiAccordionSummary-root:not(.active).Mui-expanded":
    {
      color: theme.palette.primary.main,
    },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "inherit",
  },
  "& .MuiListItem-root.active": {
    color: theme.palette.primary.main,
  },
  "& .MuiListItem-root:not(.active):hover": {
    color: theme.palette.primary.main,
  },
}));

const MobileMenu = ({ closeMenuDrawer }) => {
  const router = useRouter();
  const { locale, query } = router;
  const { t } = useTranslation("common");
  const { categories } = data;

  const handleCategoryChange = (url) => {
    router.push(url, undefined, { locale });

    closeMenuDrawer();
  };

  return (
    <Box py={2}>
      <AllCategoryStyle
        component="div"
        className={query?.category === "all-categories" ? "active" : ""}
      >
        <NextLink href="/all-categories" passHref>
          <Link
            underline="none"
            color="inherit"
            textTransform="capitalize"
            flexGrow={1}
          >
            {t("allCategories")}
          </Link>
        </NextLink>
      </AllCategoryStyle>
      {categories?.map((item) => (
        <AccordionStyle key={item.id} square>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.uniqueName}-content`}
            id={`${item.uniqueName}-header`}
            className={query?.category === item.uniqueName ? "active" : ""}
          >
            <Typography>{item[`name_${locale}`]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List sx={{ p: 0 }}>
              <ListItem
                className={
                  query?.category === item.uniqueName &&
                  query?.subCategory === "all"
                    ? "active"
                    : ""
                }
                disablePadding
              >
                <ListItemButton
                  sx={{ textTransform: "capitalize" }}
                  onClick={() =>
                    handleCategoryChange(`/${item.uniqueName}?subCategory=all`)
                  }
                >
                  {t("all")}
                </ListItemButton>
              </ListItem>
              {item?.children?.map((el) => (
                <ListItem
                  key={el.id}
                  disablePadding
                  className={
                    query?.category === item.uniqueName &&
                    query?.subCategory === el.uniqueName
                      ? "active"
                      : ""
                  }
                >
                  <ListItemButton
                    sx={{ textTransform: "capitalize" }}
                    onClick={() =>
                      handleCategoryChange(
                        `/${item.uniqueName}?subCategory=${el.uniqueName}`
                      )
                    }
                  >
                    {el[`name_${locale}`]}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </AccordionStyle>
      ))}
    </Box>
  );
};

export default MobileMenu;
