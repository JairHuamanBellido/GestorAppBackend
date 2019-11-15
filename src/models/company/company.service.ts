import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './interfaces/company.interface';
import { CreateCompanyDto } from 'src/controllers/bills/dto/create-company.dto';

@Injectable()
export class CompanyService {

    constructor(@InjectModel('Company') private readonly companyModel:Model<Company>){}



    async create(company:CreateCompanyDto):Promise<Company>{
        

        const newCompany =  new this.companyModel(company);
        return newCompany.save();
    }

    async findByRuc(ruc:string): Promise<any>{
        const found =  await this.companyModel.findOne({ruc:ruc});
        if(found === null){
            return false;
        }
        else{
            return found;
        }
    }



}
