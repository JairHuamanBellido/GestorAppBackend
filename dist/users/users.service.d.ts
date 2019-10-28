import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUserDTO } from '../register/dto/user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findOne(username: string): Promise<User>;
    createUser(createUser: CreateUserDTO): Promise<User>;
}
