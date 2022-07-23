import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from './Features/addProduct.js';
import styleReducer from './Features/Styles.js'


const store = configureStore ({
  reducer: {
    addProduct: addProductReducer,
    stylesList: styleReducer,
  },
});

export default store