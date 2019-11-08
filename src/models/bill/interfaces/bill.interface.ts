import {  Document} from "mongoose";

export interface Bill extends Document{
    readonly userId:number
    readonly companyId: number;
    readonly releaseDate:string;
    readonly payDay:string;
    readonly totalAmount:number;
    readonly daysPerYear:number;
    readonly tax:number;
    readonly discountDate: string;
    readonly concept:string;
    readonly releaseDateParse:string;
    readonly payDayParse:string;
    readonly discountDateParse:string;

}