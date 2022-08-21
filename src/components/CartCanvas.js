// Internals
import { useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
// MUI
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
// Data
import { clearCart } from "../redux/features/cart/cartSlice";
import CanvasCartItem from "./items/CanvasCartItem/CanvasCartItem";

const CartCanvas = ({ anchor, state, toggleDrawer }) => {
  const { locale } = useRouter();

  const { t } = useTranslation("common");

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const handleClear = () => {
    dispatch(clearCart(cart));
  };

  return (
    <SwipeableDrawer
      //   anchor={anchor}
      //   open={state[anchor]}
      //   onClose={() => toggleDrawer(anchor, false)}
      //   onOpen={() => toggleDrawer(anchor, true)}
      anchor={anchor}
      open={state}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Box
        sx={{ width: 400 }}
        role="presentation"
        // onClick={toggleDrawer({ anchor }, state)}
        // onKeyDown={toggleDrawer({ anchor }, state)}
      >
        <Stack direction="row" justifyContent="space-between" mb={3}>
          <Typography component="h1" variant="h4">
            {t("cart")}{" "}
            <Typography variant="body2" component="span" sx={{ opacity: 0.7 }}>
              ({cart.length} Items)
              {t("clearCart")}
            </Typography>
          </Typography>
          <Button
            color="secondary"
            sx={{ textDecoration: "underline" }}
            onClick={() => handleClear(cart)}
          >
            <CloseIcon onClick={() => toggleDrawer()} />
          </Button>
        </Stack>

        {cart.map((item) => (
          <Card sx={{ marginTop: 5 }} key={item.id}>
            <CanvasCartItem product={item} key={item.id} />
          </Card>
        ))}
      </Box>
    </SwipeableDrawer>
  );
};

export default CartCanvas;
