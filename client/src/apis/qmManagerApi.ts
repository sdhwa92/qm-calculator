import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? `${window.location.protocol}//${window.location.host}/api`
    : "http://localhost:3000/api";

export async function postCashflow(
  initialInvestmentAmount: number,
  initialHashCount: number,
  hashPower: number,
  decrementRate: number
) {
  try {
    const { data } = await axios.post(`${baseURL}/cashflows/create`, {
      initialInvestmentAmount,
      initialHashCount,
      hashPower,
      decrementRate,
    });

    return data;
  } catch (e) {
    console.error(e);
  }
}
