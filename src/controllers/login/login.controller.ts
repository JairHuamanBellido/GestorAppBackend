import { Controller, Post, Body, Res, HttpException, HttpStatus } from '@nestjs/common';
import { UserAuthDTO } from './dto/user-auth';
import { AuthService } from '../auth/auth.service';
import { Response } from 'express';


@Controller('login')
export class LoginController {
    constructor(
        private readonly authService:AuthService,
        
    ){}
    @Post("/")
    async authenticate(@Res() res:Response, @Body() userAuth:UserAuthDTO):Promise<any>{
        const user =  await this.authService.validateUser(userAuth.username,userAuth.password);

        //const payload =  user;
        if(user == null){
            throw new HttpException('Invalidad Credentials', HttpStatus.NOT_FOUND);
            
        }
        res.json(user);
    }
}
