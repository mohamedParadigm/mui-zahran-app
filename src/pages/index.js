// Components
import Container from "@mui/material/Container";
// import ProductItem from "../components/ProductItem";
// import Recipes from "../components/Recipes";
import Layout from "../modules/layout/Layout";

const Home = () => {
  return (
    <Layout
      description="Zahran Market - an integrated commercial world that meets all your food and household needs"
      BottomNavigationValue={0}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
    >
      <Container>test{/* <ProductItem /> */}</Container>
      <Container>{/* <Recipes /> */}</Container>
    </Layout>
  );
};

export default Home;
