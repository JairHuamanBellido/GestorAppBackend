import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { BillService } from '../../../src/models/bill/bill.service';
import {  config} from "dotenv";
config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private billService:BillService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.token_secret,
        });
    }

    async validate(payload: any) {
        
        return { userId: payload.username, ruc: payload.ruc };
    }
    
}
