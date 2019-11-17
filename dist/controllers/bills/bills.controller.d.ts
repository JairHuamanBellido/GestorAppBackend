import { Response } from 'express';
import { BillDTO } from './dto/bill.dto';
import { BillsService } from './bills.service';
import { UsersService } from '../../models/users/users.service';
import { CompanyService } from '../../models/company/company.service';
export declare class BillsController {
    private billsService;
    private userService;
    private companyService;
    constructor(billsService: BillsService, userService: UsersService, companyService: CompanyService);
    findAll(res: Response, req: any): Promise<void>;
    create(res: Response, billDTO: BillDTO): Promise<void>;
}
