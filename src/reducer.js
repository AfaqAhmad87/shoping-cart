import { createSlice } from "@reduxjs/toolkit";
import data from "./data";
import items from "./data";
const initialState = {
  cart: [],
  carddata: items,
  Totalamount: 0,
  TotalPrice: 0,
};
export const counterSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    pushData: (state, action) => {
      // state.cart.push(action.payload);
      const find = state.cart.find((value) => value.id === action.payload.id);
      console.log(find);
      if (find) {
        alert("can not Add Same Item ");
      } else {
        state.cart.push(action.payload);
      }
    },

    Delete: (state, action) => {
      const result = state.cart.filter((value, index) => {
        return index !== action.payload;
      });
      state.cart = result;
    },
    addall: (state) => {
      let data = 0;
      let value = 0;
      cart.array.forEach((element) => {
        data = data + element.price;
      });
    },
  },
});
export const { pushData } = counterSlice.actions;
export const { Delete } = counterSlice.actions;
export default counterSlice.reducer;
