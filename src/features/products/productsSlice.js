import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    all: [],
    wishlistedProducts: [],
    temp: "something",
  },
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    setAllProducts: (state, action) => {
      state.all = action.payload;
    },
    addToWishlist: (state, action) => {
      const id = action.payload;
      //add product card
      console.log(id);
      return state;
    },
  },
});

export const { setAllProducts, addToWishlist } = productsSlice.actions;

export default productsSlice.reducer;
