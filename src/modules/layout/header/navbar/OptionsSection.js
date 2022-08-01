// Internals
import { useState } from "react";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import Fade from "@mui/material/Fade";
// Icons
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// Components
import MuiTooltip from "../../../../components/shared/MuiTooltip";

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
          login / register
        </Button>
        <Fade in={showAccountMenu} mountOnEnter unmountOnExit>
          <Paper sx={{ position: "absolute", zIndex: 10 }}>
            <MenuList>
              <MenuItem>
                <NextLink href="/login" passHref>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    fullWidth
                    component="a"
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
                    component="a"
                  >
                    create an account
                  </Button>
                </NextLink>
              </MenuItem>
            </MenuList>
          </Paper>
        </Fade>
      </Box>
      <MuiTooltip title="Your Cart" arrow>
        <IconButton color="inherit">
          <StyledBadge badgeContent={0} showZero>
            <AddShoppingCartOutlinedIcon />
          </StyledBadge>
        </IconButton>
      </MuiTooltip>
      <NextLink href="/" passHref>
        <Link underline="none" color="inherit" ml={1}>
          العربية
        </Link>
      </NextLink>
    </OptionsStyle>
  );
};

export default OptionsSection;
