import { createSlice } from "@reduxjs/toolkit";

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: { products: []},
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload
      // console.log(state);
    }
  }
})

export const {addProduct} = addProductSlice.actions

export default addProductSlice.reducer;