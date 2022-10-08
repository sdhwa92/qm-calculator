import { ApiProperty } from '@nestjs/swagger';

export class CalculateCashflowDto {
  @ApiProperty()
  initialInvestmentAmount: number;

  @ApiProperty()
  initialHashCount: number;

  @ApiProperty()
  hashPower: number;

  @ApiProperty()
  decrementRate: number;
}
