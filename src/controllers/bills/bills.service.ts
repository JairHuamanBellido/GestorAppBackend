import { Injectable } from '@nestjs/common';
import { BillService } from '../../models/bill/bill.service';
import { BillDTO } from './dto/bill.dto';
import { Bill } from '../../models/bill/interfaces/bill.interface';

@Injectable()
export class BillsService {

    constructor(
        private readonly billService:BillService
    ){}

    async create(bill:Bill):Promise<Bill>{
        const newBill =  await this.billService.create(bill);
        return  newBill;
    }
}
