import { Schema } from 'mongoose';
import { BillSchema } from '../../../models/bill/schema/bill.schema';

import { CompanySchema } from 'src/models/company/schema/company.schema';

export const UserSchema = new Schema({
    ruc: String,
    name: String,
    lastName: String,
    username: String,
    password: String,
    age: Number,
    companyName:String,
    email: String,
    phone: Number,
    address: String,
    district: String,
    bills:[BillSchema],
    companies:[CompanySchema]
});
