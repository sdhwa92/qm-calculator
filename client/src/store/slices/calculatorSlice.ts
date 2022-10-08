import { RootState } from "./../index";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { postCashflow } from "../../apis/qmManagerApi";

const initialState = {
  currency: "usd",
  initialInvestAmount: 0,
  minimumAmount: 1500,
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
    accelerated: 0,
  },
  hashflow: {},
};

export const fetchCashflow = createAsyncThunk(
  "cashflows/postCashflow",
  async (_, { getState }) => {
    const {
      calculator: {
        initialInvestAmount,
        totalHashCount: { accelerated: totalAccHashCount },
        miningPowerPerHashPerDay: { accelerated: accHashMiningPower },
        decrementPercent: { accelerated: accHashDecrementPercent },
      },
    }: RootState = getState() as RootState;
    const res = await postCashflow(
      initialInvestAmount,
      totalAccHashCount,
      accHashMiningPower,
      accHashDecrementPercent
    );
    return res;
  }
);

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateInitialInvestAmount: (state, action: PayloadAction<number>) => {
      state.initialInvestAmount = action.payload;
      // Update the totalHashCount based on the 1-3-1 structure for now
      // which means the initial investment amount should be minimum $1500
      if (state.initialInvestAmount > state.minimumAmount) {
        let amount = state.initialInvestAmount;
        let hashCount = 0;
        // level 0
        amount = amount - 300;
        // level 1 x 2
        for (let i = 0; i < 2; i += 1) {
          amount = amount - 300;
          hashCount = hashCount + 300 * 0.5;
        }
        //level 2
        amount = amount - 300;
        for (let i = 1; i < 3; i += 1) {
          let accRate = 0;
          if (i === 1) {
            accRate = 0.5;
          } else if (i === 2) {
            accRate = 0.25;
          }
          hashCount = hashCount + 300 * accRate;
        }
        // level 3
        for (let i = 1; i < 4; i += 1) {
          let accRate = 0;
          if (i === 1) {
            accRate = 0.5;
          } else if (i === 2) {
            accRate = 0.25;
          } else if (i === 3) {
            accRate = 0.1;
          }
          hashCount = hashCount + amount * accRate;
        }

        // Update the total accelerated hash count
        state.totalHashCount.accelerated = hashCount;
      } else {
        console.error("Minimum investment amount is $1500 to calculate");
      }
    },
    updateCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    updateMiningPower: (state, action: PayloadAction<number>) => {
      state.miningPowerPerHashPerDay.accelerated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCashflow.fulfilled, (state, action) => {
      state.hashflow = action.payload;
    });
  },
});

export const { updateInitialInvestAmount, updateCurrency, updateMiningPower } =
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
export const selectMinimumAmount = (state: RootState) =>
  state.calculator.minimumAmount;

export default calculatorSlice.reducer;
