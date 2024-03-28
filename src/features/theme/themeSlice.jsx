import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

export const getThemeColor = (state) => state.theme.bgColor;
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
