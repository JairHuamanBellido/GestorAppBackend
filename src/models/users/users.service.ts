import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { CreateUserDTO } from '../../controllers/register/dto/user.dto';

import { Bill } from '../bill/interfaces/bill.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findOne(username: string): Promise<User> {
        return await this.userModel.findOne({ username: username });
    }

    async createUser(createUser: CreateUserDTO): Promise<User> {
        const user = new this.userModel(createUser);
        return user.save();
    }

    async validateEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email: email });
    }

    async findByRuc(ruc: string): Promise<User> {
        const found = await this.userModel.findOne({ ruc: ruc });
        return found;
    }

    async updateUser (user:any):Promise<any>
    {   
        return await this.userModel.updateOne({ruc:user.ruc},user);
        
    }
}
