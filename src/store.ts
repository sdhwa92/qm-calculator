import { configureStore } from "@reduxjs/toolkit";
import investmentSlice from "./slices/investmentSlice";

export const store = configureStore({
  reducer: {
    investment: investmentSlice,
  },
});
