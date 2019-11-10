import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { BillModule } from '../../../src/models/bill/bill.module';
import {  config} from "dotenv";
config();
@Module({
    providers: [AuthService,JwtStrategy],
    exports: [AuthService],
    imports: [
        UsersModule,
        BillModule,

        JwtModule.register({
            secret: process.env.token_secret,
        }),
    ],
})
export class AuthModule {}
