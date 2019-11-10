import { Controller, Post, Res, Body, Get } from '@nestjs/common';
import { Response } from 'express';
import { BillDTO } from './dto/bill.dto';
import { BillsService } from './bills.service';
import { dayNumber } from '../../algorithm/DateAlgorithm';
import { FinanceResults } from 'src/algorithm/FinanceAlgorithm';
import { UsersService } from '../../models/users/users.service';
import { User } from 'src/models/users/interface/user.interface';
import { Bill } from 'src/models/bill/interfaces/bill.interface';
import { CreateBillDto } from './dto/create-bill.dto';

@Controller('bills')
export class BillsController {
    constructor(
        private billsService: BillsService,
        private userService: UsersService,
    ) {}

    @Get('/')
    async findAll(@Res() res: Response) {
        const response = await this.billsService.findAll();
        console.log(response);
        res.json(this.billsService.findAll());
    }

    @Post('/')
    async create(@Res() res: Response, @Body() billDTO: BillDTO) {
        //const bill =  await this.billsService.create(billDTO);
        const user = await this.userService.findByRuc('123');

        console.log(user);

        let results = new FinanceResults(
            billDTO.totalAmount,
            billDTO.tax,
            billDTO.payDay,
            billDTO.discountDate,
            billDTO.releaseDate,
        );

        let bill: CreateBillDto = {
            userId: billDTO.userId,
            companyId: billDTO.companyId,
            releaseDate: billDTO.releaseDate,
            payDay: billDTO.payDay,
            totalAmount: results.totalAmmount,
            daysPerYear: billDTO.daysPerYear,
            tax: billDTO.tax,
            discountDate: billDTO.discountDate,
            concept: billDTO.concept,
            releaseDateParse: 'string',
            payDayParse: 'string',
            discountDateParse: 'string',
            totalAmmountFinal: results.totalAmmountWithDiscount,
            retention: results.retention,
            discount: results.discount,
            taxPeriod: 'TEA',
        };

        const response = await this.billsService.create(bill);
        //console.log(results);

        res.json(response);
    }
}
