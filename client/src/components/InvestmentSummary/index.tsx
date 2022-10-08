import { useAppSelector } from "../../store";
import { selectInitialInvestAmount } from "../../store/slices/calculatorSlice";
import { designStructure } from "../../services/calculatorService";

const InvestmentSummary = () => {
  const amount = useAppSelector(selectInitialInvestAmount);
  const structure = designStructure(amount); //@TODO: convert amount to USDT

  const renderDiagram = () => {};

  return <div>{structure}</div>;
};

export default InvestmentSummary;
