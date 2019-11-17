import { Model } from 'mongoose';
import { Bill } from './interfaces/bill.interface';
import { CreateBillDto } from '../../../src/controllers/bills/dto/create-bill.dto';
export declare class BillService {
    private readonly billModel;
    constructor(billModel: Model<Bill>);
    create(bill: CreateBillDto): Promise<Bill>;
    findAllByRuc(ruc: string): Promise<Bill[]>;
}
