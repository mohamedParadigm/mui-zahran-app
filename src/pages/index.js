// MUI
import Container from "@mui/material/Container";
// Components
import Layout from "../modules/layout/Layout";
import ProductItem from "../components/items/product/ProductItem";
// import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <Layout
      description="Zahran Market - an integrated commercial world that meets all your food and household needs"
      BottomNavigationValue={0}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
    >
      <Container sx={{py: 4}}>
        <ProductItem />
      </Container>
    </Layout>
  );
};

export default Home;
