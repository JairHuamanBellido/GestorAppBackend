"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bill_schema_1 = require("../../../models/bill/schema/bill.schema");
const company_schema_1 = require("src/models/company/schema/company.schema");
exports.UserSchema = new mongoose_1.Schema({
    ruc: String,
    name: String,
    lastName: String,
    username: String,
    password: String,
    age: Number,
    companyName: String,
    email: String,
    phone: Number,
    address: String,
    district: String,
    bills: [bill_schema_1.BillSchema],
    companies: [company_schema_1.CompanySchema]
});
//# sourceMappingURL=user.schema.js.map