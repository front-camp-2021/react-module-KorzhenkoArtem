import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    all: [],
    temp: "something",
  },
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    setAllProducts: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
