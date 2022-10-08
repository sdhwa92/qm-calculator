import { combineReducers } from "@reduxjs/toolkit";
import calculatorSlice from "./slices/calculatorSlice";

const rootReducer = combineReducers({
  calculator: calculatorSlice,
});

export default rootReducer;
