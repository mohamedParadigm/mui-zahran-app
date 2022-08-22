// Internals
import { useState, useEffect } from "react";
// MUI
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Skeleton from "@mui/material/Skeleton";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ToolbarStyle>
      {loading ? (
        <Skeleton variant="rectangular" sx={{width: {xs: "100%", md: "30%"}}} height={40} />
      ) : (
        <BrandSection />
      )}
      {loading ? (
        <Skeleton variant="rectangular" sx={{width: {xs: "100%", md: "30%"}}} height={40} />
      ) : (
        <SearchSection />
      )}
      {loading ? (
        <Skeleton variant="rectangular" sx={{width: {xs: "100%", md: "30%"}}} height={40} />
      ) : (
        <OptionsSection />
      )}
    </ToolbarStyle>
  );
};

export default Navbar;
