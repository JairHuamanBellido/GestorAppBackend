import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';

import { UsersModule } from '../../models/users/users.module';

@Module({
    providers: [RegisterService],
    controllers: [RegisterController],
    imports: [UsersModule],
})
export class RegisterModule {}
