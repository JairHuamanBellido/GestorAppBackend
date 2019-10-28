import { CreateUserDTO } from './dto/user.dto';
import { User } from '../users/interface/user.interface';
import { UsersService } from '../users/users.service';
export declare class RegisterService {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(createUserDto: CreateUserDTO): Promise<User>;
}
