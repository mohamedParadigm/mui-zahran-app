// Internals
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

const tabs = [
  {
    id: 1,
    icon: <PersonOutlinedIcon />,
    label: "Profile",
    url: "/dashboard/profile",
  },
  {
    id: 2,
    icon: <LockOutlinedIcon />,
    label: "Change password",
    url: "/dashboard/password",
  },
  {
    id: 3,
    icon: <AddLocationOutlinedIcon />,
    label: "addresses",
    url: "/dashboard/addresses",
  },
  {
    id: 4,
    icon: <HistoryOutlinedIcon />,
    label: "orders",
    url: "/dashboard/orders",
  },
  {
    id: 5,
    icon: <FavoriteBorderOutlinedIcon />,
    label: "wishlist",
    url: "/dashboard/wishlist",
  },
  {
    id: 6,
    icon: <StarBorderOutlinedIcon />,
    label: "favourites",
    url: "/dashboard/orders#favourites",
  },
  {
    id: 7,
    icon: <LocalShippingOutlinedIcon />,
    label: "track order",
    url: "/track-order",
  },
];

const AccountMenu = ({ showAccountMenu, user }) => {
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
                    "&:hover": { color: (theme) => theme.palette.primary.main },
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {el.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ textTransform: "capitalize" }}>
                    {el.label}
                  </ListItemText>
                </MenuItem>
              </NextLink>
            ))}
          </MenuList>
        ) : (
          <MenuList>
            <MenuItem>
              <NextLink href="/login" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                >
                  sign in
                </Button>
              </NextLink>
            </MenuItem>
            <Typography
              textTransform="capitalize"
              fontSize="12px"
              component="li"
              px="16px"
            >
              new user ?
            </Typography>
            <MenuItem>
              <NextLink href="/register" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation
                  fullWidth
                >
                  create an account
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
