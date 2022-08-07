// Components
import { Container } from "@mui/system";
import ProductItem from "../components/ProductItem";
import Recipes from "../components/Recipes";
import Layout from "../modules/layout/Layout";


const Home = () => {
  return (
    <Layout layoutType="alt" description="Zahran Market - an integrated commercial world that meets all your food and household needs">
      <p>
      cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
      purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
      eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </p>
      
      <Container>
          <ProductItem />
      </Container>
      <Container>
        {/* <Recipes /> */}
      </Container>
    </Layout>
  );
};

export default Home;


