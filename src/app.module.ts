import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './controllers/register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './controllers/login/login.module';
import { UsersModule } from './models/users/users.module';
import { AuthModule } from './controllers/auth/auth.module';
import { config } from 'dotenv';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { BillsModule } from './controllers/bills/bills.module';
import { BillModule } from './models/bill/bill.module';
import { CompanyService } from './models/company/company.service';
import { CompanyModule } from './models/company/company.module';

config();

@Module({
    imports: [
        RegisterModule,

        MongooseModule.forRoot(process.env.mongo_server, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),

        LoginModule,

        AuthModule,

        UsersModule,

        BillsModule,

        BillModule,

        CompanyModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
