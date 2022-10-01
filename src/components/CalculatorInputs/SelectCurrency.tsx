import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  updateCurrency,
  selectCurrency,
} from "../../store/slices/calculatorSlice";

const SelectCurrency = () => {
  const dispatch = useAppDispatch();

  const selectedCurrency = useAppSelector(selectCurrency);

  return (
    <div>
      <label
        htmlFor="currency"
        className="qmcal-block qmcal-text-base qmcal-font-medium qmcal-text-gray-300"
      >
        통화
      </label>
      <div className="qmcal-relative qmcal-mt-1.5">
        <select
          disabled
          id="currency"
          name="currency"
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
          defaultValue={selectedCurrency}
          onChange={(e) => {
            console.log("selected: ", e.target.value);
            dispatch(updateCurrency(e.target.value));
          }}
        >
          <option value={"won"}>한국 원화 (WON)</option>
          <option value={"usd"}>미국 달러 (USD)</option>
          <option value={"usdt"}>테더 (USDT)</option>
          <option value={"aud"}>호주 달러 (AUD)</option>
          <option value={"cad"}>캐나다 달러 (CAD)</option>
        </select>
        <div className="qmcal-pointer-events-none qmcal-absolute qmcal-inset-y-0 qmcal-right-0 qmcal-flex qmcal-items-center qmcal-px-2">
          <ChevronDownIcon
            className="qmcal-h-4 qmcal-w-4 qmcal-text-white"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectCurrency;
