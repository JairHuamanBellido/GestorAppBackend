import {
    Controller,
    Post,
    Res,
    Body,
    HttpException,
    HttpStatus,
    Get,
} from '@nestjs/common';

import { RegisterService } from './register.service';
import { CreateUserDTO } from './dto/user.dto';
import { Response } from 'express';
@Controller('register')
export class RegisterController {
    constructor(private registerService: RegisterService) {}

    @Post('/')
    async createUser(
        @Res() res: Response,
        @Body() createUserDTO: CreateUserDTO,
    ) { 
        const user = await this.registerService.createUser(createUserDTO);
        res.json(user);
    }
}
