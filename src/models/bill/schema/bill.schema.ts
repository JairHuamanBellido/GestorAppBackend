import {  Schema} from "mongoose";

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
     taxPeriod:String
     
})