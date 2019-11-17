"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bills_service_1 = require("./bills.service");
const bills_controller_1 = require("./bills.controller");
const bill_module_1 = require("../../models/bill/bill.module");
const users_module_1 = require("../../../src/models/users/users.module");
const company_module_1 = require("../../models/company/company.module");
let BillsModule = class BillsModule {
};
BillsModule = __decorate([
    common_1.Module({
        providers: [bills_service_1.BillsService],
        controllers: [bills_controller_1.BillsController],
        imports: [bill_module_1.BillModule, users_module_1.UsersModule, company_module_1.CompanyModule]
    })
], BillsModule);
exports.BillsModule = BillsModule;
//# sourceMappingURL=bills.module.js.map