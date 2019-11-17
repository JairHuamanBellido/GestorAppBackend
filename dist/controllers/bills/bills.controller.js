"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bill_dto_1 = require("./dto/bill.dto");
const bills_service_1 = require("./bills.service");
const FinanceAlgorithm_1 = require("../../../src/algorithm/FinanceAlgorithm");
const users_service_1 = require("../../models/users/users.service");
const passport_1 = require("@nestjs/passport");
const company_service_1 = require("../../models/company/company.service");
const DICCIONARY_NOMINAL = {
    Diario: 1,
    Quincenal: 15,
    Mensual: 30,
    Bimestral: 60,
    Trimestral: 90,
    Cuatrimestral: 120,
    Semestral: 180,
};
let BillsController = class BillsController {
    constructor(billsService, userService, companyService) {
        this.billsService = billsService;
        this.userService = userService;
        this.companyService = companyService;
    }
    findAll(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.billsService.findAllByRuc(req.user.ruc);
            res.json(response);
        });
    }
    create(res, billDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findByRuc(billDTO.userRuc);
            let companySelect;
            let alternate = billDTO.tax;
            let TasaPeriodo = billDTO.tep;
            console.log(billDTO.typeTax);
            if (billDTO.typeTax === 'Nominal') {
                let a = 1 +
                    billDTO.tax /
                        100 /
                        (DICCIONARY_NOMINAL[billDTO.tep] /
                            DICCIONARY_NOMINAL[billDTO.valueP]);
                let tea = (Math.pow(a, 360 / DICCIONARY_NOMINAL[billDTO.valueP]) - 1) *
                    100;
                alternate = tea;
                console.log('asd');
                TasaPeriodo = 'Anual';
            }
            let newCompany = {
                ruc: billDTO.companyRuc,
                name: billDTO.nameCompany,
                address: billDTO.addressCompany,
                district: billDTO.districtCompany,
                avatarIcon: billDTO.avatarIcon
            };
            let results = new FinanceAlgorithm_1.FinanceResults(billDTO.totalAmount, alternate, billDTO.payDay, billDTO.discountDate, billDTO.releaseDate, TasaPeriodo);
            const foundCompany = yield this.companyService.findByRuc(billDTO.companyRuc);
            console.log(foundCompany);
            if (foundCompany === false) {
                const responseCompany = yield this.companyService.create(newCompany);
                companySelect = responseCompany;
                user.companies.push(companySelect);
            }
            else {
                companySelect = foundCompany;
            }
            let bill = {
                userRuc: billDTO.userRuc,
                companyRuc: billDTO.companyRuc,
                releaseDate: billDTO.releaseDate,
                payDay: billDTO.payDay,
                totalAmount: results.totalAmmount,
                daysPerYear: billDTO.daysPerYear,
                tax: billDTO.tax,
                discountDate: billDTO.discountDate,
                concept: billDTO.concept,
                releaseDateParse: 'string',
                payDayParse: 'string',
                discountDateParse: 'string',
                totalAmmountFinal: results.totalAmmountWithDiscount,
                retention: results.retention,
                discount: results.discount,
                taxPeriod: 'TEA',
                tep: billDTO.tep,
                company: companySelect,
                tcea: results.TCEA,
                avatarIcon: billDTO.avatarIcon,
            };
            const response = yield this.billsService.create(bill);
            user.bills.push(response);
            this.userService.updateUser(user);
            res.json(response);
        });
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('/'),
    __param(0, common_1.Res()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "findAll", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, bill_dto_1.BillDTO]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "create", null);
BillsController = __decorate([
    common_1.Controller('bills'),
    __metadata("design:paramtypes", [bills_service_1.BillsService,
        users_service_1.UsersService,
        company_service_1.CompanyService])
], BillsController);
exports.BillsController = BillsController;
//# sourceMappingURL=bills.controller.js.map