import { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import {
  selectInitialInvestAmount,
  updateInitialInvestAmount,
  selectMinimumAmount,
  selectCurrency,
  availableCurrencies,
} from "../../store/slices/calculatorSlice";

const InvestAmountInput = () => {
  const dispatch = useAppDispatch();
  const initialInvestAmount = useAppSelector(selectInitialInvestAmount);
  const minimumAmount = useAppSelector(selectMinimumAmount);
  const selectedCurrency = useAppSelector(selectCurrency);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    if (amount > minimumAmount) {
      dispatch(updateInitialInvestAmount(amount));
    }
  };

  return (
    <div>
      <label
        htmlFor="investmentAmount"
        className="qmcal-block qmcal-text-base qmcal-font-medium qmcal-text-gray-300"
      >
        투자 금액
      </label>
      <div className="qmcal-relative qmcal-mt-1.5">
        <div className="qmcal-relative qmcal-rounded-md qmcal-shadow-sm">
          <input
            type="number"
            name="investmentAmount"
            id="investmentAmount"
            className="
              qmcal-block 
              qmcal-w-full 
              qmcal-rounded-md 
              qmcal-border-transparent
              qmcal-bg-gray-700 
              qmcal-text-white 
              qmcal-pr-12 
              focus:qmcal-border-white 
              focus:qmcal-outline-none 
              focus:qmcal-ring-1 
              focus:qmcal-ring-white 
              sm:qmcal-text-sm
            "
            defaultValue={initialInvestAmount}
            onChange={onChangeHandler}
          />
          <div className="qmcal-absolute qmcal-inset-y-0 qmcal-right-0 qmcal-flex qmcal-items-center">
            <label htmlFor="currency" className="qmcal-sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="
                qmcal-h-full 
                qmcal-rounded-md 
                qmcal-border-transparent
                focus:qmcal-border-white 
                focus:qmcal-outline-none 
                focus:qmcal-ring-1 
              focus:qmcal-ring-white 
                qmcal-py-0 
                qmcal-pl-2 
                qmcal-pr-7 
                qmcal-bg-gray-700 
                qmcal-text-white 
                sm:qmcal-text-sm
              "
              defaultValue={selectedCurrency}
              disabled
            >
              {availableCurrencies.map((currency) => (
                <option value={currency}>{currency.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestAmountInput;
