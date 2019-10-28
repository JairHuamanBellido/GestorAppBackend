import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    ruc: String,
    name: String,
    lastName: String,
    username: String,
    password: String,
    age: Number,
    
    email: String,
    phone: Number,
    address: String,
    district: String,
});
