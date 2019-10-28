import { RegisterService } from './register.service';
import { CreateUserDTO } from './dto/user.dto';
import { Response } from 'express';
export declare class RegisterController {
    private registerService;
    constructor(registerService: RegisterService);
    createUser(res: Response, createUserDTO: CreateUserDTO): Promise<void>;
}
