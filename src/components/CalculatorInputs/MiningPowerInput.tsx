import { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import { useDebounceChange } from "../../hooks";
import {
  selectMiningPowers,
  updateMiningPower,
} from "../../store/slices/calculatorSlice";

const MiningPowerInput = () => {
  const dispatch = useAppDispatch();

  const { accelerated: miningPower } = useAppSelector(selectMiningPowers);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const power = Number(e.target.value);
    if (power > 0) {
      dispatch(updateMiningPower(power));
    }
  };

  const debounceChangeHandler = useDebounceChange(onChangeHandler, 300, []);

  return (
    <div>
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
  );
};

export default MiningPowerInput;
