// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
// Components
import Layout from "../modules/layout/Layout";
import CustomMarquee from "../modules/home/CustomMarquee";
import CategoryItem from "../modules/home/CategoryItem";
// Data
import data from "../utils/data";
import ProductItem from "../components/items/product/ProductItem";
// import checkExistingCart from '../utils/checkExistingCart'

const Home = (props) => {
  const { locale } = useRouter();

  const { t } = useTranslation("home");

  const { cart } = useSelector((state) => state.cart);

 const checkExistingCart = (cart, element) => {
  if (cart.length !== 0) {
    const amount = cart.find((item) => item.uniqueName === element.uniqueName);
    if (amount) return amount.quantity;
  }
  return null;
};

  const { marqueeAds, topCategories, products } = props;

  return (
    <Layout
      description="Zahran Market - an integrated commercial world that meets all your food and household needs"
      BottomNavigationValue={0}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
    >

      <CustomMarquee>
        {marqueeAds?.map((item) => (
          <Typography key={item.id} color="primary">
            &nbsp; {item[`text_${locale}`]} &nbsp;
          </Typography>
        ))}
      </CustomMarquee>

      <Container sx={{ py: 4 }}>
        <Grid
          container
          spacing={1}
          mb={3}
          justifyContent={{ xs: "center", sm: "initial" }}
          textAlign={{ xs: "center", sm: "initial" }}
        >
          <Grid item xs={12} sm>
            <Typography component="h2" variant="h4">
              {t("topCategories")}
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <NextLink href="/all-categories">
              <Button variant="outlined" color="primary">
                {t("moreCategories")}
              </Button>
            </NextLink>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {topCategories?.map((item) => (
            <Grid
              key={item.id}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              whiteSpace="nowrap"
              order={item.displayOrder}
            >
              <CategoryItem item={item} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {products.map((product) => (
            <Grid item xs={3} key={product.id}>
              <ProductItem
                product={product}
                quantity={checkExistingCart(cart, product)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = (req, res) => {
  const { marqueeAds, topCategories, products } = data;

  return {
    props: { marqueeAds, topCategories, products },
  };
};
