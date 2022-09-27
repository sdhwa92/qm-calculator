import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  initialInvestmentAmount: 0,
  decrementPercent: {
    basic: 0.005,
    share: 0.005,
    accelerated: 0.015,
  },
};

const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
    updateInitialInvestmentAmount: () => {},
  },
});

export default investmentSlice.reducer;
