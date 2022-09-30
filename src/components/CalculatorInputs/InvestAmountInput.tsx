import { ChangeEvent, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import { useDebounceChange } from "../../hooks";
import {
  selectInitialInvestAmount,
  updateMiningPower,
  updateInitialInvestAmount,
  selectMinimumAmount,
} from "../../store/slices/calculatorSlice";

const InvestAmountInput = () => {
  const dispatch = useAppDispatch();
  const initialInvestAmount = useAppSelector(selectInitialInvestAmount);
  const minimumAmount = useAppSelector(selectMinimumAmount);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    if (amount > minimumAmount) {
      dispatch(updateInitialInvestAmount(amount));
    }
  };

  const debounceChangeHandler = useDebounceChange(onChangeHandler, 300, []);

  useEffect(() => {
    return () => {
      debounceChangeHandler.cancel();
    };
  }, []);

  return (
    <div>
      <label
        htmlFor="currency"
        className="qmcal-block qmcal-text-base qmcal-font-medium qmcal-text-gray-300"
      >
        투자 금액
      </label>
      <div className="qmcal-relative qmcal-mt-1.5">
        <input
          id="amount"
          name="amount"
          type="number"
          className="
                  qmcal-block 
                  qmcal-w-full 
                  qmcal-appearance-none 
                  qmcal-rounded-md 
                  qmcal-border 
                  qmcal-border-transparent 
                  qmcal-bg-gray-700 
                  qmcal-bg-none 
                  qmcal-py-2 
                  qmcal-pl-3 
                  qmcal-pr-10 
                  qmcal-text-base 
                  qmcal-text-white 
                  focus:qmcal-border-white 
                  focus:qmcal-outline-none 
                  focus:qmcal-ring-1 
                  focus:qmcal-ring-white 
                  sm:qmcal-text-sm
                "
          defaultValue={initialInvestAmount}
          onChange={debounceChangeHandler}
        />
      </div>
    </div>
  );
};

export default InvestAmountInput;
