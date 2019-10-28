import { UserAuthDTO } from './dto/user-auth';
import { AuthService } from '../auth/auth.service';
import { Response } from 'express';
export declare class LoginController {
    private readonly authService;
    constructor(authService: AuthService);
    authenticate(res: Response, userAuth: UserAuthDTO): Promise<any>;
}
