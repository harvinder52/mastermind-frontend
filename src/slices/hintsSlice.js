import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hints: [],
};

const hintsSlice = createSlice({
  name: "hints",
  initialState,
  reducers: {
    setHints: (state, action) => {
      state.hints = action.payload;
    },
  },
});

export const { setHints } = hintsSlice.actions;
export default hintsSlice.reducer;
