// Components
import Layout from "../../modules/layout/Layout";
import ProductItem from "../../components/items/product/ProductItem";
import CartButton from "../../components/items/product/CartButton";
// MUI
import {
  Box,
  Grid,
  Stack,
  Typography,
  ImageList,
  Container,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
// Internals
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
// Externals
import InnerImageZoom from 'react-inner-image-zoom';
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
import { getCookie, hasCookie } from "cookies-next";
import { toast } from "react-toastify";
// Data
import data from "../../utils/data";
import { createCart, addToCart } from "../../redux/features/cart/cartSlice";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const Product = ({ product, user }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { products } = data;
  const { cart } = useSelector((state) => state.cart);
  const [openButton, setOpenButton] = useState(false);

  const checkExistingCart = (cart, element) => {
    if (cart.length !== 0) {
      const amount = cart.find(
        (item) => item.uniqueName === element.uniqueName
      );
      if (amount) return amount.quantity;
    }
    return null;
  };

  useEffect(() => {
    if (hasCookie("cart")) {
      dispatch(createCart(JSON.parse(getCookie("cart"))));
    }
    // Add user to redux
    user && dispatch(createUser(user));
  }, [dispatch, user]);

  // Add to cart action
  const handleAddToCart = (element) => {
    const newItem = { ...element, quantity: 1 };
    dispatch(addToCart(newItem));
    setOpenButton(!openButton);
    const message =
      locale === "en"
        ? `${newItem.name_en} Added Successfully`
        : `تم اضافة ${newItem.name_ar} بنجاح`;
    toast.success(message, { autoClose: 1000, position: "top-right" });
  };

  const related = products.filter(
    (item) => item.categoryUniqueName === product.categoryUniqueName
  );
  const otherColors = products.filter(
    (item) => item.modelNumber === product.modelNumber
  );

  console.log(product.images[0].imageAcutal);

  return (
    <Layout
      title={product[`name_${locale}`]}
      elevationOption={true}
      footerOtherStyle={{ marginBottom: { xs: "112px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 120, md: 16 } }}
      BottomNavigationValue={3}
    >
      <Container sx={{ py: 4, width: "100%" }}>
        <Box mt={5}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} sx={{ overflow: "visible" }}>
             
              <Box sx={{display: 'flex'}}>
                {product.images.map((item, index) => (
                  <InnerImageZoom key={index} src={item.imageAcutal} zoomSrc={item.imageAcutal} hasSpacer={true} width={300} height={500} zoomType="hover" fullscreenOnMobile={true} mobileBreakpoint ={640} hideHint={true} imgAttributes={{width: '1000' , height: '100'}} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ pl: 5}}>
              <Stack>
                <Typography
                  component="h3"
                  variant="h4"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {product[`name_${locale}`]}
                </Typography>
                <Typography
                  variant="body2"
                  color="alt.main"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  height={21}
                  mb={1}
                >
                  {product[`description_${locale}`]}
                </Typography>
                {product.discount ? (
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={{ xs: "center", sm: "start" }}
                  >
                    <strong sx={{ color: "primary.main" }}>
                      {product.priceAfterDiscount} {t("egp")}{" "}
                    </strong>
                    <del style={{ opacity: 0.7 }}>
                      {product.Price} {t("egp")}{" "}
                    </del>
                  </Stack>
                ) : (
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={{ xs: "center", sm: "start" }}
                  >
                    <strong>{product.Price}</strong>
                  </Stack>
                )}
                <Typography
                  variant="body2"
                  color="alt.main"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  height={21}
                  mb={1}
                >
                  Color: {product.color}
                </Typography>
                <Stack sx={{ display: "-webkit-inline-box" }}>
                  {otherColors.map((item) => (
                    <CardActionArea
                      key={item.id}
                      sx={{
                        width: "100px",
                        display: "inline-flex",
                        border: "1px solid",
                        m: 1,
                      }}
                    >
                      <NextLink href={`/product/${item.uniqueName}`} passHref>
                        <div>
                          <Image
                            src={item.images[0].imageThumb}
                            width={100}
                            height={100}
                            alt={item.uniqueName}
                          />
                        </div>
                      </NextLink>
                    </CardActionArea>
                  ))}
                </Stack>
                {product.availability === true ? (
                  <CardActions>
                    {checkExistingCart(cart, product) ? (
                      <CartButton
                        quantity={checkExistingCart(cart, product)}
                        product={product}
                      />
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => handleAddToCart(product)}
                      >
                        {t("addToCart")}
                      </Button>
                    )}
                  </CardActions>
                ) : (
                  <CardActions
                    sx={{ justifyContent: { xs: "center", sm: "center" } }}
                  >
                    <Button variant="contained" color="secondary">
                      notify me
                    </Button>
                    <Button variant="outlined" color="secondary">
                      find similar
                    </Button>
                  </CardActions>
                )}
              </Stack>

              <div style={{ height: "50px" }}></div>
            </Grid>
          </Grid>

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
                  {t("related")}
                </Typography>
              </Grid>
            </Grid>
          </div>

          <Grid container spacing={2} sx={{ mt: 5 }}>
            {related.map((item) => (
              <Grid item xs={3} key={item.id}>
                <ProductItem
                  product={item}
                  quantity={checkExistingCart(cart, item)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Product;

export const getServerSideProps = (req) => {
  const { params } = req;
  const { products } = data;

  const product = products.find((item) => item.uniqueName === params.product);

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
      products,
    },
  };
};
