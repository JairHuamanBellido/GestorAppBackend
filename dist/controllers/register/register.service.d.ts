import { CreateUserDTO } from './dto/user.dto';
import { User } from '../../models/users/interface/user.interface';
import { UsersService } from '../../models/users/users.service';
export declare class RegisterService {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(createUserDto: CreateUserDTO): Promise<User>;
}
