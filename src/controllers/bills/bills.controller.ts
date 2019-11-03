import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { BillDTO } from './dto/bill.dto';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
    constructor(
        private billsService:BillsService
    ){}

    @Post('/')
    async create( @Res() res:Response, @Body() billDTO:BillDTO){
        
        
        const bill =  await this.billsService.create(billDTO);

        res.json(bill);
    }
}
