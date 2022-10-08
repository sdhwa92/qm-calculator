import CalculatorInputs from "./components/CalculatorInputs";
import CalculatorResults from "./components/CalculatorResults";
import InvestmentSummary from "./components/InvestmentSummary";

function App() {
  return (
    <div className="qmcal-bg-gray-800 qmcal-text-white qmcal-min-h-screen">
      <div className="qmcal-container qmcal-mx-auto sm:qmcal-px-6 lg:qmcal-px-8">
        <CalculatorInputs />
        {/* <InvestmentSummary /> */}
        <div className="qmcal-relative qmcal-my-4">
          <div
            className="qmcal-absolute qmcal-inset-0 qmcal-flex qmcal-items-center"
            aria-hidden="true"
          >
            <div className="qmcal-w-full qmcal-border-t qmcal-border-gray-500" />
          </div>
          <div className="qmcal-relative qmcal-flex qmcal-justify-center">
            <span className="qmcal-bg-gray-600 qmcal-px-3 qmcal-text-lg qmcal-font-medium qmcal-text-white qmcal-rounded-xl">
              현금 흐름표
            </span>
          </div>
        </div>
        <CalculatorResults />
      </div>
    </div>
  );
}

export default App;
