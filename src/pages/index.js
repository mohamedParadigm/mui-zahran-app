// Components
import Container from "@mui/material/Container";
import ProductItem from "../components/ProductItem";
import Layout from "../modules/layout/Layout";


const Home = () => {
  return (
    <Layout
      description="Zahran Market - an integrated commercial world that meets all your food and household needs"
      BottomNavigationValue={0}
      scrollOffset={{bottom: {xs: 70, md: 16}}}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      >
      <p>
       
        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
        nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et.
      </p>
      
      <Container>
        <ProductItem />
      </Container>
    </Layout>
  );
};

export default Home;


