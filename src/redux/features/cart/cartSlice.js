// External
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      const cart = state.cart.find(
        (index) => index.uniqueName === action.payload.uniqueName
      );
      if (cart){
        alert("Exist");
        return state;
      }
      state.cart.push({...action.payload, quantity: 1}); 
    },
    // Increament 
    increament: (state, action) => {
      const cart = state.cart.map((index) => {
        if (index.id === action.payload.id) {
          index.quantity += 1;
          return index;
        }
        return index;
      });
      state.cart = cart;
    },
    // Decreament
    decreament: (state, action) =>{
      const cart = state.cart.map((index) => {
        if (index.uniqueName === action.payload.uniqueName) {
          if (index.quantity > 1) {
            index.quantity -= 1;
            return index;
          }
          
        }
        return index;
      })
      state.cart = cart;
    },
    // Delete
    deleteFromCart: (state , action) => {
      const cart = state.cart.filter((el) => el.id !== action.payload.id);
      state.cart = cart;
    },
    // Add to fav
    addToFav: (state , action) =>{
      const exist = state.cart.filter((index) => index.id === action.payload.id);
      if (exist) {
        state.cart.push({...action.payload, favourite: true}); 
      }
    },
  },
});

export const { addToCart, increament, decreament, deleteFromCart , addToFav} = cartSlice.actions;

export default cartSlice.reducer;
