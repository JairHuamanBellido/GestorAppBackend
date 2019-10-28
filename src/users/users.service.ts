import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { CreateUserDTO } from '../register/dto/user.dto';

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
}
