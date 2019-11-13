import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bill } from './interfaces/bill.interface';
import { BillDTO } from '../../controllers/bills/dto/bill.dto';
import { CreateBillDto } from '../../../src/controllers/bills/dto/create-bill.dto';

@Injectable()
export class BillService {
    constructor(@InjectModel('Bill') private readonly billModel: Model<Bill>) {}

    async create(bill: CreateBillDto): Promise<Bill> {
        const newBill = new this.billModel(bill);
        
        return newBill.save();
    }

    async findAllByRuc(ruc:string): Promise<Bill[]>{
        return this.billModel.find({userRuc:ruc});
    }
}
