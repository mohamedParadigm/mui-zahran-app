// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Icons
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// Externals
import useTranslation from "next-translate/useTranslation";
// Components
import { uniqueId } from "../../../../utils/utils";

const tabs = [
  {
    id: uniqueId(),
    icon: <PersonOutlinedIcon />,
    label_en: "Profile",
    label_ar: "معلومات الحساب",
    url: "/dashboard/profile",
  },
  {
    id: uniqueId(),
    icon: <LockOutlinedIcon />,
    label_en: "Change password",
    label_ar: "تغيير كلمة المرور",
    url: "/dashboard/password",
  },
  {
    id: uniqueId(),
    icon: <AddLocationOutlinedIcon />,
    label_en: "addresses",
    label_ar: "العناوين",
    url: "/dashboard/addresses",
  },
  {
    id: uniqueId(),
    icon: <HistoryOutlinedIcon />,
    label_en: "orders",
    label_ar: "الطلبيات",
    url: "/dashboard/orders",
  },
  {
    id: uniqueId(),
    icon: <FavoriteBorderOutlinedIcon />,
    label_en: "wishlist",
    label_ar: "قائمة المنتجات المفضلة",
    url: "/dashboard/wishlist",
  },
  {
    id: uniqueId(),
    icon: <StarBorderOutlinedIcon />,
    label: "favourites",
    label_en: "favourites",
    label_ar: "قائمة الطلبيات المفضلة",
    url: "/dashboard/orders#favourites",
  },
  {
    id: uniqueId(),
    icon: <LocalShippingOutlinedIcon />,
    label: "track order",
    label_en: "track order",
    label_ar: "متابعة الطلب",
    url: "/track-order",
  },
];

const AccountMenu = ({ showAccountMenu, user }) => {
  const router = useRouter();
  const { locale, pathname } = router;
  const { t } = useTranslation("common");

  return (
    <Fade in={showAccountMenu} mountOnEnter unmountOnExit>
      <Paper sx={{ position: "absolute", zIndex: 10 }}>
        {user ? (
          <MenuList>
            {tabs.map((el) => (
              <NextLink key={el.id} href={el.url} passHref>
                <MenuItem
                  sx={{
                    transition: "0.3s ease-in-out",
                    "&:hover, &.active": {
                      color: (theme) => theme.palette.primary.main,
                    },
                  }}
                  className={el.url === pathname ? "active" : ""}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {el.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ textTransform: "capitalize" }}>
                    {el[`label_${locale}`]}
                  </ListItemText>
                </MenuItem>
              </NextLink>
            ))}
          </MenuList>
        ) : (
          <MenuList>
            <MenuItem>
              <NextLink href="/account/login" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                >
                  {t("signin")}
                </Button>
              </NextLink>
            </MenuItem>
            <Typography
              textTransform="capitalize"
              fontSize="12px"
              component="li"
              px="16px"
            >
              {t("newUser")}
            </Typography>
            <MenuItem>
              <NextLink href="/account/register" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation
                  fullWidth
                >
                  {t("createAccount")}
                </Button>
              </NextLink>
            </MenuItem>
          </MenuList>
        )}
      </Paper>
    </Fade>
  );
};

export default AccountMenu;
