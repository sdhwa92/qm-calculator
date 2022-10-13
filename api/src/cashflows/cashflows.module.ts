import { Module } from '@nestjs/common';
import { CashflowsService } from './cashflows.service';
import { CashflowsController } from './cashflows.controller';

@Module({
  controllers: [CashflowsController],
  providers: [CashflowsService],
})
export class CashflowsModule {}
