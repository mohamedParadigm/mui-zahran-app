// Internals
import { useState } from "react";
import Router, { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
// MUI
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Link from '@mui/material/Link';
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
// Data
import { clearCart } from "../redux/features/cart/cartSlice";
import CanvasCartItem from "./items/CanvasCartItem/CanvasCartItem";
import EmptyCanvas from "./items/CanvasCartItem/EmptyCanvas";

const CartCanvas = ({ anchor, state, toggleDrawer }) => {
  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const handleClear = () => {
    dispatch(clearCart(cart));
  };

  const handleViewCart = () => {
    router.push('/cart', undefined , {locale});
    toggleDrawer();
  }

  const groceryPrice = () => {
    const items = cart.filter((el) => el.weight < 1);
    const price = items.reduce((acc, item) => {
      if (item.discount !== ''){
      return acc + parseInt(item.priceAfterDiscount)* item.quantity ;
      } else{
        
        return acc + parseInt(item.Price) * item.quantity
      }
    }, 0);
    return price ;
  };
  const houseHold = () => {
    const items = cart.filter((el) => el.weight > 1);
    const price = items.reduce((acc, item) => {
      if (item.discount !== ''){
      return acc + parseInt(item.priceAfterDiscount) * item.quantity;
      } else{
        return acc + parseInt(item.Price) * item.quantity
      }
    }, 0);
    return price;
  };
  const totalPrice = () => {
    return groceryPrice() + houseHold();
  };

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={state}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Box p={3} sx={{ width: 400 }} role="presentation">
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography component="h1" variant="h4" color="primary">
            {t("youHave")} {cart.length} Items
          </Typography>

          <CloseIcon onClick={() => toggleDrawer()} />
        </Stack>
        {cart.length !== 0 && (
          <Stack direction="row" alignItems="start">
            <Button
              color="secondary"
              sx={{ textDecoration: "underline", opacity: 0.7 }}
              onClick={() => handleClear(cart)}
            >
              {t("clearCart")}
            </Button>
          </Stack>
        )}

        {cart.length === 0 ? (
          <EmptyCanvas />
        ) : (
          <Container fixed sx={{ padding: "0 !important" }}>
            <Box sx={{ height: "45vh", overflowY: "auto" }}>
              {cart.map((item) => (
                <Card sx={{ marginTop: 1 }} key={item.id}>
                  <CanvasCartItem product={item} key={item.id} />
                </Card>
              ))}
            </Box>
            <Box mt={4}>
              {cart.find((el) => el.weight < 1) && (
                <Stack direction="row" justifyContent="space-between" mb={1}>
                  <Typography>Grocery Subtotal</Typography>

                  <Typography>{groceryPrice()}</Typography>
                </Stack>
              )}
              {cart.find((el) => el.weight > 1) && (
                <Stack direction="row" justifyContent="space-between" mb={1}>
                  <Typography>Household Subtotal</Typography>

                  <Typography>{houseHold()}</Typography>
                </Stack>
              )}
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography component="h3" variant="h4">
                  Total
                </Typography>

                <Typography component="h3" variant="h4">
                  {totalPrice()}
                </Typography>
              </Stack>
            </Box>

            <NextLink href="/checkout/shipping" passHref>
              <Button variant="contained" color="primary" sx={{width: '100%', mt: 5}}>Proceed to checkout</Button>
            </NextLink>
            <NextLink href="/cart" passHref>
              <Button sx={{texAlign: 'center', mt: 2 , textDecoration: 'underline'}} onClick={() => handleViewCart()}>View your cart</Button>
            </NextLink>
          </Container>
        )}
      </Box>
    </SwipeableDrawer>
  );
};

export default CartCanvas;
