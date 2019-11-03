import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillSchema } from './schema/bill.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Bill', schema: BillSchema }]),
    ],
    exports: [BillService],
    providers: [BillService],
})
export class BillModule {}
