import { Injectable } from '@nestjs/common';
import { UsersService } from '../../models/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);
        

        if (user && user.password === password) {
            
       
            return user;
        }
        return null;
    }
}
