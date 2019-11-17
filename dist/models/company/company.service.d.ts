import { Model } from 'mongoose';
import { Company } from './interfaces/company.interface';
import { CreateCompanyDto } from '../../controllers/bills/dto/create-company.dto';
export declare class CompanyService {
    private readonly companyModel;
    constructor(companyModel: Model<Company>);
    create(company: CreateCompanyDto): Promise<Company>;
    findByRuc(ruc: string): Promise<any>;
}
