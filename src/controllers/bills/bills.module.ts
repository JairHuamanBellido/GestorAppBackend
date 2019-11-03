import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { BillModule } from '../../models/bill/bill.module';

@Module({
  providers: [BillsService],
  controllers: [BillsController],
  imports:[BillModule]

})
export class BillsModule {}
