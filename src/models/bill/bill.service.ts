import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bill } from './interfaces/bill.interface';
import { BillDTO } from '../../controllers/bills/dto/bill.dto';

@Injectable()
export class BillService {
    constructor(@InjectModel('Bill') private readonly billModel: Model<Bill>) {}

    async create(billDTO: BillDTO): Promise<Bill> {
        const bill = new this.billModel(billDTO);
        return bill.save();
    }
}
