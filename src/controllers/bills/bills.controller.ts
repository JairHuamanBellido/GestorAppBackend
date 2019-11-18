import {
    Controller,
    Post,
    Res,
    Body,
    Get,
    UseGuards,
    Req,
} from '@nestjs/common';
import { Response } from 'express';
import { BillDTO } from './dto/bill.dto';
import { BillsService } from './bills.service';

import { FinanceResults } from '../../../src/algorithm/FinanceAlgorithm';
import { UsersService } from '../../models/users/users.service';

import { CreateBillDto } from './dto/create-bill.dto';
import { AuthGuard } from '@nestjs/passport';

import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyService } from '../../models/company/company.service';

const DICCIONARY_NOMINAL = {
    "Diario": 1,
    "Quincenal": 15,
    "Mensual": 30,
    "Bimestral": 60,
    "Trimestral": 90,
    "Cuatrimestral": 120,
    "Semestral": 180,
    "Anual": 360
};

@Controller('bills')
export class BillsController {
    constructor(
        private billsService: BillsService,
        private userService: UsersService,
        private companyService: CompanyService,
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
        const user = await this.userService.findByRuc(billDTO.userRuc);

        let companySelect;
        let alternate = billDTO.tax;
        let TasaPeriodo = billDTO.tep;
        console.log(billDTO);
        console.log(billDTO.typeTax);
        if (billDTO.typeTax === 'Nominal') {
            console.log("tax: "+ billDTO.tax);
            console.log("tep: " + billDTO.tep);
            
            let a =1 +billDTO.tax /100 /(DICCIONARY_NOMINAL[billDTO.tep] /DICCIONARY_NOMINAL[billDTO.valueP]);
            let tea = (Math.pow(a, 360 / DICCIONARY_NOMINAL[billDTO.valueP]) -1 )* 100
            console.log("Tea: " +tea);
            alternate = tea;
            
            TasaPeriodo = 'Anual';
        }

        let newCompany: CreateCompanyDto = {
            ruc: billDTO.companyRuc,
            name: billDTO.nameCompany,
            address: billDTO.addressCompany,
            district: billDTO.districtCompany,
            avatarIcon: billDTO.avatarIcon,
        };
        let results = new FinanceResults(
            billDTO.totalAmount* 1.0,
            alternate,
            billDTO.payDay,
            billDTO.discountDate,
            billDTO.releaseDate,
            TasaPeriodo,
        );

        const foundCompany = await this.companyService.findByRuc(
            billDTO.companyRuc,
        );
        console.log(foundCompany);
        if (foundCompany === false) {
            const responseCompany = await this.companyService.create(
                newCompany,
            );
            companySelect = responseCompany;
            user.companies.push(companySelect);
        } else {
            companySelect = foundCompany;
        }

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
            tep: billDTO.tep,
            company: companySelect,
            tcea: results.TCEA,
            avatarIcon: billDTO.avatarIcon,
        };

        const response = await this.billsService.create(bill);

        user.bills.push(response);

        this.userService.updateUser(user);

        res.json(response);
    }
}
