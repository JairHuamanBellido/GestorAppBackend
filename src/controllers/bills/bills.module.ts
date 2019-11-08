import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { BillModule } from '../../models/bill/bill.module';
import { UsersService } from 'src/models/users/users.service';
import { UsersModule } from 'src/models/users/users.module';

@Module({
  providers: [BillsService],
  controllers: [BillsController],
  imports:[BillModule,UsersModule]

})
export class BillsModule {}
