import { Document } from "mongoose";
export interface Company extends Document {
    readonly ruc: string;
    readonly name: string;
    readonly address: string;
    readonly district: string;
    readonly avatarIcon: string;
}
