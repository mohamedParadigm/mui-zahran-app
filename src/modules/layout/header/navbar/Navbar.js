// MUI
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
// Components
import BrandSection from "./BrandSection";
import OptionsSection from "./OptionsSection";
import SearchSection from "./SearchSection";

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  gap: `calc(${theme.spacing(1)} * 1.5)`,
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
  },
}));

const Navbar = () => {
  return (
    <ToolbarStyle>
      <BrandSection />
      <SearchSection />
      <OptionsSection />
    </ToolbarStyle>
  );
};

export default Navbar;
