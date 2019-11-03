import { Injectable } from '@nestjs/common';
import { BillService } from '../../models/bill/bill.service';
import { BillDTO } from './dto/bill.dto';
import { Bill } from '../../models/bill/interfaces/bill.interface';

@Injectable()
export class BillsService {

    constructor(
        private readonly billService:BillService
    ){}

    async create(billDTO:BillDTO):Promise<Bill>{
        const bill =  await this.billService.create(billDTO);
        return  bill;
    }
}
