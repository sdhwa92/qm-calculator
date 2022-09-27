import { RootState } from "./../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currency: "usd",
  initialInvestAmount: 11200,
  decrementPercent: {
    basic: 0.005,
    share: 0.005,
    accelerated: 0.015,
  },
  miningPowerPerHashPerDay: {
    accelerated: 0.0388,
  },
  totalHashCount: {
    basic: 0,
    share: 0,
    accelerated: 9025,
  },
  hashflow: {},
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateInitialInvestAmount: (state, action: PayloadAction<number>) => {
      state.initialInvestAmount = action.payload;
    },
    updateCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    updateHashflow: (
      state,
      action: PayloadAction<
        Record<
          number,
          { hashAmount: number; income: number; accumulatedIncome: number }
        >
      >
    ) => {
      state.hashflow = action.payload;
    },
  },
});

export const { updateInitialInvestAmount, updateCurrency, updateHashflow } =
  calculatorSlice.actions;

export const selectDecrementPercents = (state: RootState) =>
  state.calculator.decrementPercent;
export const selectMiningPowers = (state: RootState) =>
  state.calculator.miningPowerPerHashPerDay;
export const selectCurrency = (state: RootState) => state.calculator.currency;
export const selectInitialInvestAmount = (state: RootState) =>
  state.calculator.initialInvestAmount;
export const selectTotalHashCount = (state: RootState) =>
  state.calculator.totalHashCount;
export const selectHashflow = (state: RootState) => state.calculator.hashflow;

export default calculatorSlice.reducer;
