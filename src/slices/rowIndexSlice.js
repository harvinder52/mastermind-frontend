import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rowIndex: [],
};

const rowIndexSlice = createSlice({
  name: "rowIndex",
  initialState,
  reducers: {
    setRowIndex: (state, action) => {
      state.rowIndex = action.payload;
    },
  },
});

export const { setRowIndex } = rowIndexSlice.actions;
export default rowIndexSlice.reducer;
