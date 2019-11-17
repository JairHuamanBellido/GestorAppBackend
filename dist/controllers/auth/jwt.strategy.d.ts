import { Strategy } from 'passport-jwt';
import { BillService } from '../../../src/models/bill/bill.service';
declare const JwtStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private billService;
    constructor(billService: BillService);
    validate(payload: any): Promise<{
        userId: any;
        ruc: any;
    }>;
}
export {};
