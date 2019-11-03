import {  Schema} from "mongoose";
export const BillSchema =  new Schema({
     userId:Number,
     companyId: Number,
     releaseDate:String,
     payDay:String,
     totalAmount:Number,
     daysPerYear:Number,
     tax:Number,
     discountDate: String,
     concept:String
})