// Internals
import { useRouter } from "next/router";
// MUi
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// Icons
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// Components
import Layout from "./Layout";

const tabs = [
  { icon: <PersonOutlinedIcon />, label: "Profile", slug: "profile" },
  {
    icon: <LockOutlinedIcon />,
    label: "Change password",
    slug: "password",
  },
  { icon: <AddLocationOutlinedIcon />, label: "addresses", slug: "addresses" },
  { icon: <HistoryOutlinedIcon />, label: "orders", slug: "orders" },
  { icon: <FavoriteBorderOutlinedIcon />, label: "wishlist", slug: "wishlist" },
  { icon: <LogoutOutlinedIcon />, label: "logout", slug: "/" },
];

const TabStyle = styled(Tabs)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
  "& .MuiTabs-flexContainer": {
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const DashboardLayout = (props) => {
  const { title, elevationOption, activeTab, children, maxWidth = 600 } = props;

  const router = useRouter();

  const handleTabChange = (event, newValue) => {
    if (tabs[newValue].slug === "/") {
      router.push(`${tabs[newValue].slug}`);
      return;
    }
    router.push(`/dashboard/${tabs[newValue].slug}`);
  };

  return (
    <Layout title={title} elevationOption={elevationOption}>
      <Container sx={{ py: 3 }}>
        <Box maxWidth={maxWidth} mx="auto">
          <Typography
            component="h1"
            variant="h4"
            textTransform="capitalize"
            fontWeight={700}
            gutterBottom
          >
            Hi, Mohamed
          </Typography>
        </Box>
        <Box mb={3}>
          <TabStyle
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="user profile tabs"
          >
            {tabs?.map((tab) => (
              <Tab
                key={tab.label}
                icon={tab.icon}
                label={tab.label}
                sx={{ textTransform: "capitalize" }}
              />
            ))}
          </TabStyle>
        </Box>
        <Box maxWidth={maxWidth} mx="auto">
          {children}
        </Box>
      </Container>
    </Layout>
  );
};

export default DashboardLayout;
