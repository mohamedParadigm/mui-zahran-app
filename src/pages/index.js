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
import { getCookie, hasCookie } from "cookies-next";
// Components
import Layout from "../modules/layout/Layout";
import CustomMarquee from "../modules/home/CustomMarquee";
import CategoryItem from "../modules/home/CategoryItem";
import { withSessionSsr } from "../lib/withSession";
import { createUser } from "../redux/features/user/userSlice";
// Data
import data from "../utils/data";
import BrandHomeSec from "../components/BrandHomeSec";
import BannersHome from "../components/BannersHome";
import CategorySec from "../components/CategorySec";
import SliderCatogeryHomeSec from "../components/SliderCatogeryHomeSec";
import MagazineSec from "../components/MagazineSec";
import ProductItem from "../components/items/product/ProductItem";
import { useEffect } from "react";
import { createCart } from "../redux/features/cart/cartSlice";

const Home = (props) => {
  const { locale } = useRouter();

  const { t } = useTranslation("home");

  const {
    user,
    marqueeAds,
    topCategories,
    brands,
    bannersHome,
    category,
    category2,
    magazineSec,
    products,
  } = props;
  const { cart } = useSelector((state) => state.cart);

  const checkExistingCart = (cart, element) => {
    if (cart.length !== 0) {
      const amount = cart.find(
        (item) => item.uniqueName === element.uniqueName
      );
      if (amount) return amount.quantity;
    }
    return null;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasCookie("cart")) {
      dispatch(createCart(JSON.parse(getCookie("cart"))));
    }

    // Add user to redux
    user && dispatch(createUser(user));
  }, [dispatch, user]);

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
      <BannersHome bannersHome={bannersHome} />
      <Container sx={{ py: 4, width: "100%" }}>
        <div style={{ height: "50px" }}></div>
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
        <div style={{ height: "50px" }}></div>
        <Grid
          container
          spacing={1}
          mb={3}
          justifyContent={{ xs: "center", sm: "initial" }}
          textAlign={{ xs: "center", sm: "initial" }}
        >
          <Grid item xs={12} sm>
            <Typography component="h2" variant="h4">
              {t("brandsHome")}
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <NextLink href="/all-categories">
              <Button variant="outlined" color="primary">
                {t("brandsHomelink")}
              </Button>
            </NextLink>
          </Grid>
        </Grid>
        <BrandHomeSec brands={brands} />
        <div style={{ height: "50px" }}></div>
        <div style={{ width: "100%" }}>
          <Grid
            container
            spacing={1}
            mb={3}
            justifyContent={{ xs: "center", sm: "initial" }}
            textAlign={{ xs: "center", sm: "initial" }}
          >
            <Grid item xs={12} sm>
              <Typography component="h2" variant="h4">
                {t("supCategories")}
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <NextLink href="/all-categories">
                <Button variant="outlined" color="primary">
                  {t("supCategoriesLink")}
                </Button>
              </NextLink>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "-webkit-box",
              gap: 2,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            {category?.map((item) => (
              <Grid key={item.id} item sx={{ flexGrow: 1 }}>
                <CategorySec item={item} />
                <SliderCatogeryHomeSec brandsCatogery={item.brandsCatogery} />
              </Grid>
            ))}
          </Grid>
        </div>

        <div style={{ height: "50px" }}></div>
        <div style={{ width: "100%" }}>
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
          <Grid
            sx={{
              display: "-webkit-box",
              gap: 2,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            {category2?.map((item) => (
              <Grid key={item.id} item sx={{ flexGrow: 1 }}>
                <CategorySec item={item} />
                <SliderCatogeryHomeSec brandsCatogery={item.brandsCatogery2} />
              </Grid>
            ))}
          </Grid>
        </div>

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

        <div style={{ height: "50px" }}></div>
        <MagazineSec item={magazineSec} />
      </Container>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const {
    marqueeAds,
    topCategories,
    brands,
    bannersHome,
    category,
    category2,
    magazineSec,
    products,
  } = data;

  const user = req.session.user || null;


  return {
    props: {
      user,
      marqueeAds,
      topCategories,
      brands,
      bannersHome,
      category,
      category2,
      magazineSec,
      products,
    },
  };
});

