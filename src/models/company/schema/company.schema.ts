import {  Schema} from "mongoose";

export const CompanySchema =  new Schema({
    ruc:String,
    name:String,
    address:String,
    district:String
})