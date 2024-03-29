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
// Externals
import { useDispatch } from "react-redux";
import { toggleSubmitLoading } from "../../redux/features/global/globalSlice";
import { createUser } from "../../redux/features/user/userSlice";
// Components
import Layout from "../layout/Layout";
import { uniqueId } from "../../utils/utils";

const tabs = [
  {
    id: uniqueId(),
    icon: <PersonOutlinedIcon />,
    label_en: "Profile",
    label_ar: " معلومات الحساب",
    slug: "profile",
  },
  {
    id: uniqueId(),
    icon: <LockOutlinedIcon />,
    label_en: "Change password",
    label_ar: "تغيير كلمة المرور",
    slug: "password",
  },
  {
    id: uniqueId(),
    icon: <AddLocationOutlinedIcon />,
    label_en: "addresses",
    label_ar: "العناوين",
    slug: "addresses",
  },
  {
    id: uniqueId(),
    icon: <HistoryOutlinedIcon />,
    label_en: "orders",
    label_ar: "الطلبيات",
    slug: "orders",
  },
  {
    id: uniqueId(),
    icon: <FavoriteBorderOutlinedIcon />,
    label_en: "wishlist products",
    label_ar: "قائمة المنتجات المفضلة",
    slug: "wishlist",
  },
  {
    id: uniqueId(),
    icon: <LogoutOutlinedIcon />,
    label_en: "logout",
    label_ar: "تسجيل الخروج",
    slug: "logout",
  },
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
  const {
    user,
    title,
    elevationOption,
    activeTab,
    children,
    maxWidth = 600,
    ...other
  } = props;

  const router = useRouter();
  const { locale } = router;
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(toggleSubmitLoading(true));
    const res = await fetch(`${process.env.PUBLIC_URL}/api/users/logout`);
    if (res.ok) {
      dispatch(toggleSubmitLoading(false));
      dispatch(createUser(null));
      router.push("/");
    }
  };

  const handleTabChange = (event, newValue) => {
    if (tabs[newValue].slug === "logout") {
      handleLogout();
      return;
    }
    router.push(`/dashboard/${tabs[newValue].slug}`);
  };

  return (
    <Layout title={title} elevationOption={elevationOption} {...other}>
      <Container sx={{ py: 3 }}>
        <Box maxWidth={maxWidth} mx="auto">
          {user && (
            <Typography
              component="h1"
              variant="h4"
              textTransform="capitalize"
              fontWeight={700}
              gutterBottom
            >
              {locale === "ar"
                ? `مرحبا ${user.firstName}`
                : `Hi, ${user.firstName}`}
            </Typography>
          )}
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
                key={tab.id}
                icon={tab.icon}
                label={tab[`label_${locale}`]}
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
