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
