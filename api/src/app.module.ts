import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashflowsModule } from './cashflows/cashflows.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist'),
      exclude: ['/api*'],
    }),
    CashflowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
