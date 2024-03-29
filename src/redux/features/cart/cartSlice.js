// External
import { createSlice } from "@reduxjs/toolkit";
import { setCookie, deleteCookie } from "cookies-next";
// Components
import { cookieExpireDate } from "../../../utils/utils";
// Data
import data from "../../../utils/data";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Create cart
    createCart: (state, action) => {
      const { products } = data;
      const items = action?.payload?.map((item) => {
        const productItem = {
          ...products.find((el) => el.uniqueName === item.uniqueName),
          quantity: item.quantity,
        };

        return productItem;
      });

      state.cart = items;
    },
    // Add to cart
    addToCart: (state, action) => {
      const cart = state.cart.find(
        (index) => index.uniqueName === action.payload.uniqueName
      );
      if (cart) {
        alert("Exist");
        return state;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });

        const newItemID = state.cart.map((item) => ({
          uniqueName: item.uniqueName,
          quantity: item.quantity,
        }));
        setCookie("cart", JSON.stringify(newItemID), {
          expires: cookieExpireDate(13),
        });
      }
    },
    // Increament
    increament: (state, action) => {
      const cart = state.cart.map((index) => {
        if (index.uniqueName === action.payload.uniqueName) {
          index.quantity += 1;
          return index;
        }
        return index;
      });
      state.cart = cart;

      const newItemID = state.cart.map((item) => ({
        uniqueName: item.uniqueName,
        quantity: item.quantity,
      }));
      setCookie("cart", JSON.stringify(newItemID), {
        expires: cookieExpireDate(13),
      });
    },
    // Decreament
    decreament: (state, action) => {
      const cart = state.cart.map((index) => {
        if (index.uniqueName === action.payload.uniqueName) {
          if (index.quantity > 1) {
            index.quantity -= 1;
            return index;
          }
        }
        return index;
      });
      state.cart = cart;

      const newItemID = state.cart.map((item) => ({
        uniqueName: item.uniqueName,
        quantity: item.quantity,
      }));
      setCookie("cart", JSON.stringify(newItemID), {
        expires: cookieExpireDate(13),
      });
    },
    // Delete Item from cart
    deleteFromCart: (state, action) => {
      const cart = state.cart.filter(
        (el) => el.uniqueName !== action.payload.uniqueName
      );
      state.cart = cart;

      const newItemID = state.cart.map((item) => ({
        uniqueName: item.uniqueName,
        quantity: item.quantity,
      }));
      setCookie("cart", JSON.stringify(newItemID), {
        expires: cookieExpireDate(13),
      });
    },
    // Clear cart
    clearCart: (state) => {
      state.cart = [];
      deleteCookie("cart");
    },
    // Add to fav
    addToFav: (state, action) => {
      const exist = state.cart.filter(
        (index) => index.id === action.payload.id
      );
      if (exist) {
        state.cart.push({ ...action.payload, favourite: true });
      }
    },
  },
});

export const {
  addToCart,
  increament,
  decreament,
  deleteFromCart,
  addToFav,
  createCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
