import { UsersService } from '../../models/users/users.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    validateUser(username: string, password: string): Promise<any>;
}
