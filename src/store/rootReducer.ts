import { combineReducers } from "@reduxjs/toolkit";
import investmentSlice from "./slices/investmentSlice";

const rootReducer = combineReducers({
  investment: investmentSlice,
});

export default rootReducer;
