import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function InvestmentDetails() {
  return (
    <div className="qmcal-bg-gray-800">
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
            초기 투자 금액 설정
          </h2>
          <div className="qmcal-text-gray-400 qmcal-flex qmcal-justify-between">
            <div>
              <p className="qmcal-mt-5 qmcal-text-xl">해시 하루 감소량</p>
              <ul>
                <li>기본해시: 0.5%</li>
                <li>공유해시: 0.5%</li>
                <li>가속해시: 1.5%</li>
              </ul>
            </div>
            <div>
              <p className="qmcal-mt-5 qmcal-text-xl">가속해시 수익 효율</p>
              <ul>
                <li>1가속해시 채굴량 0.0388USDT/24시간 (고정비율)</li>
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
                className="qmcal-block qmcal-w-full qmcal-appearance-none qmcal-rounded-md qmcal-border qmcal-border-transparent qmcal-bg-gray-700 qmcal-bg-none qmcal-py-2 qmcal-pl-3 qmcal-pr-10 qmcal-text-base qmcal-text-white focus:qmcal-border-white focus:qmcal-outline-none focus:qmcal-ring-1 focus:qmcal-ring-white sm:qmcal-text-sm"
                defaultValue="원화 (WON)"
              >
                <option>한국 원화 (WON)</option>
                <option>미국 달러 (USD)</option>
                <option>테더 (USDT)</option>
                <option>호주 달러 (AUD)</option>
                <option>캐나다 달러 (CAD)</option>
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
                type="text"
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentDetails;
