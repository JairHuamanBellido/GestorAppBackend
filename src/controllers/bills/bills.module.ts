import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { BillModule } from '../../models/bill/bill.module';
import { UsersService } from '../../../src/models/users/users.service';
import { UsersModule } from '../../../src/models/users/users.module';
import { CompanyModule } from 'src/models/company/company.module';

@Module({
  providers: [BillsService],
  controllers: [BillsController],
  imports:[BillModule,UsersModule,CompanyModule]

})
export class BillsModule {}
