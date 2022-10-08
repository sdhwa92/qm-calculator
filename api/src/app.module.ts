import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashflowsController } from './cashflows/cashflows.controller';
import { CashflowsService } from './cashflows/cashflows.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController, CashflowsController],
  providers: [AppService, CashflowsService],
})
export class AppModule {}
