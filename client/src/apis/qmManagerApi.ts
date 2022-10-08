import axios from "axios";

const baseURL = "http://localhost:3000";

export async function postCashflow(
  initialInvestmentAmount: number,
  initialHashCount: number,
  hashPower: number,
  decrementRate: number
) {
  const res = await axios.post(`${baseURL}/cashflows/calculate`, {
    initialInvestmentAmount,
    initialHashCount,
    hashPower,
    decrementRate,
  });
  return res;
}
