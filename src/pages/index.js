// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// Externals
import useTranslation from "next-translate/useTranslation";
// Components
import Layout from "../modules/layout/Layout";
import ProductItem from "../components/items/product/ProductItem";
import CustomMarquee from "../components/home/CustomMarquee";
// import Recipes from "../components/Recipes";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <Layout
      description="Zahran Market - an integrated commercial world that meets all your food and household needs"
      BottomNavigationValue={0}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
    >
      <CustomMarquee>
        <Typography color="primary">{t("marqueeContent")}</Typography> &nbsp; &nbsp; &nbsp;
        <Typography color="primary">{t("marqueeContent")}</Typography> &nbsp; &nbsp; &nbsp;
        <Typography color="primary">{t("marqueeContent")}</Typography> &nbsp; &nbsp; &nbsp;
        <Typography color="primary">{t("marqueeContent")}</Typography>
      </CustomMarquee>
      <Container sx={{py: 4}}>
        <ProductItem />
      </Container>
    </Layout>
  );
};

export default Home;
