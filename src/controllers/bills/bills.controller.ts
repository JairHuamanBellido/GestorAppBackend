import { Controller, Post, Res, Body, Get, UseGuards, Req } from '@nestjs/common';
import { Response } from 'express';
import { BillDTO } from './dto/bill.dto';
import { BillsService } from './bills.service';

import { FinanceResults } from '../../../src/algorithm/FinanceAlgorithm';
import { UsersService } from '../../models/users/users.service';

import { CreateBillDto } from './dto/create-bill.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('bills')
export class BillsController {
    constructor(
        private billsService: BillsService,
        private userService: UsersService,
    ) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('/')
    async findAll(@Res() res: Response, @Req() req) {
        
        const response = await this.billsService.findAllByRuc(req.user.ruc);
        
        
        res.json(response);
    }

    @Post('/')
    async create(@Res() res: Response, @Body() billDTO: BillDTO) {
        //const bill =  await this.billsService.create(billDTO);
        const user =  await this.userService.findByRuc(billDTO.userRuc);

        let results = new FinanceResults(
            billDTO.totalAmount,
            billDTO.tax,
            billDTO.payDay,
            billDTO.discountDate,
            billDTO.releaseDate,
        );

        let bill: CreateBillDto = {
            userRuc: billDTO.userRuc,
            companyRuc: billDTO.companyRuc,
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
        

        user.bills.push(response);
        
        this.userService.updateUser(user);

        

        

        res.json(response);
    }
}
