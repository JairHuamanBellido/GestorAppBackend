import { BillService } from '../../models/bill/bill.service';
import { Bill } from '../../models/bill/interfaces/bill.interface';
import { CreateBillDto } from './dto/create-bill.dto';
export declare class BillsService {
    private readonly billService;
    constructor(billService: BillService);
    create(bill: CreateBillDto): Promise<Bill>;
    findAllByRuc(ruc: string): Promise<Bill[]>;
}
