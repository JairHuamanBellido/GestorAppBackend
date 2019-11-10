import {  Document } from "mongoose";

export interface User extends Document{
    readonly ruc: string;
    readonly name: string;
    readonly lastName: string;
    readonly username: string;
    readonly password: string;
    readonly age: number;
    
    readonly email: string;
    readonly phone: number;
    readonly address: string;
    readonly district: string;
    readonly companyName:string;
}