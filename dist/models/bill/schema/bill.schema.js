"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.BillSchema = new mongoose_1.Schema({
    userId: Number,
    companyId: Number,
    releaseDate: String,
    payDay: String,
    totalAmount: Number,
    daysPerYear: Number,
    tax: Number,
    discountDate: String,
    concept: String
});
//# sourceMappingURL=bill.schema.js.map