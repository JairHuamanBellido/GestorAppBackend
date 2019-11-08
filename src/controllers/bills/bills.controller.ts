import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { BillDTO } from './dto/bill.dto';
import { BillsService } from './bills.service';
import { dayNumber } from '../../algorithm/DateAlgorithm';
import { FinanceResults } from 'src/algorithm/FinanceAlgorithm';
import { UsersService } from '../../models/users/users.service';
import { User } from 'src/models/users/interface/user.interface';

@Controller('bills')
export class BillsController {
    constructor(
        private billsService: BillsService,
        private userService:UsersService
        ) {}

    @Post('/')
    async create(@Res() res: Response, @Body() billDTO: BillDTO) {
        //const bill =  await this.billsService.create(billDTO);
        const user =  await this.userService.findByRuc("123");

        console.log(user);
       
        
        let results = new FinanceResults(
            billDTO.totalAmount,
            billDTO.tax,
            billDTO.payDay,
            billDTO.discountDate,
            billDTO.releaseDate,
        );
        
        res.json({ data: true });
    }
}
