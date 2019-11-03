"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const register_module_1 = require("./controllers/register/register.module");
const mongoose_1 = require("@nestjs/mongoose");
const login_module_1 = require("./controllers/login/login.module");
const users_module_1 = require("./models/users/users.module");
const auth_module_1 = require("./controllers/auth/auth.module");
const dotenv_1 = require("dotenv");
const bills_module_1 = require("./controllers/bills/bills.module");
const bill_module_1 = require("./models/bill/bill.module");
dotenv_1.config();
console.log(process.env.mongo_server);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            register_module_1.RegisterModule,
            mongoose_1.MongooseModule.forRoot(process.env.mongo_server, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }),
            login_module_1.LoginModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            bills_module_1.BillsModule,
            bill_module_1.BillModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map