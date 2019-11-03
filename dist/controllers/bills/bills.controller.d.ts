import { Response } from 'express';
import { BillDTO } from './dto/bill.dto';
import { BillsService } from './bills.service';
export declare class BillsController {
    private billsService;
    constructor(billsService: BillsService);
    create(res: Response, billDTO: BillDTO): Promise<void>;
}
