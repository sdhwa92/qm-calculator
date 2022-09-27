import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store";
import {
  selectTotalHashCount,
  selectDecrementPercents,
  selectMiningPowers,
  selectInitialInvestAmount,
  updateHashflow,
  selectHashflow,
} from "../store/slices/calculatorSlice";
import { decrementHash } from "../services/calculatorService";
import { getNumberOfDaysAfterFromADate } from "../services/dayJsService";

const CalculatorResults = () => {
  const dispatch = useAppDispatch();
  const { accelerated: totalAccHashCount } =
    useAppSelector(selectTotalHashCount);
  const { accelerated: accDecrementRate } = useAppSelector(
    selectDecrementPercents
  );
  const { accelerated: accHashMiningPower } =
    useAppSelector(selectMiningPowers);

  const initialAmount = useAppSelector(selectInitialInvestAmount);

  const hashflow = useAppSelector(selectHashflow);

  useEffect(() => {
    dispatch(
      updateHashflow(
        decrementHash(
          initialAmount,
          totalAccHashCount,
          accDecrementRate,
          accHashMiningPower
        )
      )
    );
  }, [
    dispatch,
    initialAmount,
    totalAccHashCount,
    accDecrementRate,
    accHashMiningPower,
  ]);

  const renderHashAndIncome = (
    {
      hashAmount,
      income,
      accumulatedIncome,
    }: {
      hashAmount: number;
      income: number;
      accumulatedIncome: number;
    },
    index: number
  ) => {
    return (
      <tr
        key={hashAmount}
        className={index % 2 === 0 ? undefined : "qmcal-bg-slate-700"}
      >
        <td className="qmcal-whitespace-nowrap qmcal-py-4 qmcal-pl-4 qmcal-pr-3 qmcal-text-sm qmcal-text-gray-50 sm:qmcal-pl-6">
          {index}
        </td>
        <td className="qmcal-whitespace-nowrap qmcal-py-4 qmcal-pl-4 qmcal-text-sm qmcal-text-gray-50">
          {getNumberOfDaysAfterFromADate(index)}
        </td>
        <td className="qmcal-whitespace-nowrap qmcal-py-4 qmcal-pl-4 qmcal-text-sm qmcal-text-gray-50">
          {hashAmount}
        </td>
        <td className="qmcal-whitespace-nowrap qmcal-px-3 qmcal-py-4 qmcal-text-sm qmcal-text-gray-50">
          {income}
        </td>
        <td className="qmcal-whitespace-nowrap qmcal-px-3 qmcal-py-4 qmcal-text-sm qmcal-text-gray-50">
          {accumulatedIncome}
        </td>
      </tr>
    );
  };

  return (
    <div className="qmcal-pb-10">
      <div className="qmcal-px-4 sm:qmcal-px-6 lg:qmcal-px-8">
        <div className="sm:qmcal-flex sm:qmcal-items-center">
          <div className="sm:qmcal-flex-auto">
            <h1 className="qmcal-text-xl qmcal-font-semibol">투자현금흐름표</h1>
            <p className="qmcal-mt-2 qmcal-text-sm qmcal-text-gray-200">
              <strong>{initialAmount}</strong> 를 투자 후 매일{" "}
              <strong>가속해시</strong>를 통해 채굴하여 얻은 수익을 모두 회수
              했을때 <strong>{Object.keys(hashflow).length - 1}일</strong> 후{" "}
              <strong>
                {getNumberOfDaysAfterFromADate(
                  Object.keys(hashflow).length - 1
                )}
              </strong>
              이 손익분기 일 입니다.
            </p>
            <p className="qmcal-mt-2 qmcal-text-sm qmcal-text-gray-200">
              *기본해시와 공유해시를 통해 채굴한 수익은 고려하지 않았습니다.
            </p>
          </div>
        </div>
        <div className="qmcal-mt-8 qmcal-flex qmcal-flex-col">
          <div className="qmcal--my-2 qmcal--mx-4 qmcal-overflow-x-auto sm:qmcal--mx-6 lg:qmcal--mx-8">
            <div className="qmcal-inline-block qmcal-min-w-full qmcal-py-2 qmcal-align-middle md:qmcal-px-6 lg:qmcal-px-8">
              <div className="qmcal-overflow-hidden qmcal-shadow qmcal-ring-1 qmcal-ring-black qmcal-ring-opacity-5 md:qmcal-rounded-lg">
                <table className="qmcal-min-w-full qmcal-divide-y qmcal-divide-gray-900">
                  <thead className="qmcal-bg-slate-900">
                    <tr>
                      <th
                        scope="col"
                        className="
                          qmcal-py-3.5 
                          qmcal-pl-4 
                          qmcal-pr-3 
                          qmcal-text-left 
                          qmcal-text-sm 
                          qmcal-font-semibold 
                          qmcal-text-gray-50 
                          sm:qmcal-pl-6
                        "
                      >
                        일 수
                      </th>
                      <th
                        scope="col"
                        className="
                          qmcal-px-3 
                          qmcal-py-3.5 
                          qmcal-text-left 
                          qmcal-text-sm 
                          qmcal-font-semibold 
                          qmcal-text-gray-50
                        "
                      >
                        날짜
                      </th>
                      <th
                        scope="col"
                        className="
                          qmcal-px-3 
                          qmcal-py-3.5 
                          qmcal-text-left 
                          qmcal-text-sm 
                          qmcal-font-semibold 
                          qmcal-text-gray-50
                        "
                      >
                        가속 해시
                      </th>
                      <th
                        scope="col"
                        className="
                          qmcal-px-3 
                          qmcal-py-3.5 
                          qmcal-text-left 
                          qmcal-text-sm 
                          qmcal-font-semibold 
                          qmcal-text-gray-50
                        "
                      >
                        수입 (USDT)
                      </th>
                      <th
                        scope="col"
                        className="
                          qmcal-px-3 
                          qmcal-py-3.5 
                          qmcal-text-left 
                          qmcal-text-sm 
                          qmcal-font-semibold 
                          qmcal-text-gray-50
                        "
                      >
                        누적 수입 (USDT)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="qmcal-bg-slate-600">
                    {Object.values(hashflow).length > 0 &&
                      Object.values(hashflow).map((value, i) =>
                        renderHashAndIncome(value, i)
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResults;
