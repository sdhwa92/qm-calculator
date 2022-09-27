import CalculatorInput from "./components/CalculatorInput";
import CalculatorResults from "./components/CalculatorResults";
import InvestmentSummary from "./components/InvestmentSummary";

function App() {
  return (
    <div className="qmcal-bg-gray-800 qmcal-text-white">
      <div className="qmcal-container qmcal-mx-auto sm:qmcal-px-6 lg:qmcal-px-8">
        <CalculatorInput />
        {/* <InvestmentSummary /> */}
        <CalculatorResults />
      </div>
    </div>
  );
}

export default App;
