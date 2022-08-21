// Internals
import { useSelector, useDispatch } from "react-redux";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
// Icons
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// Components
import MuiTooltip from "../../../../components/shared/MuiTooltip";
import AccountMenu from "./AccountMenu";
import LanguageChanger from "../../../../components/LanguageChanger";
// Externals
import { useState } from "react";
import CartCanvas from "../../../../components/CartCanvas";

const OptionsStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
  },
}));

const OptionsSection = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const handleToggleAccountMenu = () => setShowAccountMenu((prev) => !prev);

  const [user, setUser] = useState(true);

  const { cart } = useSelector((state) => state.cart);

  // Show canvas
  const [open, setOpen] = useState(false);
  const handleToggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen((prev) => !prev);
  };

  return (
    <OptionsStyle>
      <Box
        position="relative"
        onMouseEnter={handleToggleAccountMenu}
        onMouseLeave={handleToggleAccountMenu}
      >
        <Button
          color="inherit"
          startIcon={<PersonOutlineOutlinedIcon />}
          id="toggle-account-menu"
          aria-controls={showAccountMenu ? "toggle-account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={showAccountMenu ? "true" : undefined}
        >
          {user ? "welcome mohamed" : "login / register"}
        </Button>
        <AccountMenu showAccountMenu={showAccountMenu} />
      </Box>
      <MuiTooltip title="Your Cart" arrow>
        <IconButton color="inherit">
          <StyledBadge badgeContent={cart.length} showZero>
            <AddShoppingCartOutlinedIcon
              onClick={handleToggleDrawer}
            />
            <CartCanvas
              anchor="right"
              state={open}
              toggleDrawer={handleToggleDrawer}
            ></CartCanvas>
          </StyledBadge>
        </IconButton>
      </MuiTooltip>
      <LanguageChanger sx={{ ml: 1 }} />
    </OptionsStyle>
  );
};

export default OptionsSection;
