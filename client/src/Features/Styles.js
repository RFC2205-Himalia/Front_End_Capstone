import { createSlice } from '@reduxjs/toolkit';

export const styleSlice = createSlice({
  name: "stylesList",
  initialState: {styles: [], currentStyle: 0, currentSkus: {}, currentPhoto: 0},
  reducers: {
    getStyles: (state, action) => {
      state.styles = action.payload
    },
    setCurrentStyle: (state, action) => {
      state.currentStyle = action.payload
    },
    setCurrentSkus: (state, action) => {
      state.currentSkus = action.payload
    },
    setCurrentPhoto: (state, action) => {
      state.currentPhoto = action.payload
    }
  }
})

export const { getStyles, setCurrentStyle, setCurrentSkus, setCurrentPhoto } = styleSlice.actions;

export default styleSlice.reducer;