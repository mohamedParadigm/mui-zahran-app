// Externals
import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";
// Components
import { cookieExpireDate, uniqueId } from "../../../utils/utils";

const initialState = [];

const userAddressesSlice = createSlice({
  name: "userAddresses",
  initialState,
  reducers: {
    createAddress: (state, action) => {
      return (state = action.payload);
    },
    updateAddresses: (state, action) => {
      // Check new address depend on id exist
      if (!action.payload.id) {
        const address = {
          id: uniqueId(),
          ...action.payload,
          isDefault: state.length === 0,
        };
        state.push(address);
        setCookie("userAddresses", JSON.stringify(state), {
          expires: cookieExpireDate(13),
        });
      } else {
        // update current Address
        const updatedAddress = state.map((el) => {
          if (el.id === action.payload.id) {
            const newAddress = Object.assign(el, action.payload);
            return newAddress;
          }

          return el;
        });

        state = updatedAddress;
        setCookie("userAddresses", JSON.stringify(state), {
          expires: cookieExpireDate(13),
        });
      }
    },
    makeDefault: (state, action) => {
      const newAddress = state.map((el) => {
        if (el.id === action.payload) {
          return { ...el, isDefault: true };
        } else {
          return { ...el, isDefault: false };
        }
      });
      setCookie("userAddresses", JSON.stringify(newAddress), {
        expires: cookieExpireDate(13),
      });
      return (state = newAddress);
    },
    deleteAddress: (state, action) => {
      const newAddresses = state.filter((el) => el.id !== action.payload);
      setCookie("userAddresses", JSON.stringify(newAddresses), {
        expires: cookieExpireDate(13),
      });
      return (state = newAddresses);
    },
  },
});

export const { createAddress, updateAddresses, makeDefault, deleteAddress } =
  userAddressesSlice.actions;

export default userAddressesSlice.reducer;
