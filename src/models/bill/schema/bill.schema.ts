import {  Schema} from "mongoose";
import { CompanySchema } from "../../../models/company/schema/company.schema";

export const BillSchema =  new Schema({
     userRuc:String,
     companyRuc: String,
     releaseDate:String,
     payDay:String,
     totalAmount:Number,
     daysPerYear:Number,
     tax:Number,
     discountDate: String,
     concept:String,
     releaseDateParse:String,
     payDayParse:String,
     discountDateParse:String,
     totalAmmountFinal:Number,
     retention:Number,
     discount:Number,
     taxPeriod:String,
     tep :String,
     company:CompanySchema,
     tcea:Number,
     avatarIcon:String
     
})