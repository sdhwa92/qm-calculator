import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CashflowsService } from './cashflows.service';
import { CalculateCashflowDto } from './dto/calculate-cashflow.dto';

@Controller('cashflows')
@ApiTags('cashflow')
export class CashflowsController {
  constructor(private cashflowService: CashflowsService) {}

  @Post('create')
  create(@Body() calculateCashflowDto: CalculateCashflowDto) {
    return this.cashflowService.calculate(calculateCashflowDto);
  }
}
