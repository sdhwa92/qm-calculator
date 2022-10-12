import { FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import {
  selectDecrementPercents,
  selectMiningPowers,
} from "../../store/slices/calculatorSlice";
import AcceleratedHashAmount from "./AcceleratedHashAmount";
import InvestAmountInput from "./InvestAmountInput";
import MiningPowerInput from "./MiningPowerInput";
import { fetchCashflow } from "../../store/slices/calculatorSlice";

function CalculatorInputs() {
  const dispatch = useAppDispatch();

  const { basic, share, accelerated } = useAppSelector(selectDecrementPercents);
  const { accelerated: miningPower } = useAppSelector(selectMiningPowers);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchCashflow());
  };

  return (
    <div
      className="
          qmcal-mx-auto 
          qmcal-max-w-7xl 
          qmcal-py-16 
          qmcal-px-4 
          sm:qmcal-py-14 
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
        <form onSubmit={handleOnSubmit}>
          <div>
            <InvestAmountInput />
          </div>
          <div className="qmcal-mt-5">
            <AcceleratedHashAmount />
          </div>
          <div className="qmcal-mt-5">
            <MiningPowerInput />
          </div>
          <div className="qmcal-mt-5">
            <div>
              <button
                type="submit"
                className="
                qmcal-inline-flex
                qmcal-items-center
                qmcal-rounded-md
                qmcal-border
                qmcal-bg-white
                qmcal-px-4
                qmcal-py-2
                qmcal-text-sm
                qmcal-font-medium
                qmcal-text-gray-700
                hover:qmcal-bg-gray-300
              "
              >
                계산
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CalculatorInputs;
