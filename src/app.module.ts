import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import {  MongooseModule} from "@nestjs/mongoose";
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {  config} from "dotenv";
config();
console.log(process.env.mongo_server);
@Module({
    imports: [
        RegisterModule,
        
        MongooseModule.forRoot(process.env.mongo_server,{
          useNewUrlParser:true,
          useUnifiedTopology:true
        }),
        
        LoginModule,
        
        AuthModule,
        
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
