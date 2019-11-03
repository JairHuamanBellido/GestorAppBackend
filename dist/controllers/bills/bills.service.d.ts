import { BillService } from '../../models/bill/bill.service';
import { BillDTO } from './dto/bill.dto';
import { Bill } from '../../models/bill/interfaces/bill.interface';
export declare class BillsService {
    private readonly billService;
    constructor(billService: BillService);
    create(billDTO: BillDTO): Promise<Bill>;
}
