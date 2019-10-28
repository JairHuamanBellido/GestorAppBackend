import { Injectable } from '@nestjs/common';



import { CreateUserDTO } from './dto/user.dto';
import { User } from '../users/interface/user.interface';
import { UsersService } from '../users/users.service';



@Injectable()
export class RegisterService {
    constructor(
         private readonly userService:UsersService
    ) {}

    async createUser(createUserDto: CreateUserDTO): Promise<User> {
        const user =  await this.userService.createUser(createUserDto);
        return user;
    }
}
