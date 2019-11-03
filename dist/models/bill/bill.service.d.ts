import { Model } from 'mongoose';
import { Bill } from './interfaces/bill.interface';
import { BillDTO } from '../../controllers/bills/dto/bill.dto';
export declare class BillService {
    private readonly billModel;
    constructor(billModel: Model<Bill>);
    create(billDTO: BillDTO): Promise<Bill>;
}
