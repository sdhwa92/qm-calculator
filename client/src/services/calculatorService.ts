import { roundUpDecimals } from "../helper";

export const designStructure = (
  usdtAmount: number
): "1-3-1" | "1-2" | "1-1" | "1" | "none" => {
  if (usdtAmount >= 1500) {
    //1-3-1
    return "1-3-1";
  } else if (usdtAmount < 1500 && usdtAmount >= 900) {
    // 1-2
    return "1-2";
  } else if (usdtAmount < 900 && usdtAmount >= 600) {
    // 1-1
    return "1-1";
  } else if (usdtAmount < 600 && usdtAmount >= 300) {
    // 1
    return "1";
  } else {
    // 0
    return "none";
  }
};

export const decrementHash = (
  initialInvestAmount: number,
  initialHashCount: number,
  decrementRate: number,
  hashMiningPower: number
) => {
  let results = {};
  let hashCount = initialHashCount;
  let accumulatedIncome = 0;
  let count = 0;

  while (accumulatedIncome < initialInvestAmount) {
    const previousAccumulatedIncome = accumulatedIncome;
    const income = roundUpDecimals(hashCount * hashMiningPower, 2);
    accumulatedIncome = roundUpDecimals(accumulatedIncome + income, 2);

    if (previousAccumulatedIncome === accumulatedIncome) break;

    results = {
      ...results,
      [count]: {
        hashAmount: Math.round(hashCount),
        income,
        accumulatedIncome,
      },
    };

    hashCount = hashCount - hashCount * decrementRate;

    count += 1;
  }

  return results;
};
