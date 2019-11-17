"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const company_schema_1 = require("../../../models/company/schema/company.schema");
exports.BillSchema = new mongoose_1.Schema({
    userRuc: String,
    companyRuc: String,
    releaseDate: String,
    payDay: String,
    totalAmount: Number,
    daysPerYear: Number,
    tax: Number,
    discountDate: String,
    concept: String,
    releaseDateParse: String,
    payDayParse: String,
    discountDateParse: String,
    totalAmmountFinal: Number,
    retention: Number,
    discount: Number,
    taxPeriod: String,
    tep: String,
    company: company_schema_1.CompanySchema,
    tcea: Number,
    avatarIcon: String
});
//# sourceMappingURL=bill.schema.js.map