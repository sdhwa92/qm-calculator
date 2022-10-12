import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectInitialAccHashAmount,
  updateInitialAccHashAmount,
} from "../../store/slices/calculatorSlice";

const AcceleratedHashAmount = () => {
  const dispatch = useAppDispatch();
  const initialAccHashAmount = useAppSelector(selectInitialAccHashAmount);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    dispatch(updateInitialAccHashAmount(amount));
  };

  return (
    <div>
      <label
        htmlFor="currency"
        className="qmcal-block qmcal-text-base qmcal-font-medium qmcal-text-gray-300"
      >
        가속해시
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
          defaultValue={initialAccHashAmount}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default AcceleratedHashAmount;
