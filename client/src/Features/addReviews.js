import { createSlice } from "@reduxjs/toolkit";

export const addReviewsSlice = createSlice({
  name: "addReviews",
  initialState: { 
      product:"",
      page: 0,
      count: 0,
      reviews: [],
      avgReviewScore: 3
    },
  reducers: {
    addReviews: (state, action) => {
      state.reviews = action.payload.results || state.reviews;
      state.product = action.payload.product || state.product;
      state.page = action.payload.page || state.page;
      state.count = action.payload.count || state.count;
      // console.log(state);
    },
    addAvgScore: (state, action) => {
      state.avgReviewScore = action.payload;
    },
    addReviewMeta: (state, action) => {
      state.reviewMeta = action.payload;
    }
  }
})

export const {addReviews, addAvgScore, addReviewMeta} = addReviewsSlice.actions

export default addReviewsSlice.reducer;