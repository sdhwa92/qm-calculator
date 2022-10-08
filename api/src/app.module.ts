import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashflowsController } from './cashflows/cashflows.controller';
import { CashflowsService } from './cashflows/cashflows.service';

@Module({
  imports: [],
  controllers: [AppController, CashflowsController],
  providers: [AppService, CashflowsService],
})
export class AppModule {}
