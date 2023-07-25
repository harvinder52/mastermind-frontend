import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hintsSlice from "./slices/hintsSlice";
import rowIndexSlice from "./slices/rowIndexSlice";

const rootReducer = combineReducers({
  hints: hintsSlice,
  rowIndex: rowIndexSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
