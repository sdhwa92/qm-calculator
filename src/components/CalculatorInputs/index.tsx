import { useEffect, ChangeEvent } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAppSelector, useAppDispatch } from "../../store";
import { useDebounceChange } from "../../hooks";
import {
  selectDecrementPercents,
  selectMiningPowers,
  selectCurrency,
  updateInitialInvestAmount,
  updateCurrency,
  selectInitialInvestAmount,
  selectMinimumAmount,
  updateMiningPower,
} from "../../store/slices/calculatorSlice";

function CalculatorInputs() {
  const dispatch = useAppDispatch();
  const { basic, share, accelerated } = useAppSelector(selectDecrementPercents);
  const { accelerated: miningPower } = useAppSelector(selectMiningPowers);
  const selectedCurrency = useAppSelector(selectCurrency);
  const initialInvestAmount = useAppSelector(selectInitialInvestAmount);
  const minimumAmount = useAppSelector(selectMinimumAmount);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.target.name === "amount") {
      const amount = Number(e.target.value);
      if (amount > minimumAmount) {
        dispatch(updateInitialInvestAmount(amount));
      }
    } else if (e.target.name === "miningPower") {
      const power = Number(e.target.value);
      if (power > 0) {
        dispatch(updateMiningPower(power));
      }
    }
  };

  const debounceChangeHandler = useDebounceChange(onChangeHandler, 300, []);

  useEffect(() => {
    return () => {
      debounceChangeHandler.cancel();
    };
  }, []);

  return (
    <div
      className="
          qmcal-mx-auto 
          qmcal-max-w-7xl 
          qmcal-py-16 
          qmcal-px-4 
          sm:qmcal-py-24 
          sm:qmcal-px-6 
          lg:qmcal-flex 
          lg:qmcal-justify-between 
          lg:qmcal-px-8
        "
    >
      <div className="qmcal-max-w-xl">
        <h2 className="qmcal-text-4xl qmcal-font-bold qmcal-tracking-tight qmcal-text-white sm:qmcal-text-5xl lg:qmcal-text-6xl">
          V3 Pro 계산기
        </h2>
        <div className="qmcal-text-gray-400 qmcal-flex qmcal-justify-between">
          <div>
            <p className="qmcal-mt-5 qmcal-text-xl">해시 하루 감소량</p>
            <ul>
              <li>기본해시: {`${basic * 100}`}%</li>
              <li>공유해시: {`${share * 100}`}%</li>
              <li>가속해시: {`${accelerated * 100}`}%</li>
            </ul>
          </div>
          <div>
            <p className="qmcal-mt-5 qmcal-text-xl">가속해시 수익 효율</p>
            <ul>
              <li>1가속해시 채굴량 {`${miningPower}`}USDT/24시간 (고정비율)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="qmcal-w-full qmcal-max-w-xs">
        <div>
          <label
            htmlFor="currency"
            className="qmcal-block qmcal-text-base qmcal-font-medium qmcal-text-gray-300"
          >
            통화
          </label>
          <div className="qmcal-relative qmcal-mt-1.5">
            <select
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
        <div className="qmcal-mt-5">
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
        <div className="qmcal-mt-5">
          <label
            htmlFor="currency"
            className="qmcal-block qmcal-text-base qmcal-font-medium qmcal-text-gray-300"
          >
            1 가속해시 채굴량
          </label>
          <div className="qmcal-relative qmcal-mt-1.5">
            <input
              id="miningPower"
              name="miningPower"
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
              defaultValue={miningPower}
              onChange={debounceChangeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorInputs;
