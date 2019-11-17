"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.CompanySchema = new mongoose_1.Schema({
    ruc: String,
    name: String,
    address: String,
    district: String,
    avatarIcon: String
});
//# sourceMappingURL=company.schema.js.map