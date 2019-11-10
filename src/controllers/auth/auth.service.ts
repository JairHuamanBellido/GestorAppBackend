import { Injectable } from '@nestjs/common';
import { UsersService } from '../../models/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
        ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);
        

        if (user && user.password === password) {
            
            const payload = {username:user.username, ruc:user.ruc};
            return {user,access_token: this.jwtService.sign(payload)};
        }
        return null;
    }
}
