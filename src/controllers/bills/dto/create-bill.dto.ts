import { Company } from "src/models/company/interfaces/company.interface";

export interface CreateBillDto {
    userRuc:string
    companyRuc: string;
    releaseDate:string;
    payDay:string;
    totalAmount:number;
    daysPerYear:number;
    tax:number;
    discountDate: string;
    concept:string;
    releaseDateParse:string;
    payDayParse:string;
    discountDateParse:string;
    totalAmmountFinal:number;
    retention:number;
    discount:number;
    taxPeriod:string;
    tep:string;
    company:Company;
    tcea:Number;
}