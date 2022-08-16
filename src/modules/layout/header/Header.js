// Internals
import NextLink from "next/link";
import Image from "next/image";
// MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
// Components
import ElevationScroll from "../../../components/shared/ElevationScroll";
import Navbar from "./navbar/Navbar";
import BottomHeader from "./BottomHeader";
import categories from '../../../../data/categories.json'

const Header = (props) => {
  const { layoutType, elevationOption } = props;

  if (layoutType === "main") {
    if (elevationOption) {
      return (
        <ElevationScroll {...props}>
          <AppBar id="fixedAppBar">
            <Navbar />
            {/* <BottomHeader categories={categories} /> */}
          </AppBar>
        </ElevationScroll>
      );
    } else {
      return (
        <AppBar position="static" elevation={0}>
          <Navbar />
        </AppBar>
      );
    }
  } else {
    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link display="flex">
              <Image
                src="/images/logo/logo-horizontal.webp"
                alt="zahran logo"
                width={100}
                height={34}
              />
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
    );
  }
};

export default Header;
