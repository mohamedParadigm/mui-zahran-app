// Internals
import { useRouter } from "next/router";
// MUI
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import MuiBottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// Icons
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const PaperStyle = styled((props) => <Paper {...props} />)({
  position: "fixed",
  zIndex: 50,
  bottom: 0,
  left: 0,
  right: 0,
});

const pages = [
  {
    label_en: "home",
    label_ar: "الرئيسية",
    url: "/",
    icon: <CottageOutlinedIcon fontSize="small" />,
  },
  {
    label_en: "categories",
    label_ar: "الفئات",
    url: "/all-categories",
    icon: <MenuOutlinedIcon fontSize="small" />,
  },
  {
    label_en: "deals",
    label_ar: "العروض",
    url: "/all-categories?other=deals",
    icon: <PercentOutlinedIcon fontSize="small" />,
  },
  {
    label_en: "cart",
    label_ar: "العربة",
    url: "/cart",
    icon: <AddShoppingCartOutlinedIcon fontSize="small" />,
  },
  {
    label_en: "account",
    label_ar: "الحساب",
    url: "/dashboard/profile",
    icon: <PermIdentityOutlinedIcon fontSize="small" />,
  },
];

const BottomNavigation = ({ BottomNavigationValue }) => {
  const router = useRouter();
  const { locale } = router;

  const handleValueChange = (e, newValue) => {
    router.push(pages[newValue].url, undefined, { locale });
  };

  return (
    <PaperStyle square variant="outlined" sx={{ px: 1 }}>
      <MuiBottomNavigation
        showLabels
        value={BottomNavigationValue}
        onChange={handleValueChange}
      >
        {pages.map((page) => (
          <BottomNavigationAction
            key={page.label_en}
            label={page[`label_${locale}`]}
            icon={page.icon}
            sx={{ textTransform: "capitalize", px: 0, minWidth: 60 }}
          />
        ))}
      </MuiBottomNavigation>
    </PaperStyle>
  );
};

export default BottomNavigation;
