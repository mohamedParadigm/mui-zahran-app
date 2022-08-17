// External
import { createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie } from "cookies-next";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Create cart
    createCart: (state, action) => {
      state.cart = action.payload;
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
        const newItems = [...state.cart, { ...action.payload, quantity: 1 }];
        const test = newItems.map(item => ({id: item.id, quantity: item.quantity}))
        console.log("New Items ", test)
        setCookie("cartItems", JSON.stringify(test));
        console.log("In Cookie", JSON.parse(getCookie("cartItems")))
        return state = {...state, cart: newItems}
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
      // setCookie("cart", JSON.stringify(state));
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
      // setCookie("cart", JSON.stringify(state));
    },
    // Delete
    deleteFromCart: (state, action) => {
      const cart = state.cart.filter(
        (el) => el.uniqueName !== action.payload.uniqueName
      );
      state.cart = cart;
      // setCookie("cart", JSON.stringify(state));
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
} = cartSlice.actions;

export default cartSlice.reducer;
