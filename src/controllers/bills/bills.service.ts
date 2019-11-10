import { Injectable } from '@nestjs/common';
import { BillService } from '../../models/bill/bill.service';
import { BillDTO } from './dto/bill.dto';
import { Bill } from '../../models/bill/interfaces/bill.interface';
import { CreateBillDto } from './dto/create-bill.dto';

@Injectable()
export class BillsService {

    constructor(
        private readonly billService:BillService
    ){}

    async create(bill:CreateBillDto):Promise<Bill>{
        const newBill =  await this.billService.create(bill);
        return  newBill;
    }

    async findAllByRuc(ruc:string):Promise<Bill[]>{
        return this.billService.findAllByRuc(ruc);
    }
}

