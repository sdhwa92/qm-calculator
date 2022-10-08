import { Injectable } from '@nestjs/common';
import { CalculateCashflowDto } from './dto/calculate-cashflow.dto';
import { roundUpDecimals } from 'src/helper';

@Injectable()
export class CashflowsService {
  calculate(calculateCashflowDto: CalculateCashflowDto) {
    let cashflow = {};
    let hashCount = calculateCashflowDto.initialHashCount;
    let accumulatedIncome = 0;
    let count = 0;

    while (accumulatedIncome < calculateCashflowDto.initialInvestmentAmount) {
      const previousAccumulatedIncome = accumulatedIncome;
      const income = roundUpDecimals(
        hashCount * calculateCashflowDto.hashPower,
        2,
      );
      accumulatedIncome = roundUpDecimals(accumulatedIncome + income, 2);

      if (previousAccumulatedIncome === accumulatedIncome) {
        break;
      }

      cashflow = {
        ...cashflow,
        [count]: {
          hash: Math.round(hashCount),
          income,
          accumulatedIncome,
        },
      };

      hashCount = hashCount - hashCount * calculateCashflowDto.decrementRate;

      count += 1;
    }

    return cashflow;
  }
}
